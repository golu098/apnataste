"use client";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import { useState } from "react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeaZIfNI-iMKd3XbIV01trKk4khKTm72TK0kDFdcJpLtwVUtg/formResponse";
const NAME_ENTRY = "entry.626115774";
const EMAIL_ENTRY = "entry.1887478739"; 
const MESSAGE_ENTRY = "entry.404898158"; 

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to Google Form
    sendToGoogleForm(formData);
    
    // Show alert message to the user
    alert("Your message has been successfully saved!");
    
    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  const sendToGoogleForm = (data) => {
    const formDataGoogle = new FormData();
    formDataGoogle.append(NAME_ENTRY, data.name);
    formDataGoogle.append(EMAIL_ENTRY, data.email);
    formDataGoogle.append(MESSAGE_ENTRY, data.message);

    fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: formDataGoogle,
      mode: "no-cors",
    }).catch((error) => console.error("Error submitting to Google Form:", error));
  };

  return (
    <>
      <center>
        <img className="img-head align-middle" src="https://finwave.co/images/gif/Contact-1.gif" />
      </center>
      <div>
        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-4">Have any questions? We'd love to hear from you.</p>
                <p className="text-gray-700"><strong>Address:</strong> Lakhanpura, Bakhtiyarpur, Patna (803212)</p>
                <p className="text-gray-700"><strong>Email:</strong> apnataste2@gmail.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 62020 55728</p>
              </div>
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
                  <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg font-semibold">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Chatbot />
        <Footer />
      </div>
    </>
  );
}
