"use client"
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '@/store/index';
import {  useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  closeModal } from '@/constant/sliceFeature';
const Modal = () => {
      const { isModalOpen, getModalData } =
        useSelector((state: RootState) => state.dataSlice);
      const dispatch = useDispatch();
     useEffect(() => {
       AOS.init({
         duration: 1200,
         // easing: 'ease-in-sine',
         anchorPlacement: 'center-bottom',
       });
     }, []);
  return (
    <section className={clsx('w-full h-full min-h-screen max-h-screen fixed top-0 bottom-0 left-0 bg-black bg-opacity-50 flex text-lg justify-center z-40 items-center px-4', isModalOpen ? 'block' : 'hidden')}>
      {getModalData.map((item) => {
        const { eventName, date, description, id, speaker } = item;
        return (
          <div
            key={id}
            className="max-w-[440px] w-full  rounded-[2px] shadow-md z-50 bg-white dark:bg-[#484554]"
            data-aos="flip-up"
            data-aos-delay="400"
          >
            <div className="py-6 px-4 flex flex-col gap-6">
              <div className="flex  justify-between gap-4  items-start text-[#334155] dark:text-[#FCF7FF]">
                <span className="">
                  <h2 className="text-xl font-semibold">{eventName}</h2>
                  <p className="text-[#64748B] dark:text-[#FCF7FF]">{date}</p>
                </span>

                <span
                  onClick={() => dispatch(closeModal())}
                  className="h-6 w-6 rounded-full bg-white dark:bg-[#ADA9BB] text-[#484554] border border-solid border-[#E2E8F0] hover:bg-[#ADA9BB] hover:dark:bg-[#E2E8F0]] text-sm duration-500 cursor-pointer dark:border-[#484554] flex items-center justify-center"
                >
                  x
                </span>
              </div>

              <p className=" text-lg text-[#64748B] dark:text-[#FCF7FF]">
                {description}
              </p>

              <span className="mt-[12px] text-[#64748B] dark:text-[#FCF7FF]">
                <Image
                  src="/assets/group.png"
                  alt="people_group"
                  width={80}
                  height={32}
                  className="w-[80px] h-{32px} object-cover"
                />
                <p className="text-lg">1 Guest Speakers: {speaker}.</p>
                <p className="">300 Attendees</p>
              </span>
            </div>
            <div className="bg-[#F8FAFC] dark:bg-[#ADA9BB] w-full flex gap-2 md:justify-between flex-col md:flex-row items-center py-4 px-2 md:p-6">
              <button
                type="button"
                className="w-full md:w-[70px] h-[36px] border border-solid border-[#E2E8F0] dark:border-[#ADA9BB] bg-white rounded-[2px] text-[#334155] hover:bg-[#64748bc9] hover:text-white duration-500 flex items-center justify-center"
              >
                Edit
              </button>
              <span className="w-full md:justify-end flex gap-2 text-white dark:text-white flex-col md:flex-row items-center">
                <button
                  type="button"
                  className="bg-[#F43F5E] w-full  md:w-fit h-[36px] rounded-[2px] px-2 flex items-center justify-center md:justify-normal hover:opacity-75 duration-500"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="bg-[#8576FF] w-full md:w-fit h-[36px] rounded-[2px] px-2 flex items-center justify-center md:justify-normal hover:opacity-75 duration-500"
                >
                  Mark as completed
                </button>
              </span>
            </div>
          </div>
        );
      })}
    
    </section>
  );
}
export default Modal