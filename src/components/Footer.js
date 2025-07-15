export default function Footer() {
  return (
    <footer className="bg-[#2E86C1] text-white pt-12 pb-6 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-right" dir="rtl">

        {/* عن المنتجع */}
        <div>
          <h3 className="text-xl font-bold text-[#F4D03F] mb-4">عن بلو بريز</h3>
          <p className="text-sm leading-relaxed text-gray-100">
            منتجع <strong>بلو بريز الغردقة</strong> هو وجهتك المثالية للاسترخاء والاستجمام على شاطئ البحر الأحمر.
            نوفّر إقامة فاخرة وخدمات عالية الجودة وسط أجواء هادئة ومميزة.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="text-xl font-bold text-[#F4D03F] mb-4">روابط سريعة</h3>
          <ul className="text-sm text-gray-100 space-y-2">
            <li>الرئيسية</li>
            <li>عن المنتجع</li>
            <li>الغرف</li>
            <li>آراء العملاء</li>
            <li>تواصل معنا</li>
          </ul>
        </div>

        {/* معلومات التواصل */}
        <div>
          <h3 className="text-xl font-bold text-[#F4D03F] mb-4">معلومات التواصل</h3>
          <ul className="text-sm text-gray-100 space-y-2">
            <li>📍 زهراء المعادي، القاهرة، مصر</li>
            <li>📞 0115 143 2229</li>
            <li>📧 info@bluebreeze-hotel.com</li>
            <li>🕐 متاح يوميًا: 24 ساعة</li>
          </ul>
        </div>
      </div>

      {/* الأسفل */}
      <div className="mt-10 border-t border-[#1B4F72] pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} <span className="text-[#F4D03F] font-semibold">بلو بريز الغردقة</span>. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
