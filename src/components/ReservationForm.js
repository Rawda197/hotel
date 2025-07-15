"use client";

import { useState } from "react";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    people: "",
    date: "",
    time: "",
    notes: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    // Reset the form
    setForm({
      name: "",
      email: "",
      people: "",
      date: "",
      time: "",
      notes: "",
    });

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10 text-[#2E86C1]" dir="rtl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
        {/* النموذج */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">احجز إقامتك الآن</h2>
          <p className="text-gray-700 mb-6">
            احجز غرفتك في منتجع <strong>بلو بريز الغردقة</strong> وتمتع بإقامة فاخرة على شاطئ البحر الأحمر.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="الاسم الكامل"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="people"
              placeholder="عدد الأشخاص"
              value={form.people}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <textarea
              name="notes"
              rows="4"
              placeholder="ملاحظات إضافية (اختياري)"
              value={form.notes}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <button
              type="submit"
              className="bg-[#F4D03F] hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-full transition"
            >
              إرسال الحجز
            </button>

            {success && (
              <div className="mt-4 text-green-600 font-semibold">
                ✅ تم إرسال الحجز بنجاح!
              </div>
            )}
          </form>
        </div>

        {/* الصورة */}
        <div className="w-full h-full hidden md:block">
          <img
            src="/images/1.jpg"
            alt="صورة الحجز"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
