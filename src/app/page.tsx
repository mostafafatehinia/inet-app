"use client";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { NewItem } from "@/components";

import newItems from "../constants/data.json";

import "swiper/css";
import "swiper/css/free-mode";

export default function Home() {
  return (
    <main className="flex h-screen flex-wrap items-center justify-center p-4 xl:p-24">
      <Swiper
        modules={[FreeMode]}
        breakpoints={{
          1440: {
            slidesPerView: 6.5,
            spaceBetween: 16,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
          920: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          760: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          420: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
      >
        {newItems.map((item, index) => (
          <SwiperSlide key={index}>
            <NewItem cover={item.poster} logo={item.logo} rate={index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
