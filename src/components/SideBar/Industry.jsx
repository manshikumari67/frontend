import React from "react";

const Industry = () => {
  return (
    <div className="content bg-gray-100 min-h-screen p-6">

      {/* Article 4: Water in Industry */}
      <div className="content-article bg-white rounded-lg shadow-lg p-6 mb-6 ">
        <img
          src="src/assets/img4.png"
          alt="Water in Industry"
          className="float-left w-48 h-auto mr-4 rounded-md shadow-md "
        />
        <h2 className="text-xl font-bold text-blue-700 mb-4">Water in Industry</h2>
        <p className="text-gray-700 mb-4">
          Water plays a crucial role in industrial processes and is a vital resource for manufacturing, production, and various other industrial activities.
        </p>
        <p className="text-gray-700 mb-4">
          Here's an overview of its importance and use in industries:
        </p>

        <h3 className="text-lg font-semibold text-blue-700 mb-2">Importance of Water in Industry</h3>
        <h5 className="text-md font-medium text-gray-800">Processing and Manufacturing:</h5>
        <p className="text-gray-700 mb-2">Used as a raw material in chemical, food, beverage, and pharmaceutical industries.</p>
        <p className="text-gray-700 mb-4">Integral in producing products like paper, textiles, and steel.</p>

        <h5 className="text-md font-medium text-gray-800">Cooling and Heating:</h5>
        <p className="text-gray-700 mb-2">Cooling water systems are essential in power plants, refineries, and manufacturing facilities.</p>
        <p className="text-gray-700 mb-4">Used in boilers to generate steam for power generation and other processes.</p>

        <h3 className="text-lg font-semibold text-blue-700 mb-2">Challenges of Water Use in Industry</h3>
        <h5 className="text-md font-medium text-gray-800">Scarcity and Competition:</h5>
        <p className="text-gray-700 mb-2">
          Limited water availability can lead to competition between industrial and other sectors.
        </p>

        <h3 className="text-lg font-semibold text-blue-700 mb-2">Solutions for Sustainable Water Management</h3>
        <h5 className="text-md font-medium text-gray-800">Recycling and Reuse:</h5>
        <p className="text-gray-700 mb-2">
          Implementing water recycling systems to reduce freshwater dependency.
        </p>

        <img
          src="src/assets/img5.jpeg"
          alt="Example of Sustainable Water Management"
          className="h-28 w-28 rounded-md shadow-md mt-6"
        />

        <div className="clear-both"></div>
      </div>
    </div>
  );
};

export default Industry;
