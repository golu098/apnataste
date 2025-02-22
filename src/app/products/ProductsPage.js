"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  

  const products = [
    { id: 1, name: "Organic Apple", category: "Fruits", price: 50, originalPrice: 80, discount: 30, rating: 5, image: "/apple.jpg" },
    { id: 2, name: "Fresh Carrots", category: "Vegetables", price: 30, originalPrice: 50, discount: 40, rating: 4, image: "/carrots.jpg" },
    { id: 3, name: "Pure Honey", category: "Groceries", price: 150, originalPrice: 200, discount: 25, rating: 5, image: "/honey.jpg" },
    { id: 4, name: "Organic Apple", category: "Fruits", price: 50, originalPrice: 80, discount: 30, rating: 5, image: "/apple.jpg" },
    { id: 5, name: "Fresh Carrots", category: "Vegetables", price: 30, originalPrice: 50, discount: 40, rating: 4, image: "/carrots.jpg" },
    { id: 6, name: "Pure Honey", category: "Groceries", price: 150, originalPrice: 200, discount: 25, rating: 5, image: "/honey.jpg" },
  
  ];

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "discount") return b.discount - a.discount;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🛍️ Browse Products</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4 bg-white p-5 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaFilter /> Filters
          </h2>

          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>

          {/* Sorting Options */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <option value="">-- Select --</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="discount">Discount</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Price Range</label>
            <input
              type="range"
              min="0"
              max="500"
              step="10"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="w-full"
            />
            <p className="mt-1 text-gray-600">${priceRange[0]} - ${priceRange[1]}</p>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
