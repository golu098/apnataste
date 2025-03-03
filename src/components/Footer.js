"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1 - Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-green-400">OrganicShop</h3>
          <p className="text-gray-400 mt-3">
            Your trusted online marketplace for 100% organic and natural products.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-green-400">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/products" className="hover:text-green-400">Products</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Blog and Customer Support */}
        <div>
          <h4 className="text-xl font-semibold text-green-400">Customer Support</h4>
          <ul className="mt-3 space-y-2">
            <li><Link href="/faq" className="hover:text-green-400">FAQ</Link></li> {/* Link Fixed */}
            <li><Link href="/shipping" className="hover:text-green-400">Shipping & Delivery</Link>

            </li>
            {/* <li><Link href="/returns" className="hover:text-green-400">Returns & Refunds</Link></li> */}
            <li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link href="https://facebook.com" className="hover:text-green-400"><i className="fab fa-facebook-f text-xl"></i></Link>
        <Link href="https://instagram.com" className="hover:text-green-400"><i className="fab fa-instagram text-xl"></i></Link>
        <Link href="https://twitter.com" className="hover:text-green-400"><i className="fab fa-twitter text-xl"></i></Link>
        <Link href="https://youtube.com" className="hover:text-green-400"><i className="fab fa-youtube text-xl"></i></Link>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400">
        © {new Date().getFullYear()} OrganicShop. All Rights Reserved.
      </div>
    </footer>
  );
}
