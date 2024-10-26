import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/index';
import { fetchAndSort, sortData } from '@/constant/sliceFeature';
import { eventData } from '@/constant/data-json';
import { useEffect, useState } from 'react';
import Accordion from './Accordion';
import Pagination from './Pagination';

const AccordionData = () => {
     const [rows, setRows] = useState<number>(10);
      const [currentPage, setCurrentPage] = useState(1);
       const [openIndex, setOpenIndex] = useState(1);
      const { row, search, filtered_data, status, speaker, date, sorting } =
        useSelector((state: RootState) => state.dataSlice);
      const dispatch = useDispatch();
     useEffect(() => {
       setRows(row);
       dispatch(fetchAndSort(eventData));
       dispatch(sortData());
     }, [row, search, status, speaker, date, sorting, dispatch]);

      const totalPages = rows ? Math.ceil(filtered_data.length / rows) : 0;

        const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? 1 : index);
  };
  
  return (
    <div className="block md:hidden mb-28">
      <span className="flex justify-between items-center px-4 dark:bg-[#6A6676] bg-[#F1F5F9] h-[48px] w-full text-sm font-semibold text-[#64748B] dark:text-[#FCF7FF]">
        <h4 className="">Event Name</h4>
        <h4 className="">Status</h4>
      </span>
      <div className="">
        {filtered_data.length ? (
          filtered_data
            .slice((currentPage - 1) * rows, currentPage * rows)
            .map((item, index) => (
              <Accordion
                key={index}
                id={item.id}
                eventName={item.eventName}
                date={item.date}
                speaker={item.speaker}
                status={item.status}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))
        ) : (
          <h2 className="text-center p-4">No available data</h2>
        )}
      </div>
      <div className="px-4">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
export default AccordionData