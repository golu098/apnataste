"use client";
import { useCart } from "./cartContext";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-6">
            {cart.map((item) => (
              <div key={item.id} className="border p-4 flex justify-between items-center bg-white rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.category}</p>
                    <p className="text-green-600 font-bold">${item.price} x {item.quantity}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 border p-2 rounded-lg text-center"
                    min="1"
                  />
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-lg">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Total: ${getTotalPrice()}</h2>
            <Link href="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
