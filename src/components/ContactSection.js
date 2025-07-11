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

    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
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
    <section className="bg-[#fdfaf2] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch text-left">
        {/* ✅ Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-4"
        >
          <h2 className="text-3xl font-bold text-[#d4af37] text-center mb-4">
            Contact Us
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
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
            <option value="">Select a subject</option>
            <option value="Table Reservation">Table Reservation</option>
            <option value="Private Event">Private Event</option>
            <option value="Outdoor Catering">Outdoor Catering</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>

          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none"
          />

          <button
            type="submit"
            className="bg-[#d4af37] text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            Send Message
          </button>

          {sent && (
            <div className="text-[#d4af37] animate-bounce text-sm font-medium text-center">
              ✅ Message sent successfully!
            </div>
          )}
        </form>

        {/* ✅ Contact Info + Map + Social */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4 text-sm text-gray-700">
            <h3 className="text-xl font-bold text-[#d4af37] mb-2">
              Contact Information
            </h3>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#d4af37]" />
              50th Street, Zahraa El Maadi, Cairo, Egypt
            </p>

            <p className="flex items-center gap-2">
              <FaPhone className="text-[#d4af37]" />
              +20 115 143 2229
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-[#d4af37]" />
              info@tabaq-restaurant.com
            </p>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow">
            <iframe
              title="Restaurant Location"
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Zahraa%20El-Maadi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

          <div className="flex justify-center gap-5 text-2xl mt-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-[#1877f2] text-gray-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[#e1306c] text-gray-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-[#1da1f2] text-gray-500">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-[#0077b5] text-gray-500">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/201151432229" target="_blank" className="hover:text-[#25D366] text-gray-500">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
