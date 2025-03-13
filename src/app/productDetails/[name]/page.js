'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaStar, FaTruck, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from '../../cart/cartContext';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';

export default function ProductDetails({ params }) {
  const { name } = params;
  const { addToCart } = useCart();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState('250gm');

  useEffect(() => {
    const products = [
      { id: 6, name: "Peda", category: "Sweets", sizes: { "250gm": 100, "500gm": 180, "1kg": 350 }, rating: 5, image: "https://static.toiimg.com/thumb/75765799.cms?width=573&height=430" },
      { id: 2, name: "Khowa Lai", category: "Vegetables", sizes: { "1000gm": 30 }, rating: 4, image: "https://m.media-amazon.com/images/I/61ohFy6Kr9L._SX679_.jpg" },
      { id: 3, name: "Crispy Khaja", category: "Groceries", sizes: { "200gm": 150 }, rating: 5, image: "https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Sai_Priya/Khaja_original_edited.jpg" },
      { id: 4, name: "Anarsa", category: "Sweets", sizes: { "400gm": 50 }, rating: 5, image: "https://img-global.cpcdn.com/recipes/2a5b1cc9c011ef80/680x482cq70/mawa-anarsa-a-traditional-indian-dessert-recipe-main-photo.jpg" },
      { id: 5, name: "Lai Chura", category: "Snacks", sizes: { "700gm": 30 }, rating: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSo_7fzZDN3tiYxtKBcDbJsRuHC3lby6V13w&s" },
    ];

    const selectedProduct = products.find(p => p.name === decodeURIComponent(name));
    setProduct(selectedProduct);
    setRelatedProducts(products.filter(p => p.name !== decodeURIComponent(name)));
  }, [name]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Chatbot />
      <motion.div className="container mx-auto p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <button className="text-blue-500 mb-4 hover:underline" onClick={() => router.push('/')}>← Back to Products</button>
        
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
          <img src={product.image} alt={product.name} className="w-full md:w-1/3 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />

          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600 text-sm">{product.category}</p>

            {/* Size Selection */}
            <div className="mt-4">
              <label className="text-gray-600">Select Size:</label>
              <select 
                className="border p-2 rounded-md ml-2"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {Object.keys(product.sizes).map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Price and Discount */}
            <div className="flex items-center mt-3">
              <span className="text-xl font-bold text-green-600">${product.sizes[selectedSize]}</span>
            </div>

            {/* Ratings */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} />)}
            </div>

            {/* Delivery Info */}
            <div className="mt-4 space-y-1 text-gray-600">
              <div className="flex items-center"><FaTruck className="mr-2 text-blue-500" /> Free Delivery</div>
              <div className="flex items-center"><FaTruck className="mr-2 text-blue-500" /> Fast Delivery</div>
              <div className="flex items-center"><FaLock className="mr-2 text-red-500" /> Secure Transaction</div>
              <div className="flex items-center"><FaLock className="mr-2 text-red-500" /> Non-Returnable</div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={() => addToCart({ ...product, price: product.sizes[selectedSize], weight: selectedSize })} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600 transition-colors"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>

            {/* Product Info and Specifications */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Product Info</h2>
              <p className="text-gray-600 text-sm">Delicious {product.name}, made with premium quality ingredients. Perfect for every occasion!</p>

              <h2 className="text-xl font-semibold mt-4">Product Specification</h2>
              <ul className="text-gray-600 text-sm list-disc list-inside">
                <li>Fresh and high-quality</li>
                <li>Perfect for gifting and festivals</li>
                <li>Best before 15 days from packaging</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <h2 className="text-2xl font-bold mt-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {relatedProducts.map((related, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" 
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push(`/productDetails/${encodeURIComponent(related.name)}`)}
            >
              <img src={related.image} alt={related.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{related.name}</h3>
              <p className="text-gray-500 text-sm">{related.category}</p>
              <div className="flex items-center mt-2">
                <span className="text-xl font-bold text-green-600">${Object.values(related.sizes)[0]}</span>
              </div>
              <button onClick={() => addToCart(related)} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md flex items-center hover:bg-blue-600 transition-colors w-full justify-center">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer/>
    </>
  );
}
