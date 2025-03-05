"use client";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <center>
    <img  className=" img-head align-middle "src="https://finwave.co/images/gif/Contact-1.gif"/></center>    <div>
    
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-4">
              Have any questions? We'd love to hear from you.
            </p>

            <p className="text-gray-700"><strong>Address:</strong> Lakhanpura,Bakhtiyarpur,Patna(803212)</p>
            <p className="text-gray-700"><strong>Email:</strong> apnataste2@gmail.com
            </p>
            <p className="text-gray-700"><strong>Phone:</strong> +91 62020 55728</p>

            <div className="mt-4">
              <a href="#" className="text-green-600 hover:underline">Follow us on Facebook</a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-green-600 text-center mb-4">Our Location</h3>
          <iframe
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.0050570196329!2d85.48612699530722!3d25.472874790660715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2850033a211f9%3A0xc7c76baf19d08a36!2sSharma%20Nivas!5e1!3m2!1sen!2sin!4v1741006583998!5m2!1sen!2sin"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373531531552!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777c2b57eacb0!2sOrganic%20Shop!5e0!3m2!1sen!2sus!4v1629473376921!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
    <Chatbot/>
    <Footer/>
    </div>
    </>
  );
}
