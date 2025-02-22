// components/Card.js
import React from "react";

const Card = ({ product, onAddToCart, onAddToWishlist }) => {
  const discountPercentage = Math.round(
    ((product.originalPrice - product.actualPrice) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 text-center w-72">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-3">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="text-gray-400 line-through">${product.originalPrice}</span>
        <span className="text-green-600 font-bold text-lg">${product.actualPrice}</span>
      </div>
      <div className="bg-red-500 text-white text-sm px-3 py-1 rounded-full inline-block mt-2">
        {discountPercentage}% OFF
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm w-full mr-1"
        >
          Add to Cart
        </button>
        <button
          onClick={onAddToWishlist}
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm w-full ml-1"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Card;
