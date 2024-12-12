import React from 'react';

const Industry = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen ">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8">Water Conservation Articles</h1>
      
      {/* Article 4 */}
      <div id="industry" className="bg-white rounded-2xl p-8 shadow-lg mb-12 ">
        <img 
          src="src/assets/img4.png" 
          alt="Water in Industry" 
          className=" mr-8 rounded-xl w-48 h-auto "
        />
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Water in Industry</h2>
        <p className="text-lg text-gray-700 mb-6">
          Water plays a crucial role in industrial processes and is a vital resource for manufacturing, production, and various other industrial activities.
        </p>
        <p className="text-lg text-gray-700 mb-6">Here's an overview of its importance and use in industries:</p>

        <h3 className="text-2xl text-blue-500 mt-8 mb-4">Importance of Water in Industry</h3>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Processing and Manufacturing:</h5>
          <p className="text-lg text-gray-700 mb-4">Used as a raw material in chemical, food, beverage, and pharmaceutical industries.</p>
          <p className="text-lg text-gray-700 mb-4">Integral in producing products like paper, textiles, and steel.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Cooling and Heating:</h5>
          <p className="text-lg text-gray-700 mb-4">Cooling water systems are essential in power plants, refineries, and manufacturing facilities.</p>
          <p className="text-lg text-gray-700 mb-4">Used in boilers to generate steam for power generation and other processes.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Cleaning and Sanitation:</h5>
          <p className="text-lg text-gray-700 mb-4">Ensures hygiene in industries such as food processing and healthcare.</p>
          <p className="text-lg text-gray-700 mb-4">Cleans equipment and machinery to maintain operational efficiency.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Transportation and Mixing:</h5>
          <p className="text-lg text-gray-700 mb-4">Acts as a medium for transporting chemicals and other materials in pipelines.</p>
          <p className="text-lg text-gray-700 mb-4">Used to dissolve or dilute substances in manufacturing processes.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Energy Production:</h5>
          <p className="text-lg text-gray-700 mb-4">Key to hydropower generation.</p>
          <p className="text-lg text-gray-700 mb-4">Plays a significant role in thermal and nuclear power plants.</p>
        </div>

        <h3 className="text-2xl text-blue-500 mt-8 mb-4">Challenges of Water Use in Industry</h3>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Scarcity and Competition:</h5>
          <p className="text-lg text-gray-700 mb-4">Limited water availability can lead to competition between industrial and other sectors.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Water Quality Requirements:</h5>
          <p className="text-lg text-gray-700 mb-4">Industries often require specific water quality, necessitating purification and treatment.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Wastewater Management:</h5>
          <p className="text-lg text-gray-700 mb-4">Industrial processes generate wastewater containing pollutants that need treatment before discharge.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Sustainability Pressures:</h5>
          <p className="text-lg text-gray-700 mb-4">Increasing focus on minimizing water usage and reducing the environmental impact of water withdrawal.</p>
        </div>

        <h3 className="text-2xl text-blue-500 mt-8 mb-4">Solutions for Sustainable Water Management in Industry</h3>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Recycling and Reuse:</h5>
          <p className="text-lg text-gray-700 mb-4">Implementing water recycling systems to reduce freshwater dependency.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Efficient Technology:</h5>
          <p className="text-lg text-gray-700 mb-4">Adopting advanced cooling systems, low-water cleaning technologies, and energy-efficient boilers.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Wastewater Treatment:</h5>
          <p className="text-lg text-gray-700 mb-4">Setting up treatment plants to recycle wastewater for industrial or agricultural use.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Rainwater Harvesting:</h5>
          <p className="text-lg text-gray-700 mb-4">Capturing rainwater to supplement industrial water requirements.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Policy Compliance and Monitoring:</h5>
          <p className="text-lg text-gray-700 mb-4">Adhering to water usage regulations and employing sensors to monitor consumption.</p>
        </div>

        <img src="src/assets/img5.jpeg" alt="Water in Industry" className="h-[200px]" />
        
        <h3 className="text-2xl text-blue-500 mt-8 mb-4">Examples of Water-Intensive Industries</h3>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Energy Production:</h5>
          <p className="text-lg text-gray-700 mb-4">Power plants for steam generation and cooling.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Food and Beverage:</h5>
          <p className="text-lg text-gray-700 mb-4">High water demand for processing and cleaning.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Chemical Industry:</h5>
          <p className="text-lg text-gray-700 mb-4">Utilizes water for reactions, dilutions, and cooling.</p>
        </div>

        <div className="mb-6">
          <h5 className="text-xl text-blue-700 mb-2">Mining and Metal Industries:</h5>
          <p className="text-lg text-gray-700 mb-4">Requires water for ore processing and dust suppression.</p>
        </div>

        <h3 className="text-2xl text-blue-500 mt-8 mb-4">Role of Innovation</h3>
        <p className="text-lg text-gray-700 mb-4">Smart water systems, IoT, and AI are being deployed to monitor and optimize water usage.</p>
        <p className="text-lg text-gray-700">Research into alternative cooling methods and zero-liquid discharge systems is gaining traction.</p>
      </div>
    </div>
  );
};

export default Industry;
