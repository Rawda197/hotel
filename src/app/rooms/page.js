"use client";

import RoomsSection from "../../components/RoomsSection";

export default function RoomsPage() {
  return (
    <main className="py-16 px-4 md:px-12 bg-white text-[#2E86C1]" dir="rtl">
      <h1 className="text-4xl font-bold text-center mb-10">كل الغرف</h1>
      <RoomsSection />
    </main>
  );
}
