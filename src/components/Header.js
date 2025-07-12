"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/menu", text: "Menu" },
    { href: "/about", text: "About" },
    { href: "/reservation", text: "Reservation" },
    { href: "/events", text: "Events" },
   
    { href: "/contact", text: "Contact" },
    { href: "/locations", text: "Locations" },
    
  ];

  const linkClasses =
    "transition duration-300 hover:text-yellow-400 hover:scale-105";

  return (
    <header className="bg-black text-gold py-3 px-4 md:px-6 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* الشعار */}
        <Link href="/" className="block flex-shrink-0">
          <div className="w-28 h-14 md:w-40 md:h-20 bg-white rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/logo1.svg"
              alt="TABQ Logo"
              width={160}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* روابط الديسكتوب */}
        <nav className="hidden lg:flex gap-4 text-[13px] xl:gap-6 uppercase font-semibold">
          {navLinks.map(({ href, text }) => (
            <Link key={href} href={href} className={linkClasses}>
              {text}
            </Link>
          ))}
        </nav>

        {/* زر Book a Table - يظهر فقط في الشاشات الكبيرة */}
        <Link
          href="/reservation"
          className="hidden lg:inline-block bg-gold text-black font-bold px-4 py-2 rounded-xl hover:bg-yellow-400 transition"
        >
          Book a Table
        </Link>

        {/* زر القائمة المنسدلة للموبايل */}
        <button onClick={toggleMenu} className="lg:hidden text-gold ml-4">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 w-full bg-black text-gold shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* زر الإغلاق */}
        <div className="flex justify-end px-4">
          <button onClick={toggleMenu} className="text-yellow-400">
            <X size={26} />
          </button>
        </div>

        {/* روابط القائمة للموبايل */}
        <nav className="flex flex-col items-center space-y-4 mt-4 font-semibold text-sm uppercase">
          {navLinks.map(({ href, text }) => (
            <Link
              key={href}
              href={href}
              className={linkClasses}
              onClick={toggleMenu}
            >
              {text}
            </Link>
          ))}

          {/* زر Book Now داخل القائمة */}
          <Link
            href="/reservation"
            className="mt-4 bg-gold text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition"
            onClick={toggleMenu}
          >
            Book a Table
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
