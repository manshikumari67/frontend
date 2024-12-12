import React from "react";

const Management = () => {
  return (
    <main className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <div id="management" className="bg-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row">
        <img
          src="src/assets/img1.png"
          alt="Water Management"
          className="mr-6 w-60 h-60 rounded-2xl object-cover mb-4 md:mb-0"
        />
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Article: The Importance of Water Management
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed mb-4">
            Water is one of the most essential resources on Earth, sustaining life and supporting ecosystems. However, with increasing population, industrialization, and climate change, water resources are under immense pressure. Effective water management is the key to ensuring a sustainable future for all.
          </p>

          <h3 className="text-xl font-semibold text-blue-500 mt-6 mb-3">
            What is Water Management?
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed mb-3">
            Water management is the process of planning, distributing, and optimizing water resources to meet the needs of the environment, society, and economy. It includes activities such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ensuring clean drinking water for communities.</li>
            <li>Managing wastewater to prevent pollution.</li>
            <li>Allocating water for agriculture and industries.</li>
            <li>Protecting water bodies and aquatic ecosystems.</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-500 mt-6 mb-3">
            Why Is Water Management Important?
          </h3>
          <div className="space-y-4">
            <div>
              <h5 className="font-bold text-blue-600">Combatting Water Scarcity</h5>
              <p className="text-gray-700 text-justify leading-relaxed">
                Over 2 billion people worldwide face water scarcity. Proper management ensures equitable distribution and reduces wastage.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-blue-600">Supporting Agriculture</h5>
              <p className="text-gray-700 text-justify leading-relaxed">
                Agriculture consumes about 70% of the world's freshwater. Techniques like drip irrigation and rainwater harvesting can improve efficiency and conserve water.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-blue-600">Preventing Pollution</h5>
              <p className="text-gray-700 text-justify leading-relaxed">
                Untreated wastewater and industrial runoff pollute rivers and oceans. Effective water treatment systems are critical to maintaining clean water supplies.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-blue-600">Mitigating Climate Change</h5>
              <p className="text-gray-700 text-justify leading-relaxed">
                Changing rainfall patterns and extreme weather events threaten water availability. Water management helps build resilience to these challenges.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-blue-600">Preserving Ecosystems</h5>
              <p className="text-gray-700 text-justify leading-relaxed">
                Rivers, lakes, and wetlands are home to countless species. Sustainable practices ensure their survival alongside human needs.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-blue-500 mt-6 mb-3">
            Techniques for Effective Water Management:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Rainwater Harvesting: Collecting and storing rainwater for later use.</li>
            <li>Recycling and Reuse: Treating wastewater for reuse in irrigation, industry, or even household purposes.</li>
            <li>Efficient Irrigation: Drip and sprinkler irrigation deliver water directly to plant roots, reducing water loss through evaporation or runoff.</li>
            <li>Public Awareness Campaigns: Educating communities about the importance of water conservation.</li>
            <li>Smart Water Systems: Technologies like IoT sensors and AI help monitor and optimize water usage in real-time.</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-500 mt-6 mb-3">
            The Role of Individuals in Water Management:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Fix leaking taps and pipes to save water.</li>
            <li>Use water-efficient appliances like low-flow showerheads and toilets.</li>
            <li>Practice rainwater harvesting at home.</li>
            <li>Avoid disposing of harmful chemicals or waste in water bodies.</li>
            <li>Participate in community cleanup drives for local rivers and lakes.</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Management;
