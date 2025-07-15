"use client";

import { useState, useEffect } from "react";

export default function AboutUsIntro() {
  const phrases = [
    "منتجع بلو بريز الغردقة هو ملاذ فاخر على شاطئ البحر الأحمر، يجمع بين الأناقة والراحة والضيافة.",
    "نقدم تجربة استثنائية لضيوفنا من خلال خدمات عالية الجودة، أجواء مريحة، وموقع لا يُنسى.",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

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
    }, reverse ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="bg-[#EAF2F8] text-[#2E86C1] py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">🏨 من نحن </h2>
        <p className="text-lg leading-loose min-h-[100px]">
          {text}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </section>
  );
}
