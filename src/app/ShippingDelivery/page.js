"use client";
import Image from "next/image";

export default function ShippingDelivery() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Shipping & Delivery</h1>

      {/* Image */}
      <div className="mb-6">
        <Image
          src="/shipping.jpg" // Ensure this image is in the public folder
          alt="Shipping and Delivery"
          width={800}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>

      {/* Shipping Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fast & Reliable Shipping</h2>
        <p className="text-gray-600">
          We offer free shipping on all orders above $50. Standard delivery takes 5-7 business days, while express
          delivery is available for an additional fee and takes 2-3 business days.
        </p>
      </section>

      {/* Delivery Areas */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Locations</h2>
        <p className="text-gray-600">
          We currently ship across the United States, Canada, and selected international destinations. Enter your
          address at checkout to see if we deliver to your area.
        </p>
      </section>

      {/* Returns */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns & Exchanges</h2>
        <p className="text-gray-600">
          If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.
          Please ensure the items are unused and in original packaging.
        </p>
      </section>
    </div>
  );
}
