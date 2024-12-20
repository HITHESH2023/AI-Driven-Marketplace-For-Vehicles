import React, { useState } from 'react';
import Search from '../components/Search.jsx';
import Cars from '../components/Cars.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Chatbot from '../components/Chatbot.jsx';
import backgroundImage from "../assets/bgimg3.jpg";

const Sort = ({ cars }) => {
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilter = ({ country, brand, priceRange }) => {
    let filtered = cars;
  
    if (country) {
      filtered = filtered.filter((car) => car.country === country);
    }
  
    if (brand) {
      filtered = filtered.filter((car) => car.brand === brand);
    }
  
    if (priceRange) {
      const [min, max] = priceRange.split('-').map((value) => Number(value.replace(/,/g, '')));
      filtered = filtered.filter((car) => {
        const carPrice = Number(car.price.replace(/,/g, '')); // Remove commas and convert to number
        return max
          ? carPrice >= min && carPrice <= max
          : carPrice >= min;
      });
    }
  
    setFilteredCars(filtered);
  };
  

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <Search onFilter={handleFilter} />
      <Cars cars={filteredCars} />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Sort;
