'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from '../../cart/cartContext';
import Chatbot from '@/components/Chatbot';

export default function ProductDetails({ params }) {
  const { name } = params;
  const { addToCart } = useCart();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const products = [
      { name: 'Organic Apple', category: 'Fruits', price: 50, originalPrice: 80, discount: 30, rating: 5, state: 'Himachal Pradesh', ingredients: ['Apple'], testimonials: ['Best apple I ever had!', 'Fresh and juicy!'], description: 'Organic apples sourced from Himalayan orchards.', image: '/apple.jpg' },
      { name: 'Fresh Carrots', category: 'Vegetables', price: 30, originalPrice: 50, discount: 40, rating: 4, state: 'Punjab', ingredients: ['Carrot'], testimonials: ['Sweet and crunchy.', 'Perfect for salads.'], description: 'Farm-fresh carrots grown in Punjab’s rich soil.', image: '/carrots.jpg' },
      { name: 'Golden Mango', category: 'Fruits', price: 60, originalPrice: 90, discount: 35, rating: 5, state: 'Maharashtra', ingredients: ['Mango'], testimonials: ['So sweet!', 'Amazing flavor!'], description: 'Premium Alphonso mangoes straight from Ratnagiri.', image: '/mango.jpg' },
      { name: 'Organic Tomatoes', category: 'Vegetables', price: 40, originalPrice: 70, discount: 40, rating: 4, state: 'Karnataka', ingredients: ['Tomato'], testimonials: ['Perfectly ripe.', 'Great taste!'], description: 'Sun-ripened organic tomatoes for your kitchen.', image: '/tomato.jpg' }
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
            <p className="text-gray-600 text-sm">{product.category} - {product.state}</p>
            <p className="text-lg font-semibold mt-2 text-gray-700">{product.description}</p>
            <div className="flex items-center mt-3">
              <span className="text-xl font-bold text-green-600">${product.price}</span>
              <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
              <span className="text-red-500 ml-2">({product.discount}% OFF)</span>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'} />)}
            </div>
            <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
            <ul className="list-disc pl-5 text-gray-700">{product.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}</ul>
            <h3 className="text-lg font-semibold mt-4">Customer Reviews:</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              {product.testimonials.map((review, i) => <p key={i} className="text-gray-700">• {review}</p>)}
            </div>
            <button onClick={() => addToCart(product)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-600 transition-colors">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {relatedProducts.map((related, index) => (
            <motion.div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" whileHover={{ scale: 1.05 }}>
              <img src={related.image} alt={related.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{related.name}</h3>
              <p className="text-gray-500 text-sm">{related.category} - {related.state}</p>
              <div className="flex items-center mt-2">
                <span className="text-xl font-bold text-green-600">${related.price}</span>
                <span className="text-gray-500 line-through ml-2">${related.originalPrice}</span>
                <span className="text-red-500 ml-2">({related.discount}% OFF)</span>
              </div>
              <button onClick={() => addToCart(related)} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md flex items-center hover:bg-blue-600 transition-colors w-full justify-center">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
