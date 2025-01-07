"use client";
import React, { useRef, useState ,useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Mousewheel, Navigation } from "swiper/modules";
import Image from "next/image";
import clientsResponse from "../data/clientsResponse";

import { MoveLeft, MoveRight } from 'lucide-react';

export function WorkSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // mousewheel={true}
        modules={[FreeMode, Pagination, Mousewheel]}
        className="mySwiper w-full h-full p-8"
      >
        <SwiperSlide className="flex justify-center items-center bg-yellow-100 rounded-lg">
          <Image
            src="https://res.cloudinary.com/dpwj6nisl/image/upload/v1736023715/Untitled_1_drszbs.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dpwj6nisl/image/upload/v1736023715/Untitled_2_aesw9m.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dpwj6nisl/image/upload/v1736023715/Untitled_3_bkn8nq.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://res.cloudinary.com/dpwj6nisl/image/upload/v1736023715/Untitled_4_qjzoje.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function ClientSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Trigger a state update to force re-render when refs are ready
    setIsInitialized(true);
  }, []);

  return (
    <div className="w-full h-full relative">
      {isInitialized && (
        <Swiper
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={40}
          className="mySwiper h-full w-full"
        >
          {clientsResponse.map((client) => (
            <SwiperSlide
              className="flex justify-center items-center bg-gradient-to-tl from-[#2c336b] to-[#101321] rounded-3xl p-6 h-full border"
              key={client.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="h-[80%] w-full flex flex-col p-2">
                <h3 className="text-4xl font-bold font-montserrat">
                  {client.name}
                </h3>
                <span className="text-sm font-thin mt-2 text-[#B9B9B9]">
                  {client.position}
                </span>
                <p className="text-sm mt-6 leading-7">{client.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="p-4 absolute -bottom-36 left-1/2 transform -translate-x-1/2 flex gap-4">
      <div
        ref={prevRef}
        className="swiper-button-prev  bg-[#252b5b] border-2 border-[#5b68e4] hover:bg-[#5b68e4] text-white rounded-full w-20 h-20 flex items-center justify-center cursor-pointer"
      ><MoveLeft className="w-8"/></div>
      <div
        ref={nextRef}
        className="swiper-button-next  z-10 bg-[#252b5b] border-2 border-[#5b68e4] text-white rounded-full w-20 h-20 flex items-center justify-center cursor-pointer hover:bg-[#5b68e4]"
      ><MoveRight className="w-8"/></div>
      </div>
      
    </div>
  );
}
