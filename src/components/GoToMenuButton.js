// src/components/GoToMenuButton.jsx
"use client";

import Link from "next/link";

const GoToMenuButton = () => {
  return (
    <div className="text-center mt-10">
      <Link
        href="/menu"
        className="inline-block bg-gold text-white px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-red-700 hover:scale-105"
      >
        View Full Menu
      </Link>
    </div>
  );
};

export default GoToMenuButton;
