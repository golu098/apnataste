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
    name: "Anarsa with Khowa in Ghee",
    weight: "100gm",
    originalPrice: 25,
    discountedPrice: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKt2IpCuIcvr5_-gS0WuD-KLN0Xjmh6qA5g&s",
  },
  {
    id: 2,
    name: " Desi Ghee Thekua ",
    weight: "100gm",
    originalPrice: 12,
    discountedPrice: 9,
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg",
  },
  {
    id: 3,
    name: "Peda with sugarfree",
    weight: "100gm",
    originalPrice: 20,
    discountedPrice: 15,
    image: "https://static.toiimg.com/thumb/75765799.cms?width=573&height=430",
  },
  {
    id: 4,
    name: "Lai Chura",
    weight: "1kg",
    originalPrice: 30,
    discountedPrice: 22,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSo_7fzZDN3tiYxtKBcDbJsRuHC3lby6V13w&s",
  },
];
const products1 = [
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
    image: "https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Sai_Priya/Khaja_original_edited.jpg",
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
        {products1.map((product) => (
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
