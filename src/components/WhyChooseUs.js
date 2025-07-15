"use client";

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🏖️",
      title: "إطلالة بحرية رائعة",
      desc: "استمتع بمشاهد البحر الأحمر من غرفتك مباشرة.",
    },
    {
      icon: "🛏️",
      title: "غرف فاخرة",
      desc: "مجهزة بأحدث وسائل الراحة والتصميم الحديث.",
    },
    {
      icon: "🍽️",
      title: "مطاعم متميزة",
      desc: "قائمة طعام عالمية بنكهات محلية.",
    },
    {
      icon: "🏊",
      title: "مسبح خاص",
      desc: "مسبح واسع ونظيف لعائلتك أو استرخائك.",
    },
    {
      icon: "🌅",
      title: "موقع مميز",
      desc: "في قلب الغردقة وبالقرب من أفضل المزارات السياحية.",
    },
    {
      icon: "🧘",
      title: "منتجع صحي وسبا",
      desc: "استرخِ في سبا متكامل يقدم جلسات تدليك وعناية بالجسم.",
    },
    {
      icon: "🎉",
      title: "فعاليات ومناسبات",
      desc: "تنظيم حفلات، مؤتمرات، وأعراس في قاعات مميزة.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "مناسب للعائلات",
      desc: "أنشطة للأطفال وخدمات مخصصة للعائلات.",
    },
    {
      icon: "🅿️",
      title: "موقف سيارات مجاني",
      desc: "توفير موقف خاص وآمن للسيارات للنزلاء.",
    },
  ];

  return (
    <section className="bg-[#F4F6F6] py-16 px-4 md:px-12 text-[#2E86C1]">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">لماذا تختارنا؟</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
