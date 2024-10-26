'use client';
import Dashboard from '@/components/Dashboard';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import Modal from '@/components/Modal';
import AccordionData from '@/components/AccordionData';
import MobileTab from '@/components/MobileTab';
const Landing = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="min-h-screen w-full relative ">
      <Modal/>
    
    <div className="min-h-screen w-full md:grid md:grid-cols-[auto_1fr] ">

      <Sidebar isSidebarOpen={isSidebarOpen} handleClick={handleClick} />
      <Dashboard handleClick={handleClick} />
      <AccordionData/>
      <MobileTab/>
    </div>
    </div>
  );
};
export default Landing;
