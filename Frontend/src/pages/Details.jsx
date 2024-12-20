import React from 'react';
import Navbar from '../components/Navbar.jsx';
import ImageSlider from '../components/ImageSlider.jsx';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import backgroundImage from "../assets/bgimg3.jpg";
import Footer from '../components/Footer.jsx';


const Details = ({ cars }) => {
  const { carId } = useParams();
  const selectedCar = cars.find((car) => car.id === Number(carId));
  const images = [selectedCar.image, selectedCar.image, selectedCar.image];

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Navbar />
      <div className="w-11/12 md:w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between md:space-x-10">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-5">
          <p className="text-lg">
            <Link to="/" className="hover:text-indigo-500 transition duration-300">Home</Link> {">"} <Link to="/cars">Cars</Link> {">"}{" "}
            <span className="font-semibold text-indigo-500">Details</span>
          </p>
          <h1 className="text-4xl font-bold">{selectedCar.model}</h1>
          <h1 className="text-3xl font-bold text-indigo-500">Rs {selectedCar.price}</h1>
          <ImageSlider images={selectedCar.images} />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col justify-between p-4">
          {/* Key Specifications */}
          <div className="py-5 border-b space-y-5 bg-gray-100 rounded-lg shadow-lg p-5">
            <h1 className="text-2xl font-semibold text-gray-700">Key Specifications</h1>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Engine</p>
                <p className="text-gray-800">{selectedCar.engine || "1199 cc"}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Ground Clearance</p>
                <p className="text-gray-800">{selectedCar.groundClearance || "187 mm"}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Power</p>
                <p className="text-gray-800">{selectedCar.power || "72 - 87 bhp"}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Torque</p>
                <p className="text-gray-800">{selectedCar.torque || "103 Nm - 115 Nm"}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Transmission</p>
                <p className="text-gray-800">{selectedCar.transmission || "Manual / Automatic"}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Drive Type</p>
                <p className="text-gray-800">{selectedCar.driveType || "FWD"}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Global NCAP Safety</p>
                <p className="text-gray-800">{selectedCar.safetyRating || "5 Star"}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Seating Capacity</p>
                <p className="text-gray-800">{selectedCar.seatingCapacity}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Fuel Tank Capacity</p>
                <p className="text-gray-800">{selectedCar.fuelCapacity}</p>
              </div>
              <div className="hover:scale-105 transition transform duration-300 ease-in-out">
                <p className="font-bold text-gray-600">Range</p>
                <p className="text-gray-800">{selectedCar.mileage}</p>
              </div>
            </div>
          </div>

          {/* Book A Test Ride Section */}
          <div className="py-5 border-b space-y-2 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-700">{selectedCar.model}</h1>
              <p className="text-gray-600 font-bold text-lg">Price: <span className="text-indigo-500 font-bold">Rs {selectedCar.price}</span></p>
            </div>
            <Link to="/testRideForm">
              <button className="w-48 px-8 py-2 flex justify-center items-center rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300">
                <span className="text-lg font-semibold">Book A Test Ride</span>
              </button>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
