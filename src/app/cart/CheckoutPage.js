"use client";
import { useState } from "react";
// import QRCode from "qrcode.react";
import { sendEmail } from "./emailService";

export default function CheckoutPage() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGPDN5plBuHjlKTuIzMRh1mq21jzu2PqA6FCmxFK2ht11YEg/formResponse";

  const [formData, setFormData] = useState({
    country: "",
    state: "",
    name: "",
    mobile: "",
    flat: "",
    area: "",
    landmark: "",
    pincode: "",
    city: "",
    instructions: "",
  });

  const [showQR, setShowQR] = useState(false);

  const fetchLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();

        setFormData((prev) => ({
          ...prev,
          area: data.address.road || "",
          city: data.address.city || data.address.town || "",
          state: data.address.state || "",
          pincode: data.address.postcode || "",
          country: data.address.country || "",
        }));
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    sendToGoogleForm(formData);
    alert("Checkout info submitted successfully!");
    setFormData({
      country: "",
      state: "",
      name: "",
      mobile: "",
      flat: "",
      area: "",
      landmark: "",
      pincode: "",
      city: "",
      instructions: "",
    });
    setShowQR(true);
  };
    const sendToGoogleForm = (data) => {
    const formDataGoogle = new FormData();
    formDataGoogle.append("entry.2029032132", data.name);
    formDataGoogle.append("entry.1657754689", data.mobile);
    formDataGoogle.append("entry.1557907984", data.country);
    formDataGoogle.append("entry.644260367", data.state);
    formDataGoogle.append("entry.1908134322", data.city);
    formDataGoogle.append("entry.2129654151", data.pincode);
    formDataGoogle.append("entry.81113621", data.area);
    formDataGoogle.append("entry.1397872009", data.flat);
    formDataGoogle.append("entry.208049716", data.landmark);
    formDataGoogle.append("entry.101010", data.instructions);
  
    fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: formDataGoogle,
      mode: "no-cors",
    }).catch((error) => console.error("Error submitting to Google Form:", error));
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid gap-5">
        {/* Country Text Input */}
        <label className="block">
          <span className="text-gray-700 font-medium">Country:</span>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            required
          />
        </label>

        {/* State Text Input */}
        <label className="block">
          <span className="text-gray-700 font-medium">State:</span>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            required
          />
        </label>

        {/* Name */}
        <label className="block">
          <span className="text-gray-700 font-medium">Name:</span>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>

        {/* Mobile */}
        <label className="block">
          <span className="text-gray-700 font-medium">Mobile:</span>
          <input
            type="number"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
          />
        </label>

        {/* Use My Location Button */}
        <button
          type="button"
          onClick={fetchLocation}
          className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Use My Location
        </button>

        {/* Flat/House/Apartment Number */}
        <label className="block">
          <span className="text-gray-700 font-medium">Flat No / House No / Apartment No:</span>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.flat}
            onChange={(e) => setFormData({ ...formData, flat: e.target.value })}
            required
          />
        </label>

        {/* Area / Street / Sector / Village */}
        <label className="block">
          <span className="text-gray-700 font-medium">Area / Street / Sector / Village:</span>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            required
          />
        </label>

        {/* Landmark */}
        <label className="block">
          <span className="text-gray-700 font-medium">Landmark:</span>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.landmark}
            onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
          />
        </label>

        {/* Pincode */}
        <label className="block">
          <span className="text-gray-700 font-medium">Pincode:</span>
          <input
            type="number"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.pincode}
            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            required
          />
        </label>

        {/* City */}
        <label className="block">
          <span className="text-gray-700 font-medium">Town/City:</span>
          <input
            type="text"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </label>

        {/* Delivery Instructions */}
        <label className="block">
          <span className="text-gray-700 font-medium">Delivery Instructions (Optional):</span>
          <textarea
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Proceed to Payment
        </button>
      </form>

      {/* Show QR Code after submission */}
      {showQR && (
        <div className="text-center mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Scan QR to Pay</h2>
          {/* <QRCode value="upi://pay?pa=yourUPIID@upi&pn=Your Name&am=100.00&cu=INR" /> */}
        </div>
      )}
    </div>
  );
}
