// import { useParams } from "react-router-dom";

// const blogs = [
//   {
//     id: 1,
//     title: "The Legacy of Traditional Sweets",
//     description:
//       "Explore the history and cultural significance of famous Indian sweets passed down through generations.",
//     image: "/blog1.jpg",
//     content: "Full content of blog 1 goes here...",
//     references: ["https://example.com/sweets-history"],
//   },
//   {
//     id: 2,
//     title: "Must-Try Regional Snacks of India",
//     description: "From crispy namkeens to delightful mithais, discover the best local snacks from different states.",
//     image: "/blog2.jpg",
//     content: "Full content of blog 2 goes here...",
//     references: ["https://example.com/indian-snacks"],
//   },
//   {
//     id: 3,
//     title: "How We Ensure Freshness in Every Bite",
//     description: "Learn about our process of sourcing, preparing, and delivering the freshest sweets and snacks to you.",
//     image: "/blog3.jpg",
//     content: "Full content of blog 3 goes here...",
//     references: ["https://example.com/fresh-sweets"],
//   },
// ];

// export default function BlogDetails() {
//   const { id } = useParams();
//   const blog = blogs.find((b) => b.id === parseInt(id));

//   if (!blog) {
//     return <h2 className="text-center text-red-500">Blog not found</h2>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <img src={blog.image} alt={blog.title} className="w-full rounded-lg shadow-lg" />
//       <h2 className="text-3xl font-bold text-gray-800 mt-6">{blog.title}</h2>
//       <p className="text-gray-600 mt-4">{blog.content}</p>
//       <h3 className="text-xl font-semibold text-green-600 mt-6">References:</h3>
//       <ul className="list-disc pl-5 text-gray-600">
//         {blog.references.map((ref, index) => (
//           <li key={index}>
//             <a href={ref} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//               {ref}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
