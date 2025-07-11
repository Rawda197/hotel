export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">

        {/* About Tabaq */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4">About Tabaq</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Tabaq is a modern Middle Eastern restaurant serving authentic flavors with a twist.
            Enjoy our signature dishes, crafted with passion and high-quality ingredients, in a warm and elegant setting.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Reservations</li>
            <li>Menu</li>
            <li>Private Events</li>
            <li>Outdoor Catering</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>📍 Zahraa El Maadi, Cairo, Egypt</li>
            <li>📞 +20 115 143 2229</li>
            <li>📧 info@tabaq-restaurant.com</li>
            <li>🕐 Daily: 12 PM - 12 AM</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-yellow-500 font-semibold">Tabaq Restaurant</span>. All rights reserved.
      </div>
    </footer>
  );
}
