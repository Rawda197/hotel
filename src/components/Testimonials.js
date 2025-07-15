"use client";

const testimonials = [
  { name: "ليلى من القاهرة", text: "أجمل إقامة في الغردقة، كل شيء كان مريح ومنظم!" },
  { name: "أحمد من جدة", text: "الخدمة ممتازة والمكان هادئ جدًا، أنصح به." },
  { name: "منى من دبي", text: "تجربة لا تُنسى، سأعود بالتأكيد." },
  { name: "علي من الرياض", text: "موقع رائع وإطلالة مذهلة على البحر." },
  { name: "فاطمة من الكويت", text: "الغرف نظيفة جدًا، والطاقم متعاون لأقصى حد." },
  { name: "سامي من عمان", text: "الإفطار متنوع والمكان هادئ جدًا." },
  { name: "نورا من البحرين", text: "المنتجع جميل جدًا، وأطفالي استمتعوا كثيرًا." },
  { name: "خالد من قطر", text: "مكان مثالي للاسترخاء بعيدًا عن الزحمة." },
  { name: "هالة من المغرب", text: "الاستقبال كان دافئ والخدمة ممتازة من البداية للنهاية." },
];

export default function Testimonials() {
  // كرري الآراء مرتين عشان تعمل حركة لا نهائية بدون فاصل
  const repeated = [...testimonials, ...testimonials];

  return (
    <section className="bg-white py-16 px-4 md:px-12 text-[#2E86C1]">
      <h3 className="text-3xl font-bold text-center mb-10">آراء عملائنا</h3>

      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {repeated.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] bg-[#F4F6F6] rounded-xl shadow-md p-6 transition hover:scale-105"
            >
              <p className="italic mb-4">“{t.text}”</p>
              <p className="font-semibold text-right">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ستايل الحركة */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        /* إخفاء الشريط نهائيًا */
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
