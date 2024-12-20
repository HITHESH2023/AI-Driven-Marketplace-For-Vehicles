import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Search = ({ onFilter }) => {
  const [country, setCountry] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    onFilter({ country, brand, priceRange });
  };

  return (
    <div className="flex justify-center py-10">
      <div className="flex items-center space-x-8 bg-gray-50 p-5 rounded-full">
        <div className="flex items-center space-x-5">
          <FaLocationDot />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Your Country</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="America">America</option>
            <option value="China">China</option>
            <option value="Korea">South Korea</option>
          </select>
        </div>
        <div>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Vendor</option>
            <option value="Toyota">Toyota</option>
            <option value="Force Motors">Force Motors</option>
            <option value="Maruti Suzuki">Maruti Suzuki</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Tata">Tata</option>
            <option value="Maruti Suzuki">Maruti Suzuki</option>
            <option value="Honda">Honda</option>
            <option value="Hyundai">Hyundai</option>
            <option value="BYD">BYD</option>
            <option value="Mercedes">Mercedes</option>
            <option value="BMW">BMW</option>
            <option value="Skoda">Skoda</option>
            <option value="Jeep">Jeep</option>
          </select>
        </div>
        <div>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200"
          >
            <option value="">Select Price Range</option>
            <option value="700000-1500000">Rs 7 - 15 Lakh</option>
            <option value="1500000-2500000">Rs 15 - 25 Lakh</option>
            <option value="2500000-5000000">Rs 25 - 50 Lakh</option>
            <option value="5000000-99999999">Above Rs 50 Lakh</option>
          </select>
        </div>
        <Link to="/sort">
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-indigo-600 text-white rounded-full"
        >
          Search
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
