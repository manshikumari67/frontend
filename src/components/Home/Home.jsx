
import {  NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <aside className="relative overflow-hidden text-black max-h-full h-[600px] object-cover  ">
                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 h-[-400px">
                     <div className="max-w-xl sm:mt-20 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                         <h2 className="text-4xl font-bold sm:text-4xl text-gray mt-36">
                         Water is a precious gift of nature. We should not waste it.
                             <span className="hidden sm:block text-4xl"></span>
                         </h2>

                         
                         <NavLink
                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 mr-5"                           
                              to="/content">
                                Content
                         </NavLink>
                         <NavLink
                             className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75 "                           
                              to="/Add Question">
                             
                             Ask a Question
                         </NavLink>
                        
                    </div>
                 </div>
                    
                <div className="absolute inset-0 w-full  h-[500px] object-cover">
                     <img className="w-full" src="src/assets/home 1.webp" alt="image1" />
                </div>
             </aside>

             <div className=' h-4'></div>


             <aside className="relative overflow-hidden text-black  h-[480px] object-cover ">
                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                     <div className="max-w-md  text-right  sm:text-left sm:ml-auto mr-1 mt-2 ">
                         <h5 className="text-xl  sm:text-xl text-gray ">
                         Water scarcity is a critical global issue that occurs when the demand for water exceeds the available supply in a given region. It can result from both physical scarcity (where there is not enough water to meet the needs of people) and economic scarcity (where financial or infrastructural barriers prevent access to water, even if it's locally available). There are various factors contributing to water scarcity.
                             <span className="hidden sm:block text-4xl"></span>
                         </h5>

                    </div>
                 </div>

                <div className="absolute inset-0 w-[750px]  h-[570px] object-cover">
                     <img className="w-full" src="src/assets/home2.jpg" alt="image2" />
                </div>
             </aside>

             <div className=' mt-6 bg-black h-4'></div>

             <aside className="relative overflow-hidden text-black  h-[150px] object-cover  ">
                    <div className=" text-left sm:text-left sm:ml-auto max-w-screen-lg  mr-32 mt-10 ">
                         <h5 className="text-xl  sm:text-xl text-gray mt-[-10px] pb-3 mb-32 ">
                         Water scarcity is a pressing global challenge affecting billions of people, ecosystems, and economies. Understanding its causes, impacts, and solutions requires a multi-faceted approach that encompasses natural, social, and economic dimensions. Rapid population growth, urbanization, and industrial expansion have intensified the demand for water resources, while climate change has disrupted hydrological cycles, leading to prolonged droughts and erratic rainfall patterns.
                             <span className="hidden sm:block text-4xl"></span>
                         </h5>
                </div>
            </aside>

             <div className='mt-6 bg-black h-4'></div>

             <div className="grid  place-items-center  h-96">
                <img className=" w-[-350px] h-80 border-2" src="src/assets/bird.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-1xl py-10 font-medium">Water scarcity profoundly impacts bird populations by disrupting their habitats and food sources. The drying up of wetlands and water bodies deprives birds of essential nesting, feeding, and breeding grounds, while the decline in aquatic life reduces their food availability. Migration routes are disrupted as stopover points vanish, increasing energy demands and mortality. Birds face dehydration, heat stress, and intensified competition at limited water sources, making them more vulnerable to predation. </h1>

        <div className=' bg-black h-4'></div>


        <div className=' ml-40 w-[1000px] h-[500px] border-2'>
            <img className='  w-[2000px] h-[500px]' src="src/assets/map.webp" alt="" />
        </div>



        <div className=' bg-black h-4'></div>
          <div className="bg-gray-100">
  <header className="container mx-auto p-6 text-center">
    <h1 className="text-4xl font-semibold text-blue-600">Aquaveda</h1>
    <p className="text-lg text-gray-700 mt-2">Stay updated with the latest news on water management, conservation, and global water initiatives.</p>
  </header>

  <main className="container mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
      {/* News Card 1 */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover rounded-t-lg" src="src/assets/img12.png" alt="News 1" />
        <h3 className="bg-blue-600 text-white p-4 text-xl">What's Going on Around The World</h3>
        <ol className="p-4 text-gray-700">
          <li className="mb-4">
            <h4 className="font-semibold">Colorado River Challenges</h4>
            Stakeholders are grappling with water allocation as the Colorado River faces declining levels...
          </li>
          <li className="mb-4">
            <h4 className="font-semibold">California's Water Supply Concerns</h4>
            California is preparing for another potentially dry year in 2025...
          </li>
          <li className="mb-4">
            <h4 className="font-semibold">Shrinking Caucasus Glaciers</h4>
            A new report highlights the alarming rate of glacial shrinkage in the Caucasus region...
          </li>
          <li className="mb-4">
            <h4 className="font-semibold">Sinking Land in California’s Central Valley</h4>
            Research reveals that excessive groundwater extraction is causing parts of California...
          </li>
          <li>
            <h4 className="font-semibold">UN-Water Initiatives</h4>
            Global organizations are emphasizing integrated approaches to water management...
          </li>
        </ol>
      </div>

      {/* News Card 2 */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover rounded-t-lg" src="src/assets/img13.png" alt="News 2" />
        <h3 className="bg-blue-600 text-white p-4 text-xl">India's News</h3>
        <ol className="p-4 text-gray-700">
          <li className="mb-4">
            <h4 className="font-semibold">India Leads Global Water Management Efforts</h4>
            President Droupadi Murmu highlighted India's strides in sustainable water...
          </li>
          <li className="mb-4">
            <h4 className="font-semibold">India Water Week 2024 Highlights Solutions for Water Security</h4>
            The India Water Week 2024 focused on addressing the country's severe water crisis...
          </li>
          <li className="mb-4">
            <h4 className="font-semibold">Groundwater Management Challenges</h4>
            Reports from the Central Ground Water Board show that 14% of groundwater assessment units...
          </li>
          <li>
            <h4 className="font-semibold">Community Participation as a Key to Sustainable Water Use</h4>
            Initiatives in states like Rajasthan and Madhya Pradesh involve training...
          </li>
        </ol>
      </div>

      {/* News Card 3 */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover rounded-t-lg" src="src/assets/img14.jpg" alt="News 3" />
        <h3 className="bg-blue-600 text-white p-4 text-xl">Campaigns Around</h3>
        <ol className="p-4 text-gray-700">
          <li className="mb-4">
            <h4 className="font-semibold">Catch the Rain Campaign 2024</h4>
            Organized under the Jal Shakti Abhiyan, this campaign focuses on the theme "Nari Shakti se Jal Shakti"...
          </li>
          <li className="mb-4">
            <h4 className="font-semibold">Jal Jeevan Mission</h4>
            Aims to provide functional tap water connections to every rural household...
          </li>
          <li className="mb-4">
            <h4 className="font-semibold">Mission Amrit Sarovar</h4>
            Launched to develop and rejuvenate 75 water bodies in each district of the country...
          </li>
          <li>
            <h4 className="font-semibold">Namami Gange Program</h4>
            Focuses on the rejuvenation of the Ganga River and its tributaries...
          </li>
        </ol>
      </div>

      {/* News Card 4 */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-md">
        <img className="w-full h-48 object-cover rounded-t-lg" src="src/assets/images.jpg" alt="News 4" />
        <h3 className="bg-blue-600 text-white p-4 text-xl">Innovative Technologies</h3>
        <ol className="p-4 text-gray-700">
          <li className="mb-4"><h4 className="font-semibold">Desalination Plants:</h4> Advances in converting seawater to drinkable water.</li>
          <li className="mb-4"><h4 className="font-semibold">Smart Irrigation Systems:</h4> IoT-enabled systems that optimize water use in agriculture.</li>
          <li className="mb-4"><h4 className="font-semibold">Artificial Intelligence in Water Monitoring:</h4> AI and sensors for real-time water quality and usage analysis.</li>
          <li className="mb-4"><h4 className="font-semibold">Water Recycling Innovations:</h4> Technologies for recycling wastewater for industrial and agricultural use.</li>
          <li><h4 className="font-semibold">Rainwater Harvesting Technologies:</h4> Modern systems for efficient storage and usage of rainwater.</li>
        </ol>
      </div>
    </div>
  </main>
</div>
        
       
        



           
             
        </div>
    );
}