"use client";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Frequently Asked Questions</h1>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h2>
        <details className="mb-4 border p-4 rounded-lg">
          <summary className="font-medium text-lg cursor-pointer">What payment methods do you accept?</summary>
          <p className="mt-2 text-gray-600">We accept credit cards, PayPal, and other secure payment gateways.</p>
        </details>
        <details className="mb-4 border p-4 rounded-lg">
          <summary className="font-medium text-lg cursor-pointer">How can I track my order?</summary>
          <p className="mt-2 text-gray-600">Once your order is shipped, you will receive a tracking link via email.</p>
        </details>
      </section>

      {/* Shipping & Delivery Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping & Delivery</h2>
        <p className="text-gray-600">We offer free shipping for orders above $50. Standard delivery takes 5-7 business days.</p>
      </section>

      {/* Returns & Refunds Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns & Refunds</h2>
        <p className="text-gray-600">You can return your items within 30 days of purchase. Refunds will be processed within 7 business days.</p>
      </section>

      {/* Blog Section */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Blog</h2>
        <p className="text-gray-600">Check out our latest articles and updates on our <Link href="/blog" className="text-green-600 hover:underline">Blog</Link>.</p>
      </section> */}
   
    </div>
       <Footer/>
       </>
  );
}
