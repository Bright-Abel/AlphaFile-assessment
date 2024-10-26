import React from 'react';
import { getUniqueValue, DataProps } from '@/constant/type';

interface SelectProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: DataProps[];
  name: keyof DataProps;
  selectName: string;
}
const SortSelect: React.FC<SelectProps> = ({
  value,
  handleChange,
  data,
  name,
  selectName,
}) => {
  const newData = getUniqueValue({ data, type: name });
  return (
    <div className="flex justify-center md:justify-normal w-full md:w-fit items-center text-[#334155] dark:text-[#FCF7FF] dark:bg-[#484554] border dark:border-[#484554] border-[#E2E8F0] border-solid p-2 rounded-[2px]">
      <div className="flex justify-center md:justify-normal w-full md:w-fit items-center">
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className="bg-white outline-none text-sm  2xl:text-lg dark:bg-[#484554]  capitalize"
        >
          <option value="" disabled className="">
            {selectName}
          </option>
          {newData.map((c, index) => {
            return (
              <option key={index} value={c} className="">
                {c}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default SortSelect;
