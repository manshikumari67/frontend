import React from 'react'

function Soil() {
  return (
 
    <div className="scroll-smooth">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-green-700 text-white py-5 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-green-300">
            Water and Soil: A Vital Relationship
          </h1>
          <p className="text-lg">Understanding the Impact of Water on Soil Health</p>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-gray-800 py-3 shadow-md">
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="#importance"
              className="text-white hover:text-green-500 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Importance
            </a>
          </li>
          <li>
            <a
              href="#effects"
              className="text-white hover:text-green-500 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Effects
            </a>
          </li>
          <li>
            <a
              href="#solutions"
              className="text-white hover:text-green-500 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Soil Watering
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="text-white hover:text-green-500 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bg-green-500 after:left-0 after:bottom-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Resources
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* Importance Section */}
        <section id="importance" className="bg-white shadow-md py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-700 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
              The Importance of Water for Soil Health
            </h2>
            <p className="text-gray-700 leading-relaxed">
            Water plays a crucial role in maintaining soil health by facilitating nutrient absorption, enhancing soil structure, and supporting microbial life. However, water scarcity can lead to soil degradation and reduced fertility.Water plays a critical role in maintaining soil health and ensuring the proper functioning of ecosystems. Here are some key aspects of how water is important for soil health: 
            </p>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-green-600">1. Soil Structure and Porosity:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Water helps to bind soil particles together, improving soil structure. Well-structured soil has better porosity, allowing air to circulate and roots to grow.</li>
                  <li>Proper water management ensures good drainage and prevents soil compaction , which can hinder root growth and reduce soil fertility.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-600">2. Nutrient Availability:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Water is essential for dissolving and transporting nutrients in the soil. It helps nutrients to be absorbed by plant roots effectively.</li>
                  <li>When soil is either too dry or too wet, nutrient uptake can be impaired, leading to poor plant growth.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-600">3. Erosion Control:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Water, when managed properly, can help prevent soil erosion. When there is too little water, soil particles can be blown away by the wind; when too much water is present, soil can be washed away by runoff.</li>
                  <li>Proper irrigation and rainwater management prevent erosion, protecting the soil from degradation.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Effects Section */}
        <section id="effects" className="bg-gray-100 shadow-md py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-700 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
              Effects of Water on Soil
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cards */}
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-green-600 mb-2">Soil Erosion</h3>
                <p className="text-gray-700">
                Insufficient water or excessive runoff can lead to soil erosion, where the topsoil is washed away, resulting in reduced agricultural productivity.In this process, the soil particles are loosened or washed away in the valleys, oceans, rivers, streams or far away lands. This has been worsening due to human activities such as agriculture and deforestation.
                </p>
                <a
                  href="https://byjus.com/biology/soil-erosion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline"
                >
                  Learn more
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-green-600 mb-2">Soil Compaction</h3>
                <p className="text-gray-700">
                Excessive irrigation or flooding can cause soil particles to compact, reducing aeration and water infiltration.Soil compaction happens when the soil particles are pressed together too tightly, making it harder for air, water, and roots to move through the soil. This usually happens when the soil is compressed by heavy machinery, animals walking on it, or excessive foot traffic.

                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Soil_compaction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline"
                >
                  Learn more
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold text-green-600 mb-2">Salinization</h3>
                <p className="text-gray-700">
                Over-irrigation and poor drainage can lead to the accumulation of salts in the soil, harming plant growth.Salinization of soil is an excessive accumulation of water-soluble salts. Typically, it is table salt NaCl. The list is far more extensive and includes various compounds of sodium, potassium, calcium, magnesium, sulfates, chlorides, carbohydrates, and bicarbonates.

                </p>
                <a
                  href="https://eos.com/blog/soil-salinization/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="bg-white shadow-md py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-700 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
              How Different Soils Use Water Differently
            </h2>
            <div className="overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-600">1. Sandy Soil</h4>
                <ul className="list-disc list-inside text-gray-700">
                <li><strong>Water Retention:</strong>Low. Sandy soil has large particles, which allows water to drain quickly.</li>
                <li><strong>Water Use: </strong>Sandy soil doesn't hold moisture for long, so plants in sandy soil may require more frequent irrigation.</li>
                <li><strong>Ideal for:</strong> Plants that thrive in well-drained conditions (e.g., cacti, succulents).</li>
                 <br></br>
                <h4>Data :</h4>
                  <ul>
                    <li><strong>Water retention rate:</strong> ~10-15%</li>
                    <li><strong>Evaporation rate:</strong> High</li>
                    <li><strong>Irrigation frequency:</strong> High</li>
                  </ul>

            </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-600">2. Clay Soil</h4>
                <ul className="list-disc list-inside text-gray-700">
                <li><strong>Water Retention:</strong>High. Clay particles are fine and tightly packed, which allows it to hold water well.</li>
                    <li><strong>Water Use: </strong>Clay soil can become waterlogged if not properly drained, reducing the availability of oxygen for plants.
                    </li>
                    <li><strong>Ideal for:</strong>  Plants that require moisture retention (e.g., rice, water lilies).</li>
                     <br></br>
                     <h4>Data :</h4>
                  <ul>
                    <li><strong>Water retention rate:</strong> ~30-40%</li>
                    <li><strong>Evaporation rate:</strong> Low</li>
                    <li><strong>Irrigation frequency:</strong> Low (but drainage may be needed)</li>
                  </ul>

                </ul>
               
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-600">3. Loamy Soil</h4>
                <ul className="list-disc list-inside text-gray-700">
                <li><strong>Water Retention:</strong> Moderate. Loamy soil is a balanced mixture of sand, silt, and clay, providing optimal water retention without drainage issues.</li>
                    <li><strong>Water Use: </strong> Loam is ideal for most plants as it offers good moisture retention, but still allows for drainage.
                    </li>
                    <li><strong>Ideal for:</strong>  A wide range of plants (e.g., vegetables, flowers).</li>
                       <br></br>
                        
                  <h4>Data :</h4>
                  <ul>
                    <li><strong>Water retention rate:</strong> ~20-30%</li>
                    <li><strong>Evaporation rate:</strong> Moderate</li>
                    <li><strong>Irrigation frequency:</strong> Moderate</li>
                  </ul>


                </ul>
              </div>


              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-600">4. Peaty Soil</h4>
                <ul className="list-disc list-inside text-gray-700">
                <li><strong>Water Retention:</strong>  Very High. Peaty soil has high organic content, which helps it hold water very well.</li>
                    <li><strong>Water Use: </strong> While it can retain a lot of water, it may require more careful management to prevent waterlogging.
                    </li>
                    <li><strong>Ideal for:</strong>  Plants that require moist, acidic conditions (e.g., cranberries, blueberries).</li>

                       <br></br>
                        
                       <h4>Data :</h4>
                  <ul>
                    <li><strong>Water retention rate:</strong> ~20-30%</li>
                    <li><strong>Evaporation rate:</strong> Moderate</li>
                    <li><strong>Irrigation frequency:</strong> Moderate</li>
                  </ul>



                </ul>
              </div>


            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="bg-gray-100 shadow-md py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-700 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
              Additional Resources
            </h2>
            <p className="text-gray-700">
              For more information, visit{' '}
              <a
                href="https://soilhealth.ucdavis.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline"
              >
                UC Davis Soil Health
              </a>{' '}
              or explore similar topics on our platform.
            </p>
          </div>
        </section>
      </main>

    </div>
 

 
  )
}

export default Soil;
