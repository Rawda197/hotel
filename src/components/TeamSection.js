"use client";

export default function TeamSection() {
  const team = [
    { name: "أ. سارة المصري", title: "المدير العام" },
    { name: "أ. كريم عبد الله", title: "مدير علاقات العملاء" },
    { name: "أ. منى فؤاد", title: "مسؤولة الحجوزات" },
    { name: "أ. شريف نادر", title: "مدير الصيانة والخدمات" },
    { name: "أ. فاطمة عبد الحكيم", title: "مديرة قسم النظافة" },
    { name: "أ. ياسر جمال", title: "رئيس قسم الأمن" },
    { name: "أ. دعاء حسين", title: "مشرفة قسم الغرف" },
    { name: "أ. سامي توفيق", title: "مدير الموارد البشرية" },
    { name: "أ. ندى محمد", title: "مديرة التسويق الرقمي" },
    { name: "أ. حسام البدري", title: "رئيس الطهاة" },
    { name: "أ. نورا فريد", title: "منسقة الفعاليات" },
    { name: "أ. أحمد الزيني", title: "مسؤول تكنولوجيا المعلومات" },
  ];

  return (
    <section className="bg-[#EAF2F8] text-[#2E86C1] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">فريق العمل</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-105"
            >
              <div className="text-2xl font-bold mb-2">{member.name}</div>
              <div className="text-gray-600">{member.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
