export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-400">OrganicShop</h3>
            <p className="text-gray-400 mt-3">
              Your trusted online marketplace for 100% organic and natural products.
            </p>
          </div>
  
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-green-400">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#" className="hover:text-green-400">Shop</a></li>
              <li><a href="#" className="hover:text-green-400">About Us</a></li>
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Column 3 - Customer Support */}
          <div>
            <h4 className="text-xl font-semibold text-green-400">Customer Support</h4>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-green-400">FAQ</a></li>
              <li><a href="#" className="hover:text-green-400">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-green-400">Returns & Refunds</a></li>
            </ul>
          </div>
        </div>
  
        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="hover:text-green-400"><i className="fab fa-facebook-f text-xl"></i></a>
          <a href="#" className="hover:text-green-400"><i className="fab fa-instagram text-xl"></i></a>
          <a href="#" className="hover:text-green-400"><i className="fab fa-twitter text-xl"></i></a>
          <a href="#" className="hover:text-green-400"><i className="fab fa-youtube text-xl"></i></a>
        </div>
  
        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400">
          © {new Date().getFullYear()} OrganicShop. All Rights Reserved.
        </div>
      </footer>
    );
  }
  