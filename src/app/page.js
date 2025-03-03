"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Truck, Leaf, DollarSign, RotateCw } from "lucide-react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faSeedling, faDollarSign, faUndo } from "@fortawesome/free-solid-svg-icons";



import { useState } from "react";
import { FaShoppingCart, FaHeart, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import Footer from "@/components/Footer";
const marketplaceLinks = {
  amazon: "https://www.amazon.in/dp/your-product-id",
  flipkart: "https://www.flipkart.com/your-product-id",
  meesho: "https://www.meesho.com/your-product-id",
  whatsapp: "https://wa.me/your-whatsapp-number?text=I%20want%20to%20buy%20your%20product",
};

const products = [
  {
    id: 1,
    name: "Anarsa",
    weight: "100gm",
    originalPrice: 25,
    discountedPrice: 18,
    image: "https://img-global.cpcdn.com/recipes/2a5b1cc9c011ef80/680x482cq70/mawa-anarsa-a-traditional-indian-dessert-recipe-main-photo.jpg",
  },
  {
    id: 2,
    name: " Desi Ghee Thekua with Dry Fruits",
    weight: "100gm",
    originalPrice: 12,
    discountedPrice: 9,
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg",
  },
  {
    id: 3,
    name: "Crispy Khaja",
    weight: "100gm",
    originalPrice: 20,
    discountedPrice: 15,
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    name: "Khowa Lai",
    weight: "1kg",
    originalPrice: 30,
    discountedPrice: 22,
    image: "https://m.media-amazon.com/images/I/61ohFy6Kr9L._SX679_.jpg",
  },
];
const reviews = [
  {
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "Amazing product quality and great service! Will definitely buy again.",
  },
  {
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Loved the packaging and timely delivery. Highly recommended!",
  },
  {
    name: "Amit Kumar",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "The organic quality is top-notch. Very satisfied with my purchase.",
  },
  {
    name: "Neha Singh",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review: "Great customer service and premium products at the best prices!",
  },
  {
    name: "Vikram Das",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review: "I appreciate the effort they put into sustainable packaging.",
  },
  {
    name: "Anjali Mehta",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review: "Excellent experience. The website is easy to navigate, and the products are great!",
  },
];

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      alert("Product added to cart!");
    }
  };

  const handleWishlist = () => {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
    } else {
      alert("Added to Wishlist!");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg w-full h-screen p-6 md:p-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full">
          <img
            className="w-full h-full object-cover rounded-lg ml-3"
            src="https://i.ibb.co/gMbsyLT9/image.png"
            alt="banner"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-28 mr-4">
          <h5 className="text-green-600 text-lg font-semibold">
  Authentic Local Flavors
</h5>
<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
  Taste the Tradition, Love <br />Every  Bite!
</h1>
<p className="text-gray-600 mt-4">
Experience the rich heritage of local sweets and snacks, crafted with love and the finest ingredients. Freshly made, bursting with flavors, and delivered right to your doorstep.
</p>

          {/* Button */}
          <div className="mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </div>


      <div class="bg-black pt-8 px-8 flex justify-center items-center ">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9  text-center">


          <div class="bg-gray-900 text-white w-72 py-10 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <i class="fas fa-truck text-5xl text-green-500"></i>
            <h4 class="text-2xl font-semibold mt-4">Free Shipping</h4>
            <p class="text-gray-400 text-lg mt-2">Above $5 Only</p>
          </div>


          <div class="bg-gray-900 text-white w-72 py-10 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <i class="fas fa-seedling text-5xl text-green-500"></i>
            <h4 class="text-2xl font-semibold mt-4">Home Made</h4>
            <p class="text-gray-400 text-lg mt-2">100% Guarantee</p>
          </div>


          <div class="bg-gray-900 text-white w-72 py-10 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <i class="fas fa-dollar-sign text-5xl text-green-500"></i>
            <h4 class="text-2xl font-semibold mt-4">Huge Savings</h4>
            <p class="text-gray-400 text-lg mt-2">At Lowest Price</p>
          </div>


          <div class="bg-gray-900 text-white w-72 py-10 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <i class="fas fa-undo text-5xl text-green-500"></i>
            <h4 class="text-2xl font-semibold mt-4">Easy Returns</h4>
            <p class="text-gray-400 text-lg mt-2">No Questions Asked</p>
          </div>

        </div>

      </div>

   
        {/* Best Selling Product */}
        <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Best Selling Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
       <div key={product.id} className="relative bg-white p-4 rounded-lg shadow-md">

            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />

           {/* Discount Badge */}
          <div className="absolute top-1 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)}% OFF
          </div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.weight}</p>
            <p className="mt-2 text-lg font-bold">
              ${product.discountedPrice}{" "}
              <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
            </p>

            {/* Buttons */}
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={handleAddToCart}
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <FaHeart size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Login to Continue</h3>
            <p className="text-gray-600 mb-4">Sign in to add items to your cart or wishlist.</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                <FaGoogle className="mr-2" /> Google
              </button>
              <button className="bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center">
                <FaFacebook className="mr-2" /> Facebook
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                <FaApple className="mr-2" /> Apple
              </button>
            </div>
            <button
              onClick={() => setShowLoginPopup(false)}
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>

    
      {/* Best Selling Product */}
      

    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Available on E-commerce Marketplaces</h2>
        <p className="text-gray-600 mt-2">Shop our products on your favorite platforms.</p>

        {/* Marketplace Buttons */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Amazon */}
          <a href={marketplaceLinks.amazon} target="_blank" className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded text-lg font-semibold flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 mr-2" />
            Buy on Amazon
          </a>

          {/* Flipkart */}
          <a href={marketplaceLinks.flipkart} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg font-semibold flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Flipkart-logo.png" alt="Flipkart" className="h-6 mr-2" />
            Buy on Flipkart
          </a>

          {/* Meesho */}
          <a href={marketplaceLinks.meesho} target="_blank" className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded text-lg font-semibold flex items-center justify-center">
            <img src="https://play-lh.googleusercontent.com/8uPZceqXORVwdDtV06TWoGUKTrgt8RCIdBdZ40zzkn6eXsAFRSzHptRz3SpD95X1bQ" alt="Meesho" className="h-6 mr-2" />
            Buy on Meesho
          </a>

          {/* WhatsApp */}
          <a href={marketplaceLinks.whatsapp} target="_blank" className="bg-green-600 hover:bg-green-700 text-white py-3 rounded text-lg font-semibold flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-6 mr-2" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>

    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Best Trending Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
       <div key={product.id} className="relative bg-white p-4 rounded-lg shadow-md">

            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />

           {/* Discount Badge */}
<div className="absolute top-1 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
  {Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)}% OFF
</div>

            {/* Product Info */}
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.weight}</p>
            <p className="mt-2 text-lg font-bold">
              ${product.discountedPrice}{" "}
              <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
            </p>

            {/* Buttons */}
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={handleAddToCart}
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <FaHeart size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>
</div>

    {/* client Review  */}

    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2">Real reviews from our happy customers.</p>

        {/* Review Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviews.map((client, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center transform transition duration-300 hover:scale-105">
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 mx-auto rounded-full border-2 border-green-500"
              />
              <h4 className="text-xl font-semibold mt-4">{client.name}</h4>
              <p className="text-gray-600 mt-2 italic">"{client.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
</div>





      );
}
