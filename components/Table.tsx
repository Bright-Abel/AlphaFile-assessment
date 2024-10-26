'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { GoDotFill } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/index';
import { openModal } from '@/constant/sliceFeature';

interface TableProps {
  currentPage: number;
  // setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  // totalPages: number;
}

const Table: React.FC<TableProps> = ({
  currentPage,
  // setCurrentPage,
  // totalPages,
}) => {
  const [rows, setRows] = useState<number>(10); // Set a default value for rows
  const { row, date, search, status, speaker, filtered_data } = useSelector(
    (state: RootState) => state.dataSlice
  );

 

  const dispatch = useDispatch();

  useEffect(() => {
    setRows(row || 10); // Default to 10 if row is undefined
  }, [row, status, speaker, date, search]);

  return (
    <div className="bg-white w-full hidden md:block dark:bg-dark-300 text-[#334155] dark:text-white mt-2">
      <table className="w-full table-auto border-collapse ">
        <thead>
          <tr className="bg-[#f1f5f8] dark:bg-[#6A6676] text-left">
            <th className="text-borders font-normal p-4">Event Name</th>
            <th className="whitespace-nowrap text-borders font-normal p-4">
              Date
            </th>
            <th className="whitespace-nowrap text-borders font-normal p-4">
              Speaker
            </th>
            <th className="whitespace-nowrap text-borders font-normal p-4">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered_data.length ? (
            filtered_data
              .slice((currentPage - 1) * rows, currentPage * rows)
              .map((item, index) => (
                <tr
                  key={index}
                  className="text-lg cursor-pointer hover:bg-[#f1f5f8c4] duration-500 hover:dark:bg-[#6a667691]"
                  onClick={() => dispatch(openModal(item.id))}
                >
                  {' '}
                  {/* Use a unique key here */}
                  <td className="text-sm capitalize p-4">{item.eventName}</td>
                  <td className="text-sm p-4">{item.date}</td>
                  <td className="text-sm p-4">{item.speaker}</td>
                  <td className="text-sm p-4">
                    <div
                      className={clsx(
                        'flex gap-1 items-center text-xs h-[24px] w-[99px] px-2 py-1 rounded-full',
                        item.status.includes('In')
                          ? 'bg-[#DBEAFE] text-[#3B82F6]'
                          : 'bg-[#D1FAE5] text-[#10B981]'
                      )}
                    >
                      <GoDotFill
                        className={clsx(
                          item.status.includes('In')
                            ? 'text-[#3B82F6]'
                            : 'text-[#10B981]'
                        )}
                      />
                      <p>{item.status}</p>
                    </div>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No available data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
