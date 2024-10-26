import { useDispatch } from 'react-redux';
import { changeTableRow } from '@/constant/sliceFeature';

interface SelectProps {
  value: number;
  data: number[];
}
const Select: React.FC<SelectProps> = ({ value, data }) => {
  const dispatch = useDispatch();

  const handleChange = (val: number) => {
    dispatch(changeTableRow(val));
  };
  return (
    <div className="flex gap-2 items-center text-sm 2xl:text-lg text-[#334155] justify-end dark:text-white">
      <p className="">Show:</p>
      <div className="bg-white rounded-[2px] outline-none border text-sm 2xl:text-lg border-solid p-2 border-[#E2E8F0] dark:bg-[#484554] dark:border-[#484554] flex gap-2 items-center w-[96px]">
        <select
          name="row"
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="dark:bg-[#484554] bg-white outline-none text-sm 2xl:text-lg capitalize"
        >
          {data.map((c, index) => {
            return (
              <option key={index} value={c} className="mr-2 text-lg">
                {c} rows
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
