'use client';
import { sortingData } from '@/constant/sliceFeature';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/index';
import SortSelect from './SortSelect';
import { sortSelect } from '@/constant/data-json';

import { IoSearch } from 'react-icons/io5';
import SortbyRecent from './SortbyRecent';

const Sort = () => {
  const { filtered_data, search, date, status, speaker, data, sorting } =
    useSelector((state: RootState) => state.dataSlice);
  const dispatch = useDispatch();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(sortingData({ name, value }));
  };
  return (
    <div className="text-sm xl:text-lg text-[#334155]  dark:text-white flex md:justify-between flex-col md:flex-row md:items-center flex-wrap gap-[10px]">
      <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-2">
        {/* SEARCH */}
        <div className="bg-white rounded-[2px] outline-none border text-sm 2xl:text-lg border-solid p-2 border-[#E2E8F0] dark:bg-[#484554] dark:border-[#484554] flex gap-2 items-center capitalize">
          <IoSearch className="text-[#94A3B8]" />
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Search..."
            className="placeholder:text-[#CBD5E1] outline-none bg-transparent"
          />
        </div>
        {/* Date */}

        {/* STATUS */}
        <SortSelect
          name={'date'}
          selectName={'date'}
          handleChange={handleChange}
          value={date}
          data={data}
        />
        {/* Status */}
        <SortSelect
          name={'status'}
          selectName={'status'}
          handleChange={handleChange}
          value={status}
          data={data}
        />
        {/* NAME */}
        <SortSelect
          name={'speaker'}
          selectName="name"
          handleChange={handleChange}
          value={speaker}
          data={data}
        />

        <h2 className="2xl:font-semibold font-bold text-sm 2xl:text-lg">
          Displaying {filtered_data.length} result
        </h2>
      </div>
      <SortbyRecent
        name={'sorting'}
        selectName="Sort:"
        handleChange={handleChange}
        value={sorting}
        data={sortSelect}
      />
    </div>
  );
};

export default Sort;
