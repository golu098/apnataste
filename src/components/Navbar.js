"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/cart/cartContext";
import { motion } from "framer-motion";
import { ShoppingCart, LogIn, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  return (
    <nav className="bg-white p-4 shadow-lg flex justify-between items-center">
      {/* Logo wrapped inside Link */}
      <Link href="/">
        <h1 className="text-black text-xl font-bold cursor-pointer">MyStore</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-20 items-center">
        <Link className="text-black hover:text-green-300" href="/about">About</Link>
        <Link className="text-black hover:text-green-300" href="/contact">Contact</Link>
        <Link className="text-black hover:text-green-300" href="/products">Products</Link>

        {/* Cart Icon */}
        <Link className="text-black hover:text-green-300" href="/cart">
          {/* <ShoppingCart className="w-6 h-6" /> */}
          <ShoppingCart /> {cart.length > 0 && <span className="text-red-500">{cart.length}</span>}

        </Link>

        {/* Login Icon */}
        <Link className="text-black hover:text-green-300 flex items-center gap-2" href="/login">
          <LogIn className="w-6 h-6" />
          <span>Login</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-14 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 md:hidden shadow-lg"
        >
          <Link className="text-black hover:text-green-300" href="/about">About</Link>
          <Link className="text-black hover:text-green-300" href="/contact">Contact</Link>
          <Link className="text-black hover:text-green-300" href="/products">Products</Link>

          {/* Cart Icon */}
          <Link className="text-black hover:text-green-300 flex items-center gap-2" href="/cart">
            <ShoppingCart className="w-6 h-6" />
            <span>Cart</span>
          </Link>

          {/* Login Icon */}
          <Link className="text-black hover:text-green-300 flex items-center gap-2" href="/login">
            <LogIn className="w-6 h-6" />
            <span>Login</span>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
