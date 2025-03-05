// import Link from "next/link";

// export default function BlogSection() {
//   const blogs = [
//     { id: 1, title: "The Legacy of Traditional Sweets", description: "Explore the history of sweets.", image: "/blog1.jpg" },
//     { id: 2, title: "Must-Try Regional Snacks of India", description: "Discover best local snacks.", image: "/blog2.jpg" },
//     { id: 3, title: "How We Ensure Freshness in Every Bite", description: "Learn about our freshness process.", image: "/blog3.jpg" },
//   ];

//   return (
//     <section className="bg-white py-12">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Blog</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div key={blog.id} className="bg-gray-100 shadow-lg rounded-lg p-4">
//               <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg" />
//               <h3 className="text-lg font-semibold text-green-600 mt-4">{blog.title}</h3>
//               <p className="text-gray-600 text-sm mt-2">{blog.description}</p>

//               {/* Add Link to Blog Page */}
//               <Link href={`/blog/${blog.id}`}>
//                 <button className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
//                   Read More
//                 </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
