"use client"; // Ensure it's a client component

import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="mt-6">
          {!isLogin && (
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-green-400"
              />
            </div>
          )}

          <div className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleAuthMode} className="text-green-600 font-semibold">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
