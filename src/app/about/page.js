import Footer from "@/components/Footer";
import BlogSection from "./BlogSection";

export default function About() {
  return (
    <div>
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Image */}
          <div className="flex justify-center">
            <img
              src="/about-image.jpg"
              alt="About Us"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section - Content */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Who We Are</h3>
            <p className="text-gray-600">
              Welcome to our online organic store! We are passionate about delivering the best
              organic products sourced from trusted farms. Our mission is to promote a healthy
              lifestyle by offering fresh and eco-friendly products.
            </p>

            <h3 className="text-xl font-semibold text-green-600 mt-6 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              We believe in sustainability, quality, and transparency. Our goal is to create a
              world where everyone has access to fresh and organic food.
            </p>

            <h3 className="text-xl font-semibold text-green-600 mt-6 mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>100% organic and natural products</li>
              <li>Sourced directly from farmers</li>
              <li>Eco-friendly packaging</li>
              <li>Customer satisfaction is our priority</li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
    <BlogSection/>
    <Footer/>

    </div>
  );
}
