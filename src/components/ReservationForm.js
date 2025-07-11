// components/ReservationForm.jsx
"use client";

import { useState, useRef, useEffect } from "react";

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
    setForm({
      name: "",
      email: "",
      people: "",
      date: "",
      time: "",
      notes: "",
    });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-[#fdf8ef] py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
        {/* النموذج */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-yellow-600 mb-4">
            Reserve Your Table
          </h2>
          <p className="text-gray-700 mb-6">
            Book your spot at Tabaq and enjoy an unforgettable Middle Eastern
            dining experience.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              name="people"
              placeholder="Number of Guests"
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
              placeholder="Additional Notes (optional)"
              value={form.notes}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Book Now
            </button>

            {success && (
              <div className="mt-4 text-green-600 font-semibold animate-fade-in-up">
                ✅ Reservation submitted successfully!
              </div>
            )}
          </form>
        </div>

        {/* الصورة */}
        <div className="w-full h-full hidden md:block">
          <img
            src="/images/5.jpg"
            alt="Reservation"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
