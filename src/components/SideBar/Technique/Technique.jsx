import React from "react";

const Technique = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">

      {/* Article Section */}
      <div className="bg-white rounded-lg shadow-lg p-5 mb-8 transform transition duration-500 ease-out opacity-0 translate-y-5 show">
        <img
          src="src/assets/img2.jpg"
          alt="Water Saving Techniques"
          className="w-48 h-auto rounded-lg float-left mr-5"
        />
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          Saving Techniques
        </h2>
        <div>
          <h4 className="text-lg font-semibold mt-4">Water Saving Techniques</h4>
          <p className="text-justify text-gray-700 mb-3">
            Water conservation is essential for ensuring sustainable access to
            clean water for all. Below are some key water-saving techniques
            that individuals, businesses, and industries can adopt to reduce
            water wastage:
          </p>
          <h4 className="text-lg font-semibold mt-4">1. Rainwater Harvesting</h4>
          <p className="text-justify text-gray-700">
            <strong>What it is:</strong> Collecting rainwater during rainfall
            and storing it for later use.
          </p>
          <p className="text-gray-700">
            <strong>Benefits:</strong> Reduces reliance on local water supply
            and can be used for irrigation, cleaning, or even drinking (with
            proper filtration).
          </p>

          <h4 className="text-lg font-semibold mt-4">2. Drip Irrigation</h4>
          <p className="text-justify text-gray-700">
            <strong>What it is:</strong> A highly efficient irrigation method
            that delivers water directly to the roots of plants in small, steady
            amounts.
          </p>
          <p className="text-gray-700">
            <strong>Benefits:</strong> Reduces water loss due to evaporation and
            runoff and encourages healthy plant growth by providing targeted
            watering.
          </p>

          <h4 className="text-lg font-semibold mt-4">
            3. Smart Watering Systems
          </h4>
          <p className="text-justify text-gray-700">
            <strong>What it is:</strong> Automated irrigation systems that
            adjust water use based on weather conditions, soil moisture levels,
            and plant needs.
          </p>
          <p className="text-gray-700">
            <strong>Benefits:</strong> Prevents overwatering and saves time and
            effort while optimizing water use.
          </p>

          <h4 className="text-lg font-semibold mt-4">4. Greywater Recycling</h4>
          <p className="text-justify text-gray-700">
            <strong>What it is:</strong> Reusing water from baths, showers,
            sinks, and washing machines for purposes like irrigation or toilet
            flushing.
          </p>
          <p className="text-gray-700">
            <strong>Benefits:</strong> Reduces fresh water consumption and
            utilizes water that would otherwise go to waste.
          </p>

          <h4 className="text-lg font-semibold mt-4">
            5. Low-Flow Fixtures
          </h4>
          <p className="text-justify text-gray-700">
            <strong>What it is:</strong> Installing water-efficient appliances
            like showerheads, faucets, and toilets that use less water.
          </p>
          <p className="text-gray-700">
            <strong>Benefits:</strong> Significantly reduces water consumption
            in daily activities and saves money on water bills.
          </p>
        </div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default Technique;
