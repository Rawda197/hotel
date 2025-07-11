"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Heart, ShoppingCart } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const MenuSection = ({ cuisine }) => {
  if (!cuisine || !cuisine.name || !Array.isArray(cuisine.dishes)) {
    console.warn("Missing or invalid cuisine data:", cuisine);
    return null;
  }

  return (
    <section className="my-16 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 text-center">
        {cuisine.name}
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cuisine.dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

const DishCard = ({ dish }) => {
  const [liked, setLiked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleLike = () => setLiked(!liked);

  const handleAddToCart = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg relative group transition-transform duration-500 hover:rotate-[3deg] hover:shadow-[0_0_20px_3px_gold]">
      {/* زر القلب */}
      <button
        onClick={toggleLike}
        className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow hover:scale-110 transition"
      >
        <Heart
          className={`w-6 h-6 ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`}
          fill={liked ? "red" : "none"}
        />
      </button>

      {/* زر السلة */}
      <button
        onClick={handleAddToCart}
        className="absolute top-3 left-3 z-10 bg-gold text-black p-2 rounded-full shadow hover:scale-110 transition-all"
      >
        <ShoppingCart className="w-5 h-5" />
      </button>

      {/* رسالة تمت الإضافة */}
      {showMessage && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 text-sm rounded shadow z-10 animate-fadeIn">
          تمت الإضافة إلى السلة ✅
        </div>
      )}

      {/* صور الأكلة */}
      <Swiper modules={[Navigation]} navigation className="w-full h-64">
        {dish.images?.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={dish.name}
              width={500}
              height={300}
              className="object-cover w-full h-64"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* الاسم + زر شكلي للتفاصيل */}
      <div className="p-4 text-black text-center font-semibold text-lg flex items-center justify-center gap-4 flex-wrap">
        {/* ✅ زر شكلي للتفاصيل فقط */}
        <span className="bg-gold text-black text-sm px-4 py-1 rounded-full shadow hover:scale-105 transition-all cursor-default">
          Details

        </span>
        <span className="text-xl text-black">{dish.name}</span>
      </div>
    </div>
  );
};

export default MenuSection;
