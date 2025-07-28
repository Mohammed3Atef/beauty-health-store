import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beauty & Health Store - Premium Cosmetics & Medical Supplies",
  description:
    "Your one-stop shop for premium cosmetics, skincare, and medical supplies. Over 2000 products with fast shipping and excellent customer service.",
  keywords:
    "cosmetics, skincare, makeup, medical supplies, beauty products, health care",
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
