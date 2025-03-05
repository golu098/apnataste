"use client";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Frequently Asked Questions</h1>

        {/* General FAQ Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Questions</h2>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">What payment methods do you accept?</summary>
            <p className="mt-2 text-gray-600">
              We accept credit/debit cards, UPI, wallets, and secure payment gateways like Razorpay & PayPal.
            </p>
          </details>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">How can I track my order?</summary>
            <p className="mt-2 text-gray-600">
              Once your order is shipped, you will receive a tracking link via email and SMS.
            </p>
          </details>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">Can I modify or cancel my order after placing it?</summary>
            <p className="mt-2 text-gray-600">
              Orders can be modified or canceled within **1 hour** of placing them. Please contact customer support for assistance.
            </p>
          </details>
        </section>

        {/* Shipping & Delivery Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping & Delivery</h2>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">Do you offer free shipping?</summary>
            <p className="mt-2 text-gray-600">Yes, we offer free shipping on orders above **Rs. 500**.</p>
          </details>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">How long does delivery take?</summary>
            <p className="mt-2 text-gray-600">
              Standard delivery takes **5-7 business days**, while express delivery takes **2-3 days**.
            </p>
          </details>
        </section>

        {/* Returns & Refunds Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns & Refunds</h2>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">What is your return policy?</summary>
            <p className="mt-2 text-gray-600">
              We accept returns within **7 days** of delivery for unused, unopened products.
            </p>
          </details>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">When will I receive my refund?</summary>
            <p className="mt-2 text-gray-600">
              Refunds are processed within **7 business days** after the returned product is inspected.
            </p>
          </details>
        </section>

        {/* Discounts & Offers Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Discounts & Offers</h2>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">Do you offer discounts on bulk orders?</summary>
            <p className="mt-2 text-gray-600">
              Yes, we offer discounts on bulk purchases. Contact us for special pricing.
            </p>
          </details>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">How do I apply a discount code?</summary>
            <p className="mt-2 text-gray-600">
              You can apply the discount code at checkout. If the code is valid, the discount will be applied automatically.
            </p>
          </details>
        </section>

        {/* Product Quality & Security Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product & Security</h2>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">Are your products fresh and safe?</summary>
            <p className="mt-2 text-gray-600">
              Yes, we use **high-quality ingredients** and follow strict hygiene & safety standards.
            </p>
          </details>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">Is my payment information secure?</summary>
            <p className="mt-2 text-gray-600">
              Absolutely! We use **SSL encryption** to ensure all transactions are safe and secure.
            </p>
          </details>
        </section>

        {/* Contact & Support Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact & Support</h2>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">How can I contact customer support?</summary>
            <p className="mt-2 text-gray-600">
              You can reach us via email <b>(apnataste2@gmail.com)</b> or WhatsApp at <b>+91 6202055728</b>.
            </p>
          </details>

          <details className="mb-4 border p-4 rounded-lg">
            <summary className="font-medium text-lg cursor-pointer">What are your customer support hours?</summary>
            <p className="mt-2 text-gray-600">
              Our team is available Monday to Saturday, 9 AM – 8 PM IST.
            </p>
          </details>
        </section>

        
       
      </div>

      <Footer />
    </>
  );
}
