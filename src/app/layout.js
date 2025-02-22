import "./globals.css";
import { CartProvider } from "./cart/cartContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "E-Commerce Store",
  description: "A stylish e-commerce website using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
