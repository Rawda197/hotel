// components/HeroSection.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const phrases = [
  "مرحبًا بك في منتجع بلو بريز الغردقة",
  "استمتع بتجربة فندقية فاخرة",
  "راحة، هدوء، وضيافة لا تُنسى",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // أنميشن الكتابة
  useEffect(() => {
    if (index >= phrases.length) return;

    const timeout = setTimeout(() => {
      setText(phrases[index].substring(0, subIndex));
      if (!reverse) {
        if (subIndex < phrases[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          setReverse(true);
          setTimeout(() => setReverse(false), 2000);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setReverse(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, reverse ? 40 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-white text-[#2E86C1] px-4 text-center">
      {/* النص المتحرك */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 min-h-[80px]">
        {text}
        <span className="animate-pulse">|</span>
      </h1>

      {/* زر احجز الآن */}
      <Link
        href="/rooms"
        className="bg-[#F4D03F] hover:bg-yellow-300 text-black font-bold px-8 py-3 rounded-full shadow-md transition"
      >
        احجز الآن
      </Link>
    </section>
  );
};

export default HeroSection;
