// import React, { useState } from "react";
// import { ShoppingCart, Heart } from "lucide-react";
// import Link from "next/link";

// const BestSellingProductPage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (provider) => {
//     alert(`Logging in with ${provider}`);
//     setIsLoggedIn(true);
//   };

//   const product = {
//     name: "Organic Honey",
//     category: "Groceries",
//     originalPrice: 150,
//     actualPrice: 99,
//     discount: 34,
//     image: "https://via.placeholder.com/200",
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
//         <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />

//         <div className="mt-4">
//           <h2 className="text-xl font-bold">{product.name}</h2>
//           <p className="text-gray-500">{product.category}</p>

//           <div className="flex items-center justify-center gap-2 mt-2">
//             <span className="text-red-500 line-through">${product.originalPrice}</span>
//             <span className="text-green-600 text-lg font-semibold">${product.actualPrice}</span>
//           </div>

//           <div className="mt-2 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-md inline-block">
//             {product.discount}% OFF
//           </div>
//         </div>

//         <div className="mt-4 flex gap-4 justify-center">
//           {isLoggedIn ? (
//             <>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
//                 <ShoppingCart size={16} /> Add to Cart
//               </button>
//               <button className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md flex items-center gap-2">
//                 <Heart size={16} className="text-red-500" /> Wishlist
//               </button>
//             </>
//           ) : (
//             <div className="mt-4">
//               <p className="text-red-500 text-sm">Login to Add to Cart & Wishlist</p>
//               <div className="flex justify-center gap-3 mt-2">
//                 <button onClick={() => handleLogin("Google")} className="bg-gray-200 px-3 py-1 rounded-md">Google</button>
//                 <button onClick={() => handleLogin("Facebook")} className="bg-gray-200 px-3 py-1 rounded-md">Facebook</button>
//                 <button onClick={() => handleLogin("Apple")} className="bg-gray-200 px-3 py-1 rounded-md">Apple</button>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mt-6">
//           <Link href="/">
//             <button className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-md">
//               Back to Home
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellingProductPage;
