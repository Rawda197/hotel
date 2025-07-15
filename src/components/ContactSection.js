"use client";

import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `الاسم: ${form.name}%0Aالإيميل: ${form.email}%0Aالهاتف: ${form.phone}%0Aالموضوع: ${form.subject}%0Aالرسالة: ${form.message}`;
    window.open(`https://wa.me/201151432229?text=${msg}`, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-[#EAF2F8] py-16 px-4" dir="rtl">
      {/* الجملة في منتصف الشاشة */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2E86C1]">تواصل معنا</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch text-right">
        {/* ✅ نموذج التواصل */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-4"
        >
          <h3 className="text-2xl font-bold text-[#2E86C1] text-center mb-4">
            ارسل لنا رسالتك
          </h3>

          <input
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          >
            <option value="">اختر الموضوع</option>
            <option value="حجز غرفة">حجز غرفة</option>
            <option value="استفسار عام">استفسار عام</option>
            <option value="ملاحظات واقتراحات">ملاحظات واقتراحات</option>
          </select>

          <textarea
            name="message"
            placeholder="اكتب رسالتك هنا..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none"
          />

          <button
            type="submit"
            className="bg-[#F4D03F] text-black py-2 px-6 rounded-full hover:bg-yellow-400 transition font-bold"
          >
            إرسال الرسالة
          </button>

          {sent && (
            <div className="text-[#2E86C1] animate-bounce text-sm font-medium text-center">
              ✅ تم إرسال الرسالة بنجاح!
            </div>
          )}
        </form>

        {/* ✅ معلومات التواصل */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-sm text-gray-700">
            <h3 className="text-xl text-center font-bold text-[#2E86C1] mb-2">
              معلومات التواصل
            </h3>

            <p className="flex items-left gap-2 justify-end">
              <FaMapMarkerAlt className="text-[#F4D03F]" />
              زهراء المعادي، القاهرة، مصر
            </p>

            <p className="flex items-center gap-2 justify-end">
              <FaPhone className="text-[#F4D03F]" />
              0115 143 2229
            </p>

            <p className="flex items-center gap-2 justify-end">
              <FaEnvelope className="text-[#F4D03F]" />
              info@bluebreeze-hotel.com
            </p>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              title="موقع الفندق"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Zahraa%20El-Maadi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          <div className="flex justify-center gap-5 text-2xl mt-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" className="hover:text-[#1877f2]">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[#e1306c]">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-[#1da1f2]">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-[#0077b5]">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/201151432229" target="_blank" className="hover:text-[#25D366]">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
