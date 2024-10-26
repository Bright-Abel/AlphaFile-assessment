'use client';
import Table from './Table';
import Sort from './Sort';
import Pagination from './Pagination';
import { useState, useEffect } from 'react';
import { eventData } from '@/constant/data-json';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/index';
import { fetchAndSort, sortData } from '@/constant/sliceFeature';
const Component = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rows, setRows] = useState<number | null>();
  
  const { row, search, filtered_data, status, speaker, date, sorting } =
    useSelector((state: RootState) => state.dataSlice);
  const dispatch = useDispatch();
 

  useEffect(() => {
    setRows(row);
    dispatch(fetchAndSort(eventData));
    dispatch(sortData());
  }, [row, search, status, speaker, date, sorting, dispatch]);

  const totalPages = rows ? Math.ceil(filtered_data.length / rows) : 0;
  return (
    <section className=" w-full ">
      <div className="md:overflow-auto">
        <Sort />
        <Table
          currentPage={currentPage}
          // setCurrentPage={setCurrentPage}
          // totalPages={totalPages}
        />
      </div>
      <div className="hidden md:block">
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      </div>
    </section>
  );
};

export default Component;
