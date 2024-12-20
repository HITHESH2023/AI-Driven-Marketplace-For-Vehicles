import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-yellow-500">
              <a href="/">Home</a>
            </li>
            <li className="mb-2 hover:text-yellow-500">
              <a href="/cars">Cars</a>
            </li>
            <li className="mb-2 hover:text-yellow-500">
              <a href="/">About Us</a>
            </li>
            <li className="mb-2 hover:text-yellow-500">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-md hover:bg-yellow-600" 
            onClick={() => alert('Subscribed successfully!\nNow you will receive latest updates in your Gmail!')}>
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-500" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-500" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-yellow-500" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-8 text-gray-500">
        <p>© 2024 Luxury Cars. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
