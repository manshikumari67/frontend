import React from 'react'

const Campaigns = () => {
    return (
      <div className="bg-gray-100 p-5 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">
          Water Conservation Articles
        </h1>
        <div className="bg-white rounded-lg shadow-md p-5 mb-10">
          <img
            src="src/assets/img6.png"
            alt="Awareness Campaigns"
            className="float-left mr-5 w-48 h-auto rounded-md"
          />
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Awareness Campaigns
          </h2>
          <p className="text-gray-700 text-justify mb-3">
            Awareness campaigns play a critical role in promoting water conservation and sustainable management, particularly for industries and communities.
          </p>
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Objectives of Water Awareness Campaigns
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>Educate:</strong> Highlight the importance of water in daily
              life, industries, and ecosystems.
            </li>
            <li>
              <strong>Engage:</strong> Foster community participation in water
              conservation efforts.
            </li>
            <li>
              <strong>Empower:</strong> Advocate for actionable steps to reduce
              water waste.
            </li>
          </ul>
          <div className="clear-both"></div>
        </div>
      </div>
    );
  };
  
  export default Campaigns;
  