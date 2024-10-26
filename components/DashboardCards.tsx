import clsx from 'clsx';
import { MdOutlineInfo } from 'react-icons/md';
import { dashboardCards } from '@/constant/data-json';
import { RiArrowRightUpLine, RiArrowRightDownLine } from 'react-icons/ri';
const DashboardCards = () => {
  return (
    <article className="w-full ">
      <h2 className="md:text-[22px] md:leading-[20px] text-lg text-black dark:text-white">
        Welcome! here’s your summary
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-[12px] mt-6">
        {dashboardCards.map((item) => {
          const { id, title, amount, number } = item;
          return (
            <div
              key={id}
              className="bg-white border shadow-md dark:shadow-none border-solid border-[#F2F2F7] dark:border-[#484554] dark:bg-[#484554] hover:scale-[1.04] duration-500 cursor-pointer p-4  rounded-[4px]"
            >
              <span className="flex items-center gap-2 text-[#64748B] dark:text-white">
                <h2 className="text-lg font-semibold ">{title}</h2>
                <MdOutlineInfo />
              </span>

              <div className="flex items-center gap-2 text-black dark:text-white">
                <h1 className="text-xl font-semibold">{amount}</h1>
                <span
                  className={clsx(
                    `flex gap-2 font-semibold text-xs items-center`,
                    number > 1 ? 'text-[#10B981]' : 'text-[#F43F5E]'
                  )}
                >
                  {number < 0 ? (
                    <RiArrowRightUpLine className="text-lg" />
                  ) : (
                    <RiArrowRightDownLine className="text-lg" />
                  )}
                  <small className="">-{number}.0%</small>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default DashboardCards;
