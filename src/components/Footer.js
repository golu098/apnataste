"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 - Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-green-400">ApnaTaste</h3>
          <p className="text-gray-400 mt-3">
            Bringing You Closer to Home, One Bite at a Time
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

        {/* Column 3 - Customer Support */}
        <div>
          <h4 className="text-xl font-semibold text-green-400">Customer Support</h4>
          <ul className="mt-3 space-y-2">
            <li><Link href="/faq" className="hover:text-green-400">FAQ</Link></li>
          </ul>
          <div className="mt-3 text-gray-400">
            <p className="flex items-center gap-2"><Phone size={16} /> +91 62020 55728</p>
            <p className="flex items-center gap-2"><Mail size={16} />apnataste2@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <Link href="https://facebook.com" className="hover:text-green-400"><Facebook size={24} /></Link>
        <Link href="https://instagram.com" className="hover:text-green-400"><Instagram size={24} /></Link>
        <Link href="https://twitter.com" className="hover:text-green-400"><Twitter size={24} /></Link>
        <Link href="https://youtube.com" className="hover:text-green-400"><Youtube size={24} /></Link>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400">
        © {new Date().getFullYear()} ApnaTaste. All Rights Reserved.
      </div>
    </footer>
  );
}
