


const Content = () => {
  return (
     
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Water Management</h1>

      {/* Topic 1: Water Mangement */}
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="w-3/5 text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold">Water Management</h3>
          <p className="mt-4">
          Water management due to water scarcity focuses on implementing strategies, technologies, and policies to ensure the sustainable use of available water resources in areas facing limited or diminishing water supplies. Water scarcity can arise due to various factors, including natural climate conditions, population growth, increased water demand, and inefficient water use.
          </p>
          <a href="test.html" className="mt-4 text-blue-600 font-semibold hover:underline">Know More</a>
        </div>
        <img src="src/assets/waterMangement.jpg" alt="Wastewater Treatment" className="w-2/5 rounded-lg" />
      </div>

      {/* Topic 2: Recycling and Reuse */}
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="w-3/5 text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold">Recycling and Reuse</h3>
          <p className="mt-4">
            Recycling and reusing wastewater reduces the need for freshwater, conserves resources, and minimizes environmental impact. It is an essential step toward sustainability in water management.
          </p>
          <a href="recycling-reuse.html" className="mt-4 text-blue-600 font-semibold hover:underline">Know More</a>
        </div>
        <img src="src/assets/reuse.jpg" alt="Recycling and Reuse" className="w-2/5 rounded-lg" />
      </div>

      {/* Topic 3: Water  in Agriculture */}
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="w-3/5 text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold">Water in Agriculture</h3>
          <p className="mt-4">
          Water is indispensable in agriculture, supporting everything from crop irrigation to soil health and plant growth. Effective water management is key to ensuring food production, conserving water resources, and adapting to environmental challenges like climate change.
          </p>
          <a href="sludge-management.html" className="mt-4 text-blue-600 font-semibold hover:underline">Know More</a>
        </div>
        <img src="src/assets/about1.webp" alt="Sludge Management" className="w-2/5 rounded-lg" />
      </div>

      {/* Topic 4: Water in Industry*/}
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="w-3/5 text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold">Water in Industry</h3>
          <p className="mt-4">
          water scarcity poses significant challenges to industries, including operational disruptions, increased costs, regulatory pressures, and environmental impacts. To mitigate these issues, industries are increasingly focusing on water efficiency, recycling, and sustainable practices to conserve this precious resource.
          </p>
          <a href="wastewater-policies.html" className="mt-4 text-blue-600 font-semibold hover:underline">Know More</a>
        </div>
        <img src="src/assets/industry.jpeg" alt="Wastewater Policies" className="w-2/5 rounded-lg" />
      </div>

      {/* Topic 5: Smart Cities and Hydroinformatics */}
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="w-3/5 text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold">Awareness Campaigns</h3>
          <p className="mt-4">
          An awareness campaign for water scarcity is a crucial initiative aimed at educating the public, businesses, and policymakers about the importance of water conservation and the growing challenges of water scarcity. The campaign seeks to encourage responsible water usage, promote sustainable practices, and raise awareness about the social, environmental, and economic impacts of water scarcity.
          </p>
          <a href="wastewater-policies.html" className="mt-4 text-blue-600 font-semibold hover:underline">Know More</a>
        </div>
        <img src="wastewater5.jpg" alt="Smart Cities and Hydroinformatics" className="w-2/5 rounded-lg" />
      </div>

      {/* Topic 6: Impact of Climate Change on Wastewater Systems */}
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="w-3/5 text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold"> Wastewater Systems</h3>
          <p className="mt-4">
          The wastewater system plays a crucial role in managing water resources, particularly in the context of water scarcity. Wastewater management involves the treatment and reuse of used water, which can help mitigate some of the challenges posed by water scarcity. 
          </p>
          <a href="wastewater-policies.html" className="mt-4 text-blue-600 font-semibold hover:underline">Know More</a>
        </div>
        <img src="wastewater6.jpg" alt="Impact of Climate Change" className="w-2/5 rounded-lg" />
      </div>

      {/* Topic 7: Cost of Wastewater Management */}
      <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="w-3/5 text-gray-700 text-lg">
          <h3 className="text-2xl font-semibold">Cost of Wastewater Management</h3>
          <p className="mt-4">
          The cost of water management systems can vary greatly depending on several factors, such as the scale of the system, the technology used, the region, and the specific needs of the area (e.g., water treatment, distribution, storage, or wastewater management).
          </p>
          <a href="wastewater-policies.html" className="mt-4 text-blue-600 font-semibold hover:underline">Know More</a>
        </div>
        <img src="wastewater7.jpg" alt="Cost of Wastewater Management" className="w-2/5 rounded-lg" />
      </div>

     
    </div>
 
  );
};

export default Content;
