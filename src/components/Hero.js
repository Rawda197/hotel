"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";

const heroImages = Array.from({ length: 51 }, (_, i) => `/images/${i + 1}.jpg`);

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] sm:h-[90vh] md:h-[100vh] overflow-hidden text-white">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 3000 }}
        className="h-full"
      >
        {heroImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100vh] sm:h-[90vh] md:h-[100vh]">
              <Image
                src={src}
                alt={`Restaurant view ${index + 1}`}
                fill
                className="object-cover brightness-[0.4]"
                priority={index === 0}
              />

              {/* النص في منتصف الشاشة */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-4 leading-tight">
                  Discover Authentic Flavors
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mb-6 leading-relaxed">
                  Enjoy traditional dishes from Egypt, Levant, Iraq, Gulf & Morocco with a luxurious black and gold atmosphere.
                </p>
                <Link
                  href="/reservation"
                  className="mt-4 bg-gold text-black font-semibold px-5 py-3 rounded-xl hover:bg-yellow-400 transition duration-300"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
