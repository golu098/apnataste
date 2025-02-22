"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // Animation Library
import { useCart } from "../cart/cartContext";

export default function ProductDetails({ params }) {
  const { id } = params; // Get product ID from URL
  const { addToCart } = useCart();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data based on the ID (replace with real API or state)
    const products = [
      { id: 1, name: "Organic Apple", category: "Fruits", price: 50, originalPrice: 80, discount: 30, rating: 5, state: "Himachal Pradesh", ingredients: ["Apple"], testimonials: ["Best apple I ever had!", "Fresh and juicy!"], description: "Organic apples sourced from Himalayan orchards.", image: "/apple.jpg" },
      { id: 2, name: "Fresh Carrots", category: "Vegetables", price: 30, originalPrice: 50, discount: 40, rating: 4, state: "Punjab", ingredients: ["Carrot"], testimonials: ["Sweet and crunchy.", "Perfect for salads."], description: "Farm-fresh carrots grown in Punjab’s rich soil.", image: "/carrots.jpg" },
    ];

    const selectedProduct = products.find((p) => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <motion.div
      className="container mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="text-blue-500 mb-4" onClick={() => router.push("/")}>
        ← Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
        {/* Left Side - Image */}
        <img src={product.image} alt={product.name} className="w-full md:w-1/3 rounded-lg shadow-md" />

        {/* Right Side - Details */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-sm">{product.category} - {product.state}</p>
          <p className="text-lg font-semibold mt-2 text-gray-700">{product.description}</p>

          {/* Price */}
          <div className="flex items-center mt-3">
            <span className="text-xl font-bold text-green-600">${product.price}</span>
            <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
            <span className="text-red-500 ml-2">({product.discount}% OFF)</span>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"} />
            ))}
          </div>

          {/* Ingredients */}
          <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {product.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>

          {/* Testimonials */}
          <h3 className="text-lg font-semibold mt-4">Customer Reviews:</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            {product.testimonials.map((review, i) => (
              <p key={i} className="text-gray-700">• {review}</p>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FaShoppingCart className="mr-2" /> Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
