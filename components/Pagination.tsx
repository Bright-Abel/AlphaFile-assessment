import clsx from 'clsx';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { rowSelect } from '@/constant/data-json';
import Select from './Select';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const { row } = useSelector((state: RootState) => state.dataSlice);

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 md:justify-between md:items-center  mt-4">
      <div className="flex items-center gap-4 justify-center md:justify-normal">
        <button
          className="h-9 w-9 text-[#334155] disabled:text-[#64748B] dark:text-[#8576FF] disabled:dark-text-[#8576FF] text-xs rounded-[2px] p-2 flex items-center justify-center disabled:bg-[#E2E8F0] disabled:cursor-not-allowed cursor-pointer bg-white dark:bg-[#484554] disabled:dark:bg-[#484554] border border-solid border-[#E2E8F0] dark:border-[#484554] disabled:border-transparent"
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          &#10094;
        </button>
        <div className="flex ">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={clsx(
                `px-3 py-1 h-6 rounded-[100px] w-6 flex items-center justify-center text-sm xl:text-lg text-[#334155] dark:text-white hover:bg-[#E2E8F0] hover:dark:bg-[#484554] hover:text-[#64748B] hover:dark:text-white`,
                currentPage === index + 1 && 'bg-[#8576FF] text-white '
              )}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="h-9 w-9 text-[#334155] disabled:text-[#64748B] dark:text-[#8576FF] disabled:dark-text-[#8576FF] text-xs rounded-[2px] p-2 flex items-center justify-center disabled:bg-[#E2E8F0] disabled:cursor-not-allowed cursor-pointer bg-white dark:bg-[#484554] disabled:dark:bg-[#484554] border border-solid border-[#E2E8F0] dark:border-[#484554] disabled:border-transparent"
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &#10095;
        </button>
      </div>
      <Select value={row} data={rowSelect} />
    </div>
  );
};
export default Pagination;
