import React from "react";
import { Link } from "react-router-dom";
import gt3rs from "../assets/gt3rs.jpg"; // Assuming you saved the uploaded image in src/assets
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <div className="font-sans">
        <Navbar />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${gt3rs})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Drive Your Dream. Own the Power.</h1>
          <p className="text-lg mb-6">Discover luxury cars tailored to perfection.</p>
          <Link
            to="/cars"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Explore Cars →
          </Link>
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Car Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="src/assets/gt3rs.jpg" // Replace with actual car images
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Porsche GT3 RS</h3>
              <p className="text-gray-600">Starting at 1.99 Cr</p>
              <Link
                to="/cars"
                className="inline-block mt-4 text-yellow-500 hover:text-yellow-600 font-semibold"
              >
                Explore More →
              </Link>
            </div>
          </div>

          {/* Duplicate the above block for more cars */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="src/assets/F488-Pista.jpg"
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Ferrari 488 Pista</h3>
              <p className="text-gray-600">Starting at 3.99 Cr</p>
              <Link
                to="/cars"
                className="inline-block mt-4 text-yellow-500 hover:text-yellow-600 font-semibold"
              >
                Explore More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src="src/assets/huracan.jpg"
              alt="Car"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">Lamborghini Huracán</h3>
              <p className="text-gray-600">Starting at 2.99 Cr</p>
              <Link
                to="/cars"
                className="inline-block mt-4 text-yellow-500 hover:text-yellow-600 font-semibold"
              >
                Explore More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="bg-yellow-500 py-10 text-center text-black">
        <h2 className="text-2xl font-bold mb-3">Need Help Choosing the Right Car?</h2>
        <p className="mb-5">Chat with our AI Expert and find the perfect match for you.</p>
        <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
          Start Chat →
        </button><br /><br />
        <p className="mb-5">By Clicking on The Icon To Your Bottom-right Corner.</p>
      </div>
    <Footer />
    <Chatbot />
    </div>
  );
};

export default Home;
