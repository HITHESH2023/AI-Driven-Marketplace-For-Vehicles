import React, { useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 px-3 py-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-200 transition duration-300"
        onClick={prevSlide}
      >
        <IoIosArrowRoundBack size={28} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 px-3 py-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-200 transition duration-300"
        onClick={nextSlide}
      >
        <IoIosArrowRoundForward size={28} />
      </button>

      {/* Main Image */}
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
          onClick={() => openModal(currentIndex)}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-5 space-x-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 h-16 object-cover cursor-pointer border-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110 ${
              currentIndex === index ? 'border-indigo-500' : 'border-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Modal for Image View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl bg-gray-700 rounded-full p-2 hover:bg-gray-800 transition"
              onClick={closeModal}
            >
              <AiOutlineClose />
            </button>
            <img
              src={images[currentIndex]}
              alt={`Large view ${currentIndex + 1}`}
              className="w-auto max-w-screen-lg max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
