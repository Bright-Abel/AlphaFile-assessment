'use client';
import { downNavBar } from '@/constant/data-json';
import clsx from 'clsx';
import { useState } from 'react';

const MobileTab = () => {
  const [active, setActive] = useState('home');

  return (
    <div className="block md:hidden fixed bottom-0 z-30 left-0 h-[80px] right-0 w-full dark:bg-[#383544] bg-white">
      <ul className="flex justify-between w-full border-0 border-t border-solid border-[#F3F4F6] dark:border-[#ADA9BB]">
        {downNavBar.map((item) => {
          const { id, title, icon } = item;
          const isActive = active === title;

          return (
            <li
              key={id}
              onClick={() => setActive(title)}
              className={clsx(
                'relative flex flex-col items-center gap-2 p-4 text-[#64748B] dark:text-[#FCF7FF]',
                isActive && '!text-[#8576FF]'
              )}
            >
              {/* The indicator bar with transition */}
              <div
                className={clsx(
                  'absolute top-0 h-[4px] bg-[#8576FF] rounded-t-full transition-transform duration-300 ease-in-out',
                  isActive ? 'w-[62.2px] scale-x-100' : 'w-[62.2px] scale-x-0'
                )}
                style={{ transformOrigin: 'center' }}
              />

              {/* Icon */}
              <span className="text-xl">{icon}</span>

              {/* Label */}
              <span className="text-sm capitalize">{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileTab;
