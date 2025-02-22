"use client";
import { useState, useEffect } from "react";
import { useCart } from "./cartContext";
import QRCode from "qrcode.react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [showQR, setShowQR] = useState(false);
  const [upiLink, setUpiLink] = useState("");
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (cart.length === 0) {
      alert("Your cart is empty. Redirecting to cart page...");
      window.location.href = "/cart";
    }
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, address, city, state, pincode } = formData;

    if (!name || !mobile || !address || !city || !state || !pincode) {
      alert("Please fill all the details.");
      return;
    }

    // Generate a UPI Payment Link (Replace 'yourUPIID@upi' with actual UPI ID)
    const upiPaymentURL = `upi://pay?pa=yourUPIID@upi&pn=${encodeURIComponent(
      name
    )}&mc=&tid=&tr=&tn=Payment for Order&am=${totalAmount.toFixed(2)}&cu=INR`;

    setUpiLink(upiPaymentURL);
    setShowQR(true);
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* Order Summary */}
          <div className="border p-4 rounded-md shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-2">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="font-semibold">${item.price * item.quantity}</span>
              </div>
            ))}
            <h3 className="text-xl font-bold mt-4">Total: ${totalAmount.toFixed(2)}</h3>
          </div>

          {/* Shipping Details Form */}
          <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border p-2 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className="border p-2 rounded-md"
              required
            />
            <textarea
              placeholder="Full Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="border p-2 rounded-md"
              required
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="border p-2 rounded-md w-1/2"
                required
              />
              <input
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="border p-2 rounded-md w-1/2"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              className="border p-2 rounded-md"
              required
            />
            <button type="submit" className="bg-green-500 text-white py-2 rounded-md">
              Proceed to Payment
            </button>
          </form>

          {/* QR Code for UPI Payment */}
          {showQR && (
            <div className="text-center mt-6">
              <h2 className="text-xl font-bold mb-2">Scan QR to Pay</h2>
              <QRCode value={upiLink} size={200} />
              <p className="text-gray-500 mt-2">Use UPI (Google Pay, PhonePe, Paytm) to complete the payment.</p>
              <a
                href={upiLink}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md inline-block"
              >
                Pay Now
              </a>
            </div>
          )}

          {/* Back to Cart */}
          <div className="mt-4 text-center">
            <Link href="/cart">
              <button className="text-blue-500 underline">Back to Cart</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
