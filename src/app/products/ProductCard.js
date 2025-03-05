"use client";
import { useCart } from "../cart/cartContext";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  return (
    <div
      className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() =>
        router.push(`/productDetails/${encodeURIComponent(product.name)}`)
      }      
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.category}</p>

      <div className="flex items-center mt-2">
        <span className="text-xl font-bold text-green-600">${product.price}</span>
        <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
        <span className="text-red-500 ml-2">({product.discount}% OFF)</span>
      </div>

      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"} />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking button
            addToCart(product);
          }}
          className="bg-blue-500 text-white px-3 py-2 rounded-md flex items-center"
        >
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
        <button className="bg-red-500 text-white px-3 py-2 rounded-md flex items-center">
          <FaHeart className="mr-2" /> Wishlist
        </button>
      </div>
    </div>
  );
}
