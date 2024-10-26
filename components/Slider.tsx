'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { newsItems } from '@/constant/data-json';
import Image from 'next/image';
import { useState } from 'react';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative rounded-[5px] h-fit md:h-[320px] md:max-h-[320px]  lg:w-1/2 w-full">
      {/* max-w-[510px] */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{ delay: 3000 }}
        loop
      >
        {newsItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-fit md:h-[320px] md:max-h-[320px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-full rounded-[5px] object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6  text-white w-full">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION BUTTON */}
      <div className="absolute top-1/2 transform z-20 -translate-y-1/2 flex justify-between w-full p-2">
        <div className="custom-prev flex items-center cursor-pointer justify-center h-6 w-6 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
          <span className="text-sm text-[#334155]">&#10094;</span>
        </div>
        <div className="custom-next flex items-center cursor-pointer justify-center h-6 w-6 bg-white rounded-full shadow-md hover:bg-gray-200 transition">
          <span className="text-sm text-[#334155]">&#10095;</span>
        </div>
      </div>
      {/* Custom Pagination with Dashes */}
      <div className="absolute bottom-2 left-1/2 transform z-20 -translate-x-1/2 flex space-x-2">
        {newsItems.map((_, index) => (
          <span
            key={index}
            className={`text-lg font-extrabold ${
              activeIndex === index ? 'text-white' : 'text-black'
            }`}
          >
            {activeIndex === index ? '—' : '–'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
