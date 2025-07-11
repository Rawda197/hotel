import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Tabaq - Middle Eastern Restaurant",
  description:
    "Welcome to Tabaq — a modern Middle Eastern restaurant serving traditional flavors with a contemporary twist. Enjoy fresh ingredients, handcrafted dishes, and warm hospitality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ أيقونة الموقع (favicon) بصيغة png أو ico */}
        <link rel="jpg" href="/logo.jpg" />
        {/* أو لو عندك png */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
