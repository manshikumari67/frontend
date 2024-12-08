import React from "react";

const Management = () => {
  return (
    <main className="p-5 bg-gray-100 min-h-screen">
      <div id="management" className="bg-white rounded-lg p-5 shadow-md flex">
        <img
          src="src/assets/img1.png"
          alt="Water Management"
          className=" mr-5 w-20 h-11 rounded-lg"
        />
        {/* <h2 className="text-xl text-blue-500 font-bold">Water Management</h2> */}
        <div className="clear-both">
          <h3 className="text-lg font-semibold mt-3">
            Article: The Importance of Water Management
          </h3>
          <p className="text-justify">
            Water is one of the most essential resources on Earth, sustaining
            life and supporting ecosystems. However, with increasing population,
            industrialization, and climate change, water resources are under
            immense pressure. Effective water management is the key to ensuring
            a sustainable future for all.
          </p>
          <h3 className="text-lg font-semibold mt-5">What is Water Management?</h3>
          <p className="text-justify">
            Water management is the process of planning, distributing, and
            optimizing water resources to meet the needs of the environment,
            society, and economy. It includes activities such as:
          </p>
          <ul className="list-disc list-inside">
            <li>Ensuring clean drinking water for communities.</li>
            <li>Managing wastewater to prevent pollution.</li>
            <li>Allocating water for agriculture and industries.</li>
            <li>Protecting water bodies and aquatic ecosystems.</li>
          </ul>
          <h3 className="text-lg font-semibold mt-5">
            Why Is Water Management Important?
          </h3>
          <h5 className="font-bold">Combatting Water Scarcity</h5>
          <p className="text-justify">
            Over 2 billion people worldwide face water scarcity. Proper
            management ensures equitable distribution and reduces wastage.
          </p>
          <h5 className="font-bold">Supporting Agriculture</h5>
          <p className="text-justify">
            Agriculture consumes about 70% of the world's freshwater. Techniques
            like drip irrigation and rainwater harvesting can improve efficiency
            and conserve water.
          </p>
          <h5 className="font-bold">Preventing Pollution</h5>
          <p className="text-justify">
            Untreated wastewater and industrial runoff pollute rivers and oceans.
            Effective water treatment systems are critical to maintaining clean
            water supplies.
          </p>
          <h5 className="font-bold">Mitigating Climate Change</h5>
          <p className="text-justify">
            Changing rainfall patterns and extreme weather events threaten water
            availability. Water management helps build resilience to these
            challenges.
          </p>
          <h5 className="font-bold">Preserving Ecosystems</h5>
          <p className="text-justify">
            Rivers, lakes, and wetlands are home to countless species.
            Sustainable practices ensure their survival alongside human needs.
          </p>
          <h3 className="text-lg font-semibold mt-5">
            Techniques for Effective Water Management:
          </h3>
          <ul className="list-disc list-inside">
            <li>Rainwater Harvesting: Collecting and storing rainwater for later use.</li>
            <li>
              Recycling and Reuse: Treating wastewater for reuse in irrigation,
              industry, or even household purposes.
            </li>
            <li>
              Efficient Irrigation: Drip and sprinkler irrigation deliver water
              directly to plant roots, reducing water loss through evaporation or
              runoff.
            </li>
            <li>
              Public Awareness Campaigns: Educating communities about the
              importance of water conservation.
            </li>
            <li>
              Smart Water Systems: Technologies like IoT sensors and AI help
              monitor and optimize water usage in real-time.
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-5">
            The Role of Individuals in Water Management:
          </h3>
          <ul className="list-disc list-inside">
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
