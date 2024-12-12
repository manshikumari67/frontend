import React from 'react'

function Reuse() {
  return (
    <div className="font-sans text-gray-800">
    <header className="bg-blue-700 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">Water Recycling: A Sustainable Solution</h1>
      <p className="mt-2 text-lg">Preserving Earth's Most Precious Resource</p>
    </header>

    <nav className="bg-blue-600 text-white py-4 flex justify-center space-x-6">
      <a href="#importance" className="hover:underline">Importance</a>
      <a href="#methods" className="hover:underline">Methods</a>
      <a href="#benefits" className="hover:underline">Benefits</a>
      <a href="#examples" className="hover:underline">Examples</a>
      <a href="#challenges" className="hover:underline">Challenges</a>
      <a href="#conclusion" className="hover:underline">Conclusion</a>
    </nav>

    <section className="bg-cover bg-center text-center py-20" style={{ backgroundImage: "url('https://www.example.com/water-banner.jpg')" }}>
      <h2 className="text-3xl font-semibold text-black">What is Water Recycling?</h2>
      <p className="mt-4 text-lg max-w-4xl mx-auto text-black">
        Water recycling, also known as water reclamation, is the process of treating used or wastewater to make it reusable. This process can involve removing contaminants from water to make it suitable for various purposes such as irrigation, industrial use, or even drinking water in some cases. The main goal of water recycling is to conserve freshwater resources, reduce environmental pollution, and create a sustainable solution to increasing water scarcity.
      </p>
    </section>

    <section id="importance" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">The Importance of Water Recycling</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
            <ul className="list-disc pl-6 lg:pl-0 lg:w-1/2">
              <li className="mb-4"><strong>Water Scarcity:</strong> Recycling water helps ensure a reliable source of water for various needs as populations grow and freshwater resources become limited.</li>
              <li className="mb-4"><strong>Pollution Reduction:</strong> Reduces environmental impact by limiting wastewater discharge into oceans, rivers, and lakes.</li>
              <li className="mb-4"><strong>Climate Change Adaptation:</strong> Provides a backup water supply during times of shortage.</li>
              <li className="mb-4"><strong>Conservation of Resources:</strong> Ensures efficient use of existing water sources.</li>
            </ul>
            <img src="src/assets/reuse1.png" alt="Water conservation" className="mt-8 lg:mt-0 w-96 h-auto rounded-lg pl-16" />
          </div>
        </div>
      </section>

      <section id="methods" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Methods of Water Recycling</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">1. Greywater Recycling</h3>
              <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
                <img src="src/assets/Working_of_a_Grey_Water_system.jpg" alt="Greywater recycling" className="w-64 h-auto rounded-lg shadow" />
                <p className="mt-4 lg:mt-0 text-gray-700">
                  Greywater is wastewater from sinks, showers, and washing machines. It is treated for reuse in irrigation and toilet flushing, conserving water and reducing pollution. <a href="https://www.netsolwater.com/working-of-a-grey-water-system.php?blog=1275" className="text-blue-600 underline">Learn more</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">2. Advanced Wastewater Treatment</h3>
              <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
                <p className="text-gray-700">
                  Advanced treatment involves biological, chemical, and physical processes to remove contaminants, making water suitable for various uses, including potable water. <a href="https://www.wwdmag.com/what-is-articles/article/10939699/what-is-advanced-wastewater-treatment" className="text-blue-600 underline">Learn more</a>
                </p>
                <img src="src/assets/wastewater-purification-isometric-composition-square_1284-25006.jpg" alt="Advanced wastewater treatment" className="w-64 h-auto rounded-lg shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Benefits of Water Recycling</h2>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
            <img src="src/assets/save-water-ecology_24877-50048.avif" alt="Benefits" className="w-96 h-auto rounded-lg shadow-lg" />
            <ul className="list-disc pl-6 lg:pl-0 lg:w-1/2">
              <li className="mb-4"><strong>Reduction in Freshwater Consumption:</strong> Reduces demand on natural resources.</li>
              <li className="mb-4"><strong>Sustainability:</strong> Provides a continuous water source in arid regions.</li>
              <li className="mb-4"><strong>Cost Savings:</strong> Industries save water costs by using recycled water.</li>
              <li className="mb-4"><strong>Environmental Protection:</strong> Minimizes pollution and protects aquatic life.</li>
              <li className="mb-4"><strong>Energy Conservation:</strong> Reduces energy use for water extraction.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="examples" className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-center mb-8">Real-Life Examples of Water Recycling</h2>
                    <p className="text-center mb-4">Many cities and industries worldwide have adopted water recycling practices:</p>
                    <ul className="space-y-4 text-lg">
                        <li><strong>Singapore:</strong> Singapore’s "NEWater" program treats and recycles wastewater to produce high-quality potable water, which is used for drinking, industrial processes, and non-potable purposes.</li>
                        <li><strong>California, USA:</strong> California has a long history of using recycled water, especially in agriculture. The state uses recycled water extensively for irrigation and industrial cooling to address drought conditions.</li>
                        <li><strong>Australia:</strong> Cities like Perth and Melbourne have adopted large-scale water recycling systems that treat wastewater for use in agriculture, landscaping, and industrial applications.</li>
                        <li><strong>Israel:</strong> Israel is a world leader in water recycling, with a significant percentage of its agricultural water coming from recycled wastewater. The country also uses innovative desalination technologies combined with recycling efforts.</li>
                    </ul>
                </div>
            </section>

            <section id="challenges" className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-center mb-8">Challenges of Water Recycling</h2>
                    <p className="text-center mb-4">Despite its many benefits, water recycling also faces several challenges:</p>
                    <ul className="space-y-4 text-lg">
                        <li><strong>High Initial Costs:</strong> The infrastructure required for water treatment and recycling can be expensive, particularly for advanced treatment systems. Setting up water recycling infrastructure, such as treatment plants and distribution systems, requires significant capital investment. While long-term savings are realized, the initial costs can be a challenge for many communities.</li>
                        <li><strong>Public Perception:</strong> People may be hesitant to accept recycled water, especially for drinking purposes, due to concerns about safety and quality. One of the biggest barriers to the widespread adoption of water recycling is the public’s perception of recycled water, especially when it is treated to be potable. Many people still associate recycled water with wastewater, making it difficult to gain acceptance.</li>
                        <li><strong>Energy Consumption:</strong> Some water recycling processes, particularly advanced treatment, can be energy-intensive, which may reduce their environmental benefits if not powered by renewable energy.</li>
                        <li><strong>Contaminants:</strong> Despite advanced filtration, some chemicals or pathogens may remain in recycled water, requiring continuous monitoring and improvement of treatment technologies.</li>
                        <li><strong>Technical Challenges:</strong> Effective and reliable treatment processes need to be put in place, and these can be complex and costly. For instance, the water must be treated to a very high standard before it can be safely used for potable purposes.</li>
                    </ul>
                </div>
            </section>

             <section id="conclusion" className="py-12 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-semibold mb-6">Conclusion</h2>
                    <p className="text-lg mb-6">Water recycling is no longer an option but a necessity for sustainable development. By adopting innovative recycling methods and promoting awareness, we can ensure a secure water future for generations to come. Let's take steps today to make water recycling a global priority.</p>

                </div>
            </section>  


    </div>

  )
}

export default Reuse
