"use client";
import { useState } from "react";
import axios from "axios";

const scriptURL = "https://script.google.com/macros/s/AKfycbysEp2UBvAqeAbhoZugRRWeIKkkfoYSAqMKZhL_iO1r-TVCZR76Da7PSZg7HkTf-NIM/exec";
export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = isLogin
      ? { action: "login", email, password }
      : { action: "signup", name: fullName, email, password };

    try {
      const response = await axios.post(scriptURL, payload);
      setMessage(response.data.message);
    }
    catch (error) {
  console.error("Error:", error); // Add this line
  setMessage("Something went wrong");
}

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form className="mt-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-green-400"
              />
            </div>
          )}

          <div className="mt-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-green-600 font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </div>
    </div>
  );
}
