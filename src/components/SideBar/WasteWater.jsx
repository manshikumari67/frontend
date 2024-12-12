import React from 'react'

function WasteWater() {
  return (
        <div className="bg-gray-100 min-h-screen py-6 px-4">
          <header className="bg-gray-800 text-white py-4 text-center">
            <h1 className="text-3xl mb-2">Water Management Overview</h1>
            <nav>
              <ul className="flex justify-center">
                <li className="mr-6">
                  <a href="scarcity.html" className="hover:text-yellow-400">Home</a>
                </li>
              </ul>
            </nav>
          </header>
    
          <section className="bg-white shadow-lg p-6 mt-8 rounded-lg">
            <div className="text-center mb-6">
              <img src="src/assets/waste1.jpg" alt="Water management overview" className="w-full h-96 object-cover rounded-lg" />
            </div>
    
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cost of Water Management in Agriculture</h2>
            <p className="text-lg text-gray-700 mb-6">
              The cost of water management in agriculture varies widely depending on the methods, technologies, and regional factors. It encompasses both direct expenses and indirect impacts. Here are key aspects to consider:
            </p>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Factors Affecting Costs</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-6">
              <li><strong>Infrastructure:</strong> Building and maintaining irrigation systems, dams, or water storage facilities.</li>
              <li><strong>Technology:</strong> Adoption of advanced systems like drip irrigation, IoT sensors, and water purification systems.</li>
              <li><strong>Geography:</strong> The availability of natural water resources impacts transportation and treatment costs.</li>
              <li><strong>Labor:</strong> Costs associated with installing, monitoring, and maintaining water management systems.</li>
              <li><strong>Energy:</strong> Pumping, distributing, or treating water consumes significant energy, especially in arid regions.</li>
            </ul>
    
            <div className="text-center mb-6">
              <img src="src/assets/waste2.jpg" alt="Middle illustration of water management" className="w-full h-96 object-cover rounded-lg" />
            </div>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Cost Breakdown</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-6">
              <li><strong>Traditional Methods:</strong> Flood irrigation is inexpensive to set up but inefficient, leading to water waste and higher long-term costs.</li>
              <li><strong>Modern Systems:</strong>
                <ul className="list-inside pl-4 space-y-2">
                  <li><strong>Drip Irrigation:</strong> $500–$1,200 per acre to install, with ongoing maintenance costs.</li>
                  <li><strong>Sprinkler Systems:</strong> $1,500–$2,500 per acre, depending on system sophistication.</li>
                </ul>
              </li>
              <li><strong>Water Harvesting and Storage:</strong> Rainwater harvesting systems cost $1,000–$5,000 for small setups, while larger-scale reservoirs can cost millions.</li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Economic Impacts</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-6">
              <li><strong>Crop Yields:</strong> Proper water management increases crop productivity, offsetting initial investments.</li>
              <li><strong>Water Pricing:</strong> In areas where water is metered or privatized, farmers bear additional recurring costs.</li>
              <li><strong>Subsidies:</strong> In some countries, governments provide subsidies to reduce farmers' expenses on water infrastructure.</li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Hidden Costs</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-6">
              <li><strong>Environmental Damage:</strong> Poor water management can lead to soil salinization or groundwater depletion, which have long-term remediation costs.</li>
              <li><strong>Maintenance:</strong> Over time, aging infrastructure and clogged systems increase repair expenses.</li>
              <li><strong>Climate Adaptation:</strong> Adjusting systems to handle extreme weather events or droughts adds to overall costs.</li>
            </ul>
    
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Strategies to Reduce Costs</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-6">
              <li><strong>Efficient Systems:</strong> Investing in technologies like drip irrigation reduces water waste and operating costs.</li>
              <li><strong>Renewable Energy:</strong> Solar or wind-powered pumps lower energy expenses.</li>
              <li><strong>Government Programs:</strong> Accessing grants or subsidies for sustainable water projects.</li>
              <li><strong>Community Solutions:</strong> Cooperative water-sharing agreements reduce individual farmer burdens.</li>
            </ul>
    
            <p className="text-lg text-gray-700 mb-6">
              Effective water management requires balancing upfront investment with long-term benefits. While modern systems might seem costly, their efficiency and sustainability often lead to significant savings over time.
            </p>
    
            <div className="flex justify-between mb-6">
              <img src="src/assets/waste3.jpg" alt="Treatment process 1" className="w-1/3 h-72 object-cover rounded-lg shadow-lg" />
              <img src="src/assets/waste4.jpg" alt="Treatment process 2" className="w-1/3 h-72 object-cover rounded-lg shadow-lg" />
              <img src="src/assets/waste5.jpg" alt="Treatment process 3" className="w-1/3 h-72 object-cover rounded-lg shadow-lg" />
            </div>
          </section>
    
          <footer className="text-center text-gray-500 mt-8 py-4">
            <p>&copy; 2024 Water Management Overview. All rights reserved.</p>
          </footer>
        </div>
   
    
  )
}

export default WasteWater
