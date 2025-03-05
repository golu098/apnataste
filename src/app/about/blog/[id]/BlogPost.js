// import { useRouter } from "next/router";
// import Link from "next/link";

// const blogData = [
//   {
//     id: 1,
//     title: "The Legacy of Traditional Sweets",
//     description:
//       "Explore the history and cultural significance of famous Indian sweets passed down through generations.",
//     content:
//       "Indian sweets hold a deep cultural and historical significance...",
//     image: "/blog1.jpg",
//     references: ["https://example.com/sweets-history"],
//   },
//   {
//     id: 2,
//     title: "Must-Try Regional Snacks of India",
//     description:
//       "From crispy namkeens to delightful mithais, discover the best local snacks from different states.",
//     content: "Each Indian state has its own unique snack delicacies...",
//     image: "/blog2.jpg",
//     references: ["https://example.com/regional-snacks"],
//   },
//   {
//     id: 3,
//     title: "How We Ensure Freshness in Every Bite",
//     description:
//       "Learn about our process of sourcing, preparing, and delivering the freshest sweets and snacks to you.",
//     content:
//       "We use a specialized technique to ensure freshness...",
//     image: "/blog3.jpg",
//     references: ["https://example.com/freshness"],
//   },
// ];

// export default function BlogPost() {
//   const router = useRouter();
//   const { id } = router.query;

//   const blog = blogData.find((b) => b.id === parseInt(id));

//   if (!blog) return <p className="text-center text-red-600">Blog not found.</p>;

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <img src={blog.image} alt={blog.title} className="w-full rounded-lg shadow-lg" />
//       <h1 className="text-3xl font-bold text-green-600 mt-6">{blog.title}</h1>
//       <p className="text-gray-600 mt-4">{blog.content}</p>

//       <h3 className="text-xl font-semibold text-green-600 mt-6">References:</h3>
//       <ul className="list-disc pl-5 mt-2 text-blue-600">
//         {blog.references.map((ref, index) => (
//           <li key={index}>
//             <a href={ref} target="_blank" rel="noopener noreferrer">
//               {ref}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <Link href="/">
//         <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
//           Back to Home
//         </button>
//       </Link>
//     </div>
//   );
// }
