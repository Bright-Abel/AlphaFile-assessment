import { IoIosArrowForward } from 'react-icons/io';
import clsx from 'clsx';
import React from 'react';
import {openModal} from '@/constant/sliceFeature';
import { useDispatch } from 'react-redux';

interface AccordionProps {
  isOpen: boolean;
  onClick: () => void;
  eventName: string;
  date: string;
  speaker: string;
  status: string;
  id:number;
}

const Accordion: React.FC<AccordionProps> = ({
  isOpen,
  onClick,
  eventName,
  speaker,
  date,
  status,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full p-4 flex items-center justify-between gap-4 capitalize dark:text-[#FCF7FF] text-[#334155] text-sm border border-solid border-[#FCF7FF] dark:border-[#484554] dark:bg-[#514E5D] bg-[#F2F2F7] focus:outline-none"
      >
        <div className="flex gap-2 items-center">
          <span
            className={clsx(
              '',
              isOpen ? 'rotate-90' : 'rotate-0',
              'transition-transform text-lg font-bold ease-linear duration-400'
            )}
          >
            <IoIosArrowForward />
          </span>
          <span className="capitalize text-left">{eventName}</span>
        </div>
        <div
          className={clsx(
            'flex gap-1 items-center justify-center text-white capitalize text-xs h-[24px] w-[99px] px-2 py-1 rounded-full',
            status.includes('In') ? 'bg-[#3B82F6]' : 'bg-[#10B981]'
          )}
        >
          <p>{status}</p>
        </div>
      </button>

      <div
      onClick={()=> dispatch(openModal(id))}
        className={clsx(
          'overflow-hidden transition-[max-height] w-full duration-700 ease-in-out',
          isOpen ? 'max-h-20' : 'max-h-0'
        )}
      >
        <div className="flex items-center w-full justify-between p-4 capitalize dark:text-[#FCF7FF] text-[#334155] h-[52px] border-[#FCF7FF] bg-[#f5f5f5] text-sm dark:bg-[#383544] border-0 border-b dark:border-[#ADA9BB]">
          <h2>{speaker}</h2>
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
