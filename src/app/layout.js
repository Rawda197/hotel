import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["700"], // خط بولد
});

export const metadata = {
  title: "بلو بريز الغردقة - منتجع سياحي",
  description:
    "مرحبًا بك في منتجع بلو بريز الغردقة — تجربة فندقية فاخرة على شاطئ البحر الأحمر. استمتع بالراحة، الهدوء، والضيافة الراقية في قلب الغردقة.",
};

function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`antialiased ${cairo.className} bg-white text-gray-900 font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
