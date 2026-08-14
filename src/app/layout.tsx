import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Gracious Collections | Vintage Gowns and Heirloom Treasures",
  description:
    "Breathtaking vintage gowns, antique bridal veils, and romantic nightwear carefully selected for the modern woman. Visit our studio for a private experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="fade-in">
        <CartProvider>
          <Header />
          <main style={{ minHeight: "80vh" }}>{children}</main>
          <CartDrawer />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
