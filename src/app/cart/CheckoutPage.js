"use client";
import { useState, useEffect } from "react";
// import QRCode from "qrcode.react";
import countriesData from "./countriesData";
import { sendEmail } from "./emailService";

export default function CheckoutPage() {
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

  const [states, setStates] = useState([]);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    setStates(countriesData[formData.country] || []);
  }, [formData.country]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = `
      Name: ${formData.name}
      Mobile: ${formData.mobile}
      Address: ${formData.flat}, ${formData.area}, ${formData.landmark}, ${formData.city}, ${formData.state}, ${formData.pincode}
      Instructions: ${formData.instructions}
    `;

    await sendEmail({
      to: "your-email@example.com",
      subject: "New Order Received",
      body: orderDetails,
    });

    setShowQR(true);
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Country Dropdown */}
        <label>
          Country:
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            required
          >
            <option value="">Select Country</option>
            {Object.keys(countriesData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        {/* State Dropdown */}
        <label>
          State:
          <select
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        {/* Name */}
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>

        {/* Mobile */}
        <label>
          Mobile:
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
          />
        </label>

        {/* Use My Location Button */}
        <button type="button" onClick={fetchLocation} className="bg-gray-500 text-white px-4 py-2 rounded-md">
          Use My Location
        </button>

        {/* Flat/House/Apartment Number */}
        <label>
          Flat No / House No / Apartment No:
          <input
            type="text"
            value={formData.flat}
            onChange={(e) => setFormData({ ...formData, flat: e.target.value })}
            required
          />
        </label>

        {/* Area / Street / Sector / Village */}
        <label>
          Area / Street / Sector / Village:
          <input
            type="text"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            required
          />
        </label>

        {/* Landmark */}
        <label>
          Landmark:
          <input
            type="text"
            value={formData.landmark}
            onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
          />
        </label>

        {/* Pincode */}
        <label>
          Pincode:
          <input
            type="number"
            value={formData.pincode}
            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
            required
          />
        </label>

        {/* City */}
        <label>
          Town/City:
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </label>

        {/* Delivery Instructions */}
        <label>
          Delivery Instructions (Optional):
          <textarea
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Proceed to Payment
        </button>
      </form>

      {/* Show QR Code after submission */}
      {showQR && (
        <div className="text-center mt-6">
          <h2 className="text-xl font-bold mb-2">Scan QR to Pay</h2>
          {/* <QRCode value="upi://pay?pa=yourUPIID@upi&pn=Your Name&am=100.00&cu=INR" /> */}
        </div>
      )}
    </div>
  );
}
