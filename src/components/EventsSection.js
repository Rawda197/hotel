"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    id: 1,
    title: "Live Music Night",
    description: "Join us every Friday for a magical evening of live music and delicious food.",
    images: ["/images/event1-1.jpg", "/images/event1-2.jpg", "/images/event1-3.jpg", "/images/event1-4.jpg"],
  },
  {
    id: 2,
    title: "Cooking Show",
    description: "Watch our top chefs prepare signature dishes live in front of you.",
    images: ["/images/event2-1.jpg", "/images/event2-2.jpg", "/images/event2-3.jpg", "/images/event2-4.jpg"],
  },
  {
    id: 3,
    title: "Special Discounts Week",
    description: "Enjoy exclusive offers and meals throughout the week!",
    images: ["/images/event3-1.jpg", "/images/event3-2.jpg", "/images/event3-3.jpg", "/images/event3-4.jpg"],
  },
  {
    id: 4,
    title: "Family Fun Day",
    description: "A delightful day for the whole family with games, food, and music!",
    images: ["/images/event4-1.jpg", "/images/event4-2.jpg", "/images/event4-3.jpg", "/images/event4-4.jpg"],
  },
  {
    id: 5,
    title: "Ramadan Special Nights",
    description: "Experience authentic Ramadan vibes with traditional dishes and live performances.",
    images: ["/images/event5-1.jpg", "/images/event5-2.jpg", "/images/event5-3.jpg", "/images/event5-4.jpg"],
  },
  {
    id: 6,
    title: "Chef’s Table Experience",
    description: "Dine with our head chef and enjoy a curated menu prepared just for you.",
    images: ["/images/event6-1.jpg", "/images/event6-2.jpg", "/images/event6-3.jpg", "/images/event6-4.jpg"],
  },
];

const EventsSection = () => {
  return (
    <section className="bg-white text-black pt-28 pb-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-500">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#fff8e7] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative w-full h-56">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop
                  className="h-full"
                >
                  {event.images.map((imgSrc, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={imgSrc}
                        alt={`${event.title} image ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-700 mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Link
                  href="/reservation"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
