"use client";

import { FaMapMarkedAlt } from "react-icons/fa";

const locations = [
  {
    id: 1,
    name: "Tabaq - Zahraa El Maadi",
    address: "50th Street, Zahraa El Maadi, Cairo, Egypt",
    phone: "+20 115 143 2229",
    hours: "Daily: 12 PM – 12 AM",
    mapLink: "https://maps.google.com/?q=Zahraa+El+Maadi",
  },
  {
    id: 2,
    name: "Tabaq - Sheikh Zayed",
    address: "Arkan Plaza, Sheikh Zayed, Giza, Egypt",
    phone: "+20 114 876 3321",
    hours: "Daily: 1 PM – 1 AM",
    mapLink: "https://maps.google.com/?q=Arkan+Plaza+Sheikh+Zayed",
  },
  {
    id: 3,
    name: "Tabaq - New Cairo",
    address: "Downtown Mall, 90th Street, New Cairo",
    phone: "+20 102 987 4552",
    hours: "Weekdays: 1 PM – 11 PM | Weekends: 1 PM – 1 AM",
    mapLink: "https://maps.google.com/?q=Downtown+Mall+New+Cairo",
  },
  {
    id: 4,
    name: "Tabaq - Heliopolis",
    address: "Korba, Heliopolis, Cairo, Egypt",
    phone: "+20 120 334 1122",
    hours: "Daily: 12 PM – 11 PM",
    mapLink: "https://maps.google.com/?q=Korba+Heliopolis+Cairo",
  },
];

export default function LocationsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      {locations.map((loc) => (
        <div
          key={loc.id}
          className="bg-[#1a1a1a] text-white p-6 rounded-lg shadow-md border border-yellow-500 flex flex-col justify-between transition duration-300 hover:shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-3">{loc.name}</h3>
            <p className="text-sm mb-1">📍 {loc.address}</p>
            <p className="text-sm mb-1">📞 {loc.phone}</p>
            <p className="text-sm mb-4">🕒 {loc.hours}</p>
          </div>

          <a
            href={loc.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full transition"
          >
            <FaMapMarkedAlt className="text-lg" />
            View on Map
          </a>
        </div>
      ))}
    </div>
  );
}
