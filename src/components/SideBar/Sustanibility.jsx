import React from 'react'

function Sustanibility() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-green-700 text-white text-center py-5">
        <h1 className="text-3xl">Sustainability of Water Management Costs</h1>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">

        {/* Introduction Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-700">Introduction</h2>
          <p className="text-lg mt-4">
            When considering the sustainability of costs for water management, it's essential to focus on a combination of factors that ensure both financial feasibility and long-term viability. These factors will guide the development of cost-effective and sustainable water management practices.
          </p>
        </section>

        {/* Cost of Reuse and Recycling Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-700">1. Cost of Reuse and Recycling</h2>
          
          <img src="src/assets/sustain1.jpg" alt="Water Recycling Systems" className="mt-4 h-36 w-36 object-cover" />
          
          <p className="mt-4 text-lg"><strong>Initial Infrastructure:</strong> The cost of setting up water recycling facilities (such as treatment plants) and reuse systems (like greywater recycling or rainwater harvesting systems).</p>
          <p className="mt-4 text-lg"><strong>Operational Costs:</strong> Ongoing expenses for maintaining treatment facilities, energy costs, and labor.</p>
          <p className="mt-4 text-lg"><strong>Economic Benefits:</strong> Reduced demand for fresh water, which can lower long-term water procurement costs. Wastewater treatment and reuse can also lead to reduced environmental costs, such as less water pollution.</p>
        </section>

        {/* Long-Term Management Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-700">2. Long-Term Management</h2>
          
          <img src="src/assets/sustain2.jpg" alt="Infrastructure Durability" className="mt-4 h-64 w-full object-cover" />
          
          <p className="mt-4 text-lg"><strong>Infrastructure Durability:</strong> Investment in long-lasting infrastructure that requires less frequent repair and replacement can minimize costs over time.</p>
          <p className="mt-4 text-lg"><strong>Monitoring and Maintenance:</strong> Ensuring the water management systems are continually monitored and maintained, which requires a strategic budget to avoid unexpected expenses.</p>
          <p className="mt-4 text-lg"><strong>Regulatory Compliance:</strong> Long-term management should consider regulatory frameworks, as keeping up with legal requirements can help avoid fines and ensure systems remain operational.</p>
        </section>

        {/* How It Will Be Sustainable Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-700">3. How It Will Be Sustainable</h2>
          <div className="flex flex-wrap justify-between gap-5">
            <div className="w-full md:w-1/2">
              <p className="mt-4 text-lg"><strong>Integration with Local Ecosystems:</strong> The management approach should be in harmony with the local environment to avoid overexploitation or depletion of water sources.</p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="src/assets/sustain3.jpg" alt="Ecosystem Integration" className="mt-4 h-64 w-full object-cover rounded-lg" />
              <p className="mt-4 text-lg"><strong>Adoption of Technology:</strong> Embracing advanced technologies like IoT sensors for efficient water use, automation, and AI for optimizing distribution and treatment can reduce costs in the long run.</p>
              <p className="mt-4 text-lg"><strong>Community Engagement:</strong> Involving local communities in water conservation efforts, awareness campaigns, and incentivizing responsible water usage can ensure consistent participation, reducing waste and inefficiencies.</p>
            </div>
          </div>
        </section>

        {/* Methods to Maintain Sustainability Section */}
        <section className="mb-10">
          <h2 className="text-2xl text-green-700">4. Methods to Maintain Sustainability</h2>
          <p className="mt-4 text-lg"><strong>Demand Management:</strong> Encourage water-saving behaviors, implement tiered pricing for water use, and promote conservation to reduce overall demand.</p>
          <p className="mt-4 text-lg"><strong>Energy Efficiency:</strong> Utilize energy-efficient technologies for water treatment and distribution. Solar-powered treatment plants or wind-assisted pumps can lower operational costs.</p>
          <p className="mt-4 text-lg"><strong>Circular Economy Principles:</strong> Emphasizing water reuse in industrial processes, agriculture, and other sectors to close the loop and minimize fresh water consumption.</p>
          <p className="mt-4 text-lg"><strong>Investment in Research and Development:</strong> Continuing to explore innovative, cost-effective solutions for water management, such as membrane filtration technologies or decentralized treatment systems, can lead to cost savings and improved sustainability.</p>
          <br />
          <h2 className="text-2xl text-green-700 mt-10">TABULAR REPRESENTATION OF THE DATA FOR SUSTAINABILITY</h2>
          
          {/* Images with improved scaling */}
          <div className="mt-4">
            <img 
              src="src/assets/sustain4.jpg" 
              alt="Tabular Data 1" 
              className="w-full max-w-full object-contain h-auto" 
            />
          </div>
          <div className="mt-4">
            <img 
              src="src/assets/sustain5.jpg" 
              alt="Tabular Data 2" 
              className="w-full max-w-full object-contain h-auto" 
            />
          </div>
        </section>

      </div>

    </div>
  )
}

export default Sustanibility
