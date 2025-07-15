"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import rooms from "../data/rooms";
import Link from "next/link";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#2E86C1] hover:rotate-[3deg]">
      {/* سلايدر الصور */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-56"
      >
        {room.images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-56">
              <Image
                src={img}
                alt={`صورة ${index + 1} لـ ${room.title}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-4 space-y-2 text-[#2E86C1]">
        <h3 className="text-xl font-bold">{room.title}</h3>
        <p className="text-sm text-gray-600 min-h-[60px]">{room.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-bold text-lg">{room.price} ج.م / الليلة</span>
          <div className="flex gap-2">
            <Link
              href={`/rooms/${room.id}`}
              className="px-4 py-1 bg-[#2E86C1] text-white rounded-full text-sm hover:bg-[#1A5276]"
            >
              تفاصيل
            </Link>
            <Link
              href="/reservation"
              className="px-4 py-1 bg-[#F4D03F] text-black rounded-full text-sm hover:bg-yellow-400 font-bold"
            >
              احجز الآن
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoomsSection = () => {
  return (
    <section className="py-16 px-4 bg-[#EAF2F8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsSection;
