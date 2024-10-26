import { HiDotsVertical } from 'react-icons/hi';
import { RiDownload2Fill } from 'react-icons/ri';
interface SelectProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: string[];
  name: string;
  selectName: string;
}

const SortbyRecent: React.FC<SelectProps> = ({
  value,
  handleChange,
  data,
  name,
  selectName,
}) => {
  return (
    
      <div className="flex gap-2 md:items-center flex-col md:flex-row text-[#334155]  dark:text-white text-sm 2xl:text-lg">
        <div className="flex gap-2 items-center justify-between md:justify-normal">
          <p className="">{selectName}</p>
          <div className="bg-white rounded-[2px] outline-none border border-solid p-2 border-[#E2E8F0] dark:bg-[#484554] dark:border-[#484554] w-fit">
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className="text-sm 2xl:text-lg outline-none bg-transparent capitalize"
            >
              {data.map((c, index) => {
                return (
                  <option key={index} value={c} className="w-fit">
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between md:justify-normal">
        <div className="bg-white rounded-[2px] outline-none border  border-solid p2-2 border-[#E2E8F0] dark:bg-[#484554] justify-center dark:border-[#484554] flex gap-2 items-center h-[36px] w-[36px]">
          <HiDotsVertical className="text-sm xl:text-lg text-[#334155]  dark:text-white" />
        </div>

        <div className="bg-white rounded-[2px] outline-none border  border-solid p-2 2xl:px-2 border-[#E2E8F0] dark:bg-[#484554] gap-2 dark:border-[#484554] flex  items-center w-fit">
          <RiDownload2Fill />
          <p>Export</p>
        </div>
        </div>
      </div>
   
  );
};
export default SortbyRecent;
