import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TestRideForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    licenseNo: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the date
    const selectedDate = new Date(formData.date);
    const today = new Date();
    if (selectedDate <= today) {
      alert("Please select a date after today.");
      return;
    }

    // Submit form logic here (e.g., send to backend)
    console.log("Test Ride Details Submitted:", formData);
    alert("Booking Successful!!");
    // Redirect to a success page or confirmation message
    navigate("/cars");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-1/2">
        <h1 className="text-2xl font-bold mb-6">Book a Test Ride</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="18"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Driving License No</label>
            <input
              type="text"
              name="licenseNo"
              value={formData.licenseNo}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Select Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestRideForm;
