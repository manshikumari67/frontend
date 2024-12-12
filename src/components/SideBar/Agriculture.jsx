const Agriculture = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      {/* Article */}
      <div className="bg-white p-8 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105">
        <img
          src="src/assets/img3.jpg"
          alt="Water in Agriculture"
          className="w-full rounded-xl mb-6 object-cover"
          style={{ height: '400px' }}
        />

        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Water in Agriculture</h2>

        <div className="space-y-6">
          {/* Introduction */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800">Water in Agriculture: Key Role and Conservation Techniques</h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Water is essential for agriculture, as it is the primary resource used to grow crops and sustain livestock.
              However, agriculture is also one of the largest consumers of freshwater globally, accounting for nearly
              70% of total water use. Efficient water management in agriculture is critical not only for ensuring food
              security but also for preserving water resources in the face of increasing population pressures and climate
              change.
            </p>
          </section>

          {/* Role of Water */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800">The Role of Water in Agriculture</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h5 className="text-lg font-medium text-blue-700">Irrigation</h5>
                <p className="text-gray-600 leading-relaxed">
                  Irrigation is the process of supplying water to crops to support their growth, especially in regions
                  where rainfall is insufficient.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-blue-700">Livestock Watering</h5>
                <p className="text-gray-600 leading-relaxed">
                  Water is also essential for livestock health and productivity. Animals need water for drinking,
                  cleaning, and sometimes cooling.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-blue-700">Soil Fertility</h5>
                <p className="text-gray-600 leading-relaxed">
                  Water helps transport nutrients from the soil to plant roots, aiding in the growth of healthy crops.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium text-blue-700">Supporting Agroecosystems</h5>
                <p className="text-gray-600 leading-relaxed">
                  Water plays a role in maintaining ecosystems that support biodiversity, like wetlands and floodplains.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800">Challenges of Water in Agriculture</h3>

            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong className="text-blue-700">Water Scarcity:</strong> Increasing demands for water have led to
                over-extraction of water sources, causing scarcity in many regions.
              </li>
              <li>
                <strong className="text-blue-700">Water Pollution:</strong> Agricultural runoff, often containing
                chemicals, can contaminate water sources, affecting quality and ecosystems.
              </li>
              <li>
                <strong className="text-blue-700">Climate Change:</strong> Climate change, such as droughts and erratic
                rainfall, worsens water scarcity and affects agricultural productivity.
              </li>
              <li>
                <strong className="text-blue-700">Inefficient Water Use:</strong> Traditional irrigation methods waste
                water through evaporation or runoff, making sustainable water management essential.
              </li>
            </ul>
          </section>

          {/* Techniques */}
          <section>
            <h3 className="text-xl font-semibold text-gray-800">Techniques for Efficient Water Use in Agriculture</h3>

            <div className="space-y-4 mt-4">
              <div className="bg-blue-50 p-4 rounded-lg shadow">
                <h5 className="text-lg font-medium text-blue-700">Drip Irrigation</h5>
                <p className="text-gray-600">
                  Delivers water directly to plant roots through a network of tubes and emitters, reducing water wastage.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg shadow">
                <h5 className="text-lg font-medium text-blue-700">Sprinkler Irrigation</h5>
                <p className="text-gray-600">
                  Sprinklers distribute water evenly over crops, mimicking rainfall and suitable for larger areas.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg shadow">
                <h5 className="text-lg font-medium text-blue-700">Rainwater Harvesting</h5>
                <p className="text-gray-600">
                  Collecting rainwater during wet periods to store it for later use in irrigation reduces dependence on
                  external sources.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg shadow">
                <h5 className="text-lg font-medium text-blue-700">Smart Irrigation Technologies</h5>
                <p className="text-gray-600">
                  Using sensors, weather forecasts, and automation ensures optimal irrigation schedules to prevent over-
                  or under-irrigation.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
