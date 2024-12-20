import React from 'react';

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-5">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h2 className="text-center text-2xl font-bold mb-5">Help & FAQs</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">How can I contact support?</h3>
          <p className="text-gray-700">You can reach out to us via the Contact page or email us at autohaven007@gmail.com.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">What is the response time?</h3>
          <p className="text-gray-700">Our team typically responds within 24-48 hours on business days.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Where can I find more information?</h3>
          <p className="text-gray-700">You can find more information in our documentation or by contacting support.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;