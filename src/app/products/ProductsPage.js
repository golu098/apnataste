"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { FaSearch, FaFilter } from "react-icons/fa";
import Chatbot from "@/components/Chatbot";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [weightRange, setWeightRange] = useState([0, 10000]); // Adjust range as needed
  const [showNewArrivals, setShowNewArrivals] = useState(false);
  const products = [
   { id: 2, name: "Khowa Lai", showNewArrivals:true,category: "Vegetables", weight:"1000gm",price: 30, originalPrice: 50, discount: 40, rating: 4, image: "https://m.media-amazon.com/images/I/61ohFy6Kr9L._SX679_.jpg" },
    { id: 3, name: "Crispy Khaja", showNewArrivals:false,category: "Groceries", weight:"200gm",price: 150, originalPrice: 200, discount: 25, rating: 5, image: "https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Sai_Priya/Khaja_original_edited.jpg" },
    { id: 4, name: "Anarsa", showNewArrivals:true,category: "Fruits", weight:"400gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://img-global.cpcdn.com/recipes/2a5b1cc9c011ef80/680x482cq70/mawa-anarsa-a-traditional-indian-dessert-recipe-main-photo.jpg" },
    { id: 5, name: "Lai Chura",showNewArrivals:true, category: "Vegetables",weight:"700gm", price: 30, originalPrice: 50, discount: 40, rating: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSo_7fzZDN3tiYxtKBcDbJsRuHC3lby6V13w&s" },
    { id: 22, name: "Peda ", showNewArrivals:true,category: "Peda",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image: "https://static.toiimg.com/thumb/75765799.cms?width=573&height=430" },
    
    { id: 6, name: "Peda with sugarfree", showNewArrivals:true,category: "Peda",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image: "https://static.toiimg.com/thumb/75765799.cms?width=573&height=430" },
    { id: 7, name: "Desi Ghee Thekua", showNewArrivals:true,category: "Thekua",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
    { id: 8, name:"Anarsa with Khowa in Ghee", showNewArrivals:true,category: "Anarsa",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKt2IpCuIcvr5_-gS0WuD-KLN0Xjmh6qA5g&s" },
    { id: 13, name:"Anarsa with Khowa in Refine", showNewArrivals:true,category: "Anarsa",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKt2IpCuIcvr5_-gS0WuD-KLN0Xjmh6qA5g&s" },
    { id: 14, name:"Anarsa in Refine", showNewArrivals:true,category: "Anarsa",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKt2IpCuIcvr5_-gS0WuD-KLN0Xjmh6qA5g&s" },
    { id: 15, name:"Anarsa in Ghee", showNewArrivals:true,category: "Anarsa",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKt2IpCuIcvr5_-gS0WuD-KLN0Xjmh6qA5g&s" },
  
    // Thekua product
    { id: 1, name: "Desi Ghee Thekua with Dry Fruits", showNewArrivals:false,category: "Thekua", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
    { id:13, name: "Thekua with Dry fruits (in Refine)", showNewArrivals:false,category: "Thekua", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },

    { id: 7, name: "Desi Ghee Thekua", showNewArrivals:true,category: "Thekua",weight:"100gm", price: 150, originalPrice: 200, discount: 25, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
   { id: 9, name: "Thekua (in Refine)", showNewArrivals:false,category: "Thekua", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
    { id: 10, name: "Suji Thekua in Refine", showNewArrivals:false,category: "Thekua", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
    { id: 11, name: "Suji Thekua with Dry Fruits", showNewArrivals:false,category: "Thekua", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
    { id: 10, name: "Suji Thekua in Ghee", showNewArrivals:false,category: "Thekua", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
    { id: 12, name: "Suji Thekua in refine with Dry Fruits", showNewArrivals:false,category: "Thekua", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/thekua-recipe-2.jpg" },
    // GUJIYA ITEMS
    { id: 16, name: "Gujiya in Ghee", showNewArrivals:false,category: "Gujiya", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://aayanshkitchen.com/wp-content/uploads/2023/03/White-Modern-Healthy-Food-YouTube-Thumbnail.png" },
    { id: 18, name: "Gujiya With Suji in Refine", showNewArrivals:false,category: "Gujiya", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://i.ndtvimg.com/i/2018-03/gujiya_620x330_71519903117.jpg" },
    { id: 16, name: "Gujiya With Khoya in Ghee", showNewArrivals:false,category: "Gujiya", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://onlinekrishnasweets.com/wp-content/uploads/2021/08/GUJIYA-KRISHNA-SWEETS-.jpg" },
    { id: 17, name: "Gujiya in Refine", showNewArrivals:false,category: "Gujiya", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://foodhistoria.com/wp-content/uploads/2023/03/Gujiya-history4_62331cfdc17ac.jpg" },
    { id: 18, name: "Gujiya With Khoya in Refine", showNewArrivals:false,category: "Gujiya", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://static.toiimg.com/thumb/57388140.cms?width=1200&height=900" },
    { id: 19, name: "Gujiya With Suji in Refine", showNewArrivals:false,category: "Gujiya", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/vineeta-srivastava20190321153401608.jpeg" },
    // LAI Items
    { id: 20, name: "Simple Lai", showNewArrivals:false,category: "Lai", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://globalbihari.com/wp-content/uploads/2021/01/IMG_20210114_191242-1.jpg" },
    { id: 21, name: "Sainted Lai", showNewArrivals:false,category: "Lai", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://m.media-amazon.com/images/I/61ksPZGA3rL._AC_UF350,350_QL80_.jpg" },
    { id: 22, name: "Khoya Lai", showNewArrivals:false,category: "Lai", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdorWi5gFFk-yUSEQ3wEdIh_AB1kuOKI7e04xD3oyBoZxpW08aZqShjMA_VlViym3TMg&usqp=CAU" },
    { id: 21, name: "Dry Fruit Lai", showNewArrivals:false,category: "Lai", weight:"100gm",price: 50, originalPrice: 80, discount: 30, rating: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAvNE6um7W3i9u3J4bodglVd_wZZXMPutl8rDhE1SG05dDfjlROeRpxJhNaDmXpBd13s&usqp=CAU" },
    
  ];

  const filteredProducts = products
  .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
  .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
  .filter((p) => {
    const numericWeight = parseInt(p.weight.replace(/\D/g, ""), 10); // Extract numbers from weight (e.g., "100gm" → 100)
    return numericWeight >= weightRange[0] && numericWeight <= weightRange[1];
  })
  .filter((p) => (showNewArrivals ? p.newArrival : true))

  .sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "discount") return b.discount - a.discount;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "weight") {
      const weightA = parseInt(a.weight.replace(/\D/g, ""), 10);
      const weightB = parseInt(b.weight.replace(/\D/g, ""), 10);
      return weightA - weightB;
    }
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
              <option value="rating">Weight</option>
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
          <label>
        <input type="checkbox" checked={showNewArrivals} onChange={() => setShowNewArrivals(!showNewArrivals)} /> New Arrivals
      </label>
          {/* Weight Range Filter */}
<div className="mb-4">
  <label className="block font-semibold mb-1">Weight Range (gm)</label>
  <input
    type="range"
    min="0"
    max="500"
    step="10"
    value={weightRange[1]}
    onChange={(e) => setWeightRange([0, parseInt(e.target.value)])}
    className="w-full"
  />
  <p className="mt-1 text-gray-600">{weightRange[0]} gm - {weightRange[1]} gm</p>
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
      <Chatbot/>
    </div>
    
  );
}
