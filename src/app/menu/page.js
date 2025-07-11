"use client";

import MenuSection from "../../components/MenuSection";
import menuData from "../../data/menuData"; // ضيفي هنا البيانات اللي فيها المطابخ والأطباق

const MenuPage = () => {
  return (
    <main className="bg-black text-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gold text-center mb-6">
          Explore Our Menu
        </h1>

        {/* ✅ الجملة التوضيحية بعد تعديل تنسيقات الدول */}
        <p className="text-center text-lg text-gray-300 mb-10">
          Discover a variety of traditional Arabic cuisines, including{" "}
          <span className="text-gold text-xl font-medium">Egyptian</span>,{" "}
          <span className="text-gold text-xl font-medium">Levantine</span>,{" "}
          <span className="text-gold text-xl font-medium">Iraqi</span>,{" "}
          <span className="text-gold text-xl font-medium">Gulf</span>, and{" "}
          <span className="text-gold text-xl font-medium">Moroccan</span> dishes — each rich in flavor and culture.
        </p>

        {menuData.map((cuisine) => (
          <MenuSection key={cuisine.id} cuisine={cuisine} />
        ))}
      </div>
    </main>
  );
};

export default MenuPage;
