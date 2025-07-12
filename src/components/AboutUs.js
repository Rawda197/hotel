"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

const testimonials = [
  { name: "Ali M.", text: "Best Middle Eastern food I've ever had!" },
  { name: "Sarah K.", text: "Feels like home. Warm staff & amazing food." },
  { name: "Yousef T.", text: "Creative dishes with authentic taste!" },
  { name: "Fatima A.", text: "Love the cozy atmosphere and flavors!" },
  { name: "Omar N.", text: "Great service and unforgettable meals." },
  { name: "Layla R.", text: "I come back every week. Highly recommended!" },
];

const AboutUs = () => {
  const sliderRef = useRef(null);
  const reviewsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1;
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-10">
      {/* Section 1: About */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        {/* Image */}
        <div className="w-full h-[300px] md:h-[450px] relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/Logo.jpg"

            alt="About Tabaq"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-4">About Tabaq</h2>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to <strong>Tabaq</strong>, a modern Middle Eastern restaurant rooted in authentic flavors and rich heritage.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            With branches across the Arab world, we offer traditional dishes served with a contemporary twist in a warm and inviting atmosphere.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToReviews}
              className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition"
            >
              Scroll to See Reviews
            </button>

            <Link
              href="/reservation"
              className="bg-black text-white font-semibold px-5 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h3 className="text-3xl font-bold text-yellow-500 mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: "🍽️", title: "Authentic Recipes", desc: "Passed down through generations" },
            { icon: "🌍", title: "Wide Presence", desc: "Branches across the Arab world" },
            { icon: "⭐", title: "Premium Quality", desc: "Fresh & handcrafted ingredients" },
            { icon: "🏆", title: "Awarded Chefs", desc: "Creative & passionate team" },
            { icon: "🕰️", title: "Elegant Ambience", desc: "Modern yet traditional atmosphere" },
            { icon: "🚚", title: "Quick Delivery", desc: "Prompt and reliable service" },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>


     {/* Section 3: Testimonials */}
<div className="max-w-6xl mx-auto overflow-hidden relative" ref={reviewsRef}>
  <h3 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
    Customer Testimonials
  </h3>

  <div className="w-full overflow-hidden">
    <div className="flex w-[200%] animate-marquee gap-6">
      {[...testimonials, ...testimonials].map((t, i) => (
        <div
          key={i}
          className="min-w-[300px] bg-white border border-yellow-400 shadow-lg rounded-xl p-6 snap-start transition hover:scale-105 hover:bg-yellow-50 duration-300"
        >
          <p className="italic text-gray-700 mb-4">“{t.text}”</p>
          <p className="font-bold text-right text-gray-800">– {t.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutUs;
