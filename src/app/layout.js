import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elsdiq Company - Premium Cosmetics & Medical Supplies",
  description:
    "Elsdiq Company - Your trusted source for premium cosmetics, skincare, and medical supplies. Located in Kafr Eldawar, Shar3 Elgish, Bgwar Bon 3ez.",
  keywords:
    "Elsdiq Company, cosmetics, skincare, makeup, medical supplies, beauty products, health care, Kafr Eldawar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartSidebar />
        </div>
      </body>
    </html>
  );
}
