"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulated bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("payment")) return "We accept credit cards, UPI, and secure gateways.";
    if (userMessage.includes("track")) return "Track your order using the link sent to your email.";
    if (userMessage.includes("shipping")) return "Orders are delivered within 5-7 business days.";
    if (userMessage.includes("return")) return "You can return items within 30 days.";
    if (userMessage.includes("cancel")) return "Orders can be canceled before shipment.";
    if (userMessage.includes("support")) return "You can contact support at support@yourstore.com.";
    if (userMessage.includes("product")) return "we have wide range of local tasty product you can find on Product page on above ";
    
    return "I'm not sure, but you can contact our support team or contact us on mail :- apnaTaste2@gmail.com!";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
  
     {/* Chatbot Button */}
{!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="p-3 rounded-full shadow-lg transition"
  >
    <img 
      src="https://media4.giphy.com/avatars/acetech/RK67baKq9A79.gif" 
      alt="Chatbot"
      className="w-16 h-16 object-cover"
    />
  </button>
)}


      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col fixed bottom-20 right-6 border border-gray-200">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">Chat Support</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-gray-100 text-gray-800 self-start"
                    : "bg-green-500 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-2 border-t flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg focus:outline-none"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
