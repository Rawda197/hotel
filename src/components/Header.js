"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2E86C1] text-white relative shadow-md fixed w-full z-50 font-bold">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* الشعار داخل شكل بيضاوي متجاوب */}
        <Link href="/" className="flex items-center">
          <div className="relative w-24 h-12 md:w-36 md:h-20 rounded-full overflow-hidden bg-white">
            <Image
              src="/logo.svg"
              alt="شعار بلو بريز"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 120px, 180px"
            />
          </div>
        </Link>

        {/* قائمة الروابط في الشاشات الكبيرة */}
        <nav className="hidden md:flex gap-6 text-lg md:text-xl">
          <Link href="/" className="hover:text-[#F1C40F] transition">
            الرئيسية
          </Link>
          <Link href="/rooms" className="hover:text-[#F1C40F] transition">
            الغرف
          </Link>
          <Link href="/about" className="hover:text-[#F1C40F] transition">
            من نحن
          </Link>
          <Link href="/contact" className="hover:text-[#F1C40F] transition">
            اتصل بنا
          </Link>
        </nav>

        {/* زر الحجز */}
        <div className="hidden md:block">
          <Link
            href="/booking"
            className="bg-[#F1C40F] text-black px-5 py-2 rounded-full text-lg hover:bg-yellow-500 transition"
          >
            احجز الآن
          </Link>
        </div>

        {/* زر القائمة في الموبايل */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="افتح القائمة"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* قائمة الهاتف */}
      {isOpen && (
        <div className="md:hidden bg-[#2E86C1] px-4 py-6 flex flex-col items-center gap-4 text-lg text-white">
          <Link href="/" className="hover:text-[#F1C40F]">
            الرئيسية
          </Link>
          <Link href="/rooms" className="hover:text-[#F1C40F]">
            الغرف
          </Link>
          <Link href="/about" className="hover:text-[#F1C40F]">
            من نحن
          </Link>
          <Link href="/contact" className="hover:text-[#F1C40F]">
            اتصل بنا
          </Link>
          <Link
            href="/booking"
            className="bg-[#F1C40F] text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
          >
            احجز الآن
          </Link>
        </div>
      )}
    </header>
  );
}
