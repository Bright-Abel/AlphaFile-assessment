import React from 'react';
import DashboardCards from './DashboardCards';
import SecondHero from './SecondHero';
import TableComponent from './TableComponent';
import Image from 'next/image';
import { TfiMenuAlt } from "react-icons/tfi";


interface DashboardProps {
  //   isSidebarOpen?: boolean;
  handleClick: () => void;
}
const Dashboard: React.FC<DashboardProps> = ({ handleClick }) => {
  return (
    <main className="h-full md:h-screen md:overflow-y-auto overflow-x-hidden w-full ">
      <div className="flex justify-between md:hidden items-center p-4 border-r border-0 bg-white dark:bg-[#484554] dark:border-[#484554] border-[#E2E8F0] ">
        <Image
          src="/assets/full.jpg"
          alt="full_sidebar"
          height={32}
          width={64}
          className="h-[32px] w-[64px] object-cover"
        />
        <button
          type="button"
          onClick={handleClick}
          className="outline-none text-[#64748B] dark:text-[#FCF7FF] text-lg"
        >
          <TfiMenuAlt />
        </button>
      </div>
      <section className="lg:px-8 px-4 flex flex-col gap-12 py-4">
        <DashboardCards />
        <SecondHero />
        <TableComponent />
      </section>
    </main>
  );
};
export default Dashboard;
