import React from "react";
import Navbar from "../components/Navbar.jsx";
import Search from "../components/Search.jsx";
import Cars from "../components/Cars.jsx";
import Footer from "../components/Footer.jsx";
import Chatbot from "../components/Chatbot.jsx";
import backgroundImage from "../assets/bgimg3.jpg";

const CarsPage = ({ cars }) => {
  return (
    <div
      className="font-sans"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <Navbar />
      <Search />
      <Cars cars={cars} />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default CarsPage;
