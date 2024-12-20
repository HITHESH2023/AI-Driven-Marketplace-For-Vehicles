import React, { useState } from 'react';
import CarCard from './CarCard.jsx';

const Cars = ({ cars }) => {
  const [visibleCount, setVisibleCount] = useState(8); // Number of cars to display initially

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Load 4 more cars on each click
  };

  return (
    <div className="w-11/12 md:w-5/5 m-auto">
      <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8">
        {cars.slice(0, visibleCount).map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {visibleCount < cars.length && ( // Show the button only if there are more cars to load
        <div className="w-full flex justify-center py-10">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 border-2 border-indigo-600 shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Load More
          </button>

        </div>
      )}
    </div>
  );
};

export default Cars;
