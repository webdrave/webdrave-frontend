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
  const [works, setworks] = useState([
    "https://res.cloudinary.com/dpwj6nisl/image/upload/v1736023715/Untitled_1_drszbs.jpg",
    "https://res.cloudinary.com/dpwj6nisl/image/upload/v1736023715/Untitled_2_aesw9m.jpg",
    "https://res.cloudinary.com/dpwj6nisl/image/upload/v1736023715/Untitled_3_bkn8nq.jpg",
    "https://res.cloudinary.com/dpwj6nisl/image/upload/q_100/v1737117982/Untitled_4_qjzoje.png"

  ])
  return (
    <Swiper
      slidesPerView={1} // Default value for larger screens
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination, Mousewheel]}
      className="mySwiper w-full h-full p-8"
      breakpoints={{
        // When the screen size is at least 'md' (768px)
        // For smaller screens, the default is 2 slides per view
        1280: {
          slidesPerView: 2,
          spaceBetween:30,
        },
      }}
    >
      {works.map((work, i) => (
  <SwiperSlide className="flex justify-center items-center rounded-lg" key={i}>
    <div className="relative w-full h-96 max-sm:h-full">
      <Image
        src={work}
        alt={`Work ${i}`}
        layout="fill" // Fills the parent container
        objectFit="cover" // Maintains the aspect ratio
        className="rounded-lg"
        quality={100} // Maximum quality
      />
    </div>
  </SwiperSlide>
))}

    </Swiper>
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
          slidesPerView={1}
          spaceBetween={10}
          className="mySwiper h-full w-full"
          breakpoints={{
            // When the screen size is at least 'md' (768px)
            // For smaller screens, the default is 2 slides per view
            1280: {
              slidesPerView: 3,
              spaceBetween:30,
            },
            720:{
              slidesPerView:2,
            }
          }}
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
