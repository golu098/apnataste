import Footer from "@/components/Footer";
import BlogSection from "./BlogSection";
import OurProcess from "./OurProcess";
import OurStory from "./OurStory";
import MeetOurTeam from "./MeetOurTeam";
import Chatbot from "@/components/Chatbot";

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
                src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
                alt="About Us"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>

            {/* Right Section - Content */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Who We Are</h3>
              <p className="text-gray-600">
                We bring you the finest selection of traditional sweets and snacks, 
                crafted with authentic recipes and premium ingredients. Every bite 
                is a celebration of rich flavors and heritage.
              </p>

              <h3 className="text-xl font-semibold text-green-600 mt-6 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our goal is to make local delicacies accessible to everyone, preserving 
                age-old recipes while ensuring freshness and quality. We take pride in 
                delivering happiness through taste.
              </p>

              <h3 className="text-xl font-semibold text-green-600 mt-6 mb-4">Why Choose Us?</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Authentic homemade sweets and snacks</li>
                <li>Freshly prepared with high-quality ingredients</li>
                <li>Traditional flavors delivered to your doorstep</li>
                <li>Customer satisfaction is our priority</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <BlogSection /> */}
      <OurProcess />
      <OurStory/>
      <MeetOurTeam/>
      <Chatbot/>
      <Footer />
    </div>
  );
}
