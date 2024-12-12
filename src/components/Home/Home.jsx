
import { Link, NavLink } from 'react-router-dom';


export default function Home() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = (text) => {
    alert(`Navigating to ${text}`);
  };

    return (
        <div>
            <aside className="relative overflow-hidden text-black max-h-full h-[500px] object-cover  ">
                 <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 h-[-400px] ">
                     <div className="max-w-xl sm:mt-20 mt-80 space-y-8 text-center sm:text-left ">
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
                    
                 <div className="absolute inset-0 w-full h-[500px]">
                <video 
                     className="w-full h-full object-cover" 
                     src="src/assets/video1.mp4" 
                     autoPlay 
                     loop 
                     muted 
                     playsInline
                     ></video>
                    </div>
             </aside>


           
      {/* Title Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-semibold text-gray-800">Water Scarcity</h1>
        <h3 className="text-xl text-gray-600 mt-4">
          Addressing the growing lack of available water to meet children’s needs.
        </h3>
      </div>

      {/* Water Image */}
      <img
        src="src/assets/content1.webp"
        alt="Water Scarcity"
        className="w-full h-auto"
      />

      {/* Content Section */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
        <p className="text-lg text-justify text-gray-700">
          Even in countries with adequate water resources, water scarcity is not uncommon. 
          Although this may be due to a number of factors — collapsed infrastructure and distribution systems, 
          contamination, conflict, or poor management of water resources — it is clear that climate change, as well as human factors, 
          are increasingly denying children their right to safe water and sanitation.
        </p>
        <br />
        <p className="text-lg text-justify text-gray-700">
          Water scarcity limits access to safe water for drinking and for practicing basic hygiene at home, in schools, 
          and in healthcare facilities. When water is scarce, sewage systems can fail and the threat of contracting diseases like cholera surges. 
          Scarce water also becomes more expensive.
        </p>
        <br />
        <p className="text-lg text-justify text-gray-700">
          Water scarcity takes a greater toll on women and children because they are often the ones responsible for collecting it. 
          When water is further away, it requires more time to collect, which often means less time at school. 
          Particularly for girls, a shortage of water in schools impacts student enrolment, attendance, and performance. 
          Carrying water long distances is also an enormous physical burden and can expose children to safety risks and exploitation.
        </p>
      </div>

      {/* Water Image 2 */}
      <img
        src="/src/assets/content2.png"
        alt="Water Scarcity"
        className="w-full h-auto my-10"
      />

      {/* Key Facts Section */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Key Facts</h2>
        <ul className="list-disc pl-8 text-lg text-gray-700">
          <li>Four billion people — almost two thirds of the world’s population — experience severe water scarcity for at least one month each year.</li>
          <li>Over two billion people live in countries where water supply is inadequate.</li>
          <li>Half of the world’s population could be living in areas facing water scarcity by as early as 2025.</li>
          <li>Some 700 million people could be displaced by intense water scarcity by 2030.</li>
          <li>By 2040, roughly 1 in 4 children worldwide will be living in areas of extremely high water stress.</li>
        </ul>
      </div>
 

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



            <div className="bg-gradient-to-b from-blue-50 to-blue-200 h-80">
  <header className="text-center bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-8 shadow-lg">
    <h1 className="text-3xl font-semibold tracking-wide">Help Change Lives with Safe Water</h1>
  </header>

  <div className="flex justify-center gap-6 p-8 flex-wrap">
    <div
      className="bg-gradient-to-b from-blue-700 to-blue-800 text-white w-56 h-32 flex flex-col items-center justify-center rounded-lg shadow-xl text-center cursor-pointer transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl"
      onClick={() => handleCardClick('Donate Now')}
    >
      <i className="text-4xl mb-2 text-sky-200">&#128167;</i>
      <Link to="/donate" 
       onClick={scrollToTop}
      >
      <span className="font-bold tracking-wide">Donate Now</span>
      </Link>
    </div>
    <div
      className="bg-gradient-to-b from-blue-700 to-blue-800 text-white w-56 h-32 flex flex-col items-center justify-center rounded-lg shadow-xl text-center cursor-pointer transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl"
      onClick={() => handleCardClick('Give Monthly')}
    >
      <i className="text-4xl mb-2 text-sky-200">&#128197;</i>
      <Link to="/campaigns"
      onClick={scrollToTop}
      >
      <span className="font-bold tracking-wide">Awareness</span>
      </Link>
    </div>
    <div
      className="bg-gradient-to-b from-blue-700 to-blue-800 text-white w-56 h-32 flex flex-col items-center justify-center rounded-lg shadow-xl text-center cursor-pointer transform transition-all duration-300 hover:translate-y-[-10px] hover:shadow-2xl"
      onClick={() => handleCardClick('Get Involved')}
    >
      <i className="text-4xl mb-2 text-sky-200">&#128100;</i>
      <Link to="/management"
      onClick={scrollToTop}
      >
      <span className="font-bold tracking-wide">Management</span>
      </Link>
    </div>
  </div>
</div>


<div className="font-sans text-gray-800 bg-gray-100 p-5">
      <h1 className="text-center text-4xl text-blue-600 mb-6">
        Rainwater Harvesting for Schools in Chennai
      </h1>
      <p className="mb-6">
        In urban Chennai, frequent water shortages severely disrupted daily school activities. Many schools lacked reliable access to water for drinking, sanitation, and hygiene. Students often missed classes due to the unavailability of basic water supplies, impacting their education and well-being.
      </p>

      <h2 className="text-2xl text-blue-600 mb-4">Challenge:</h2>
      <p className="mb-6">
        In urban Chennai, frequent water shortages severely disrupted daily school activities. Many schools lacked reliable access to water for drinking, sanitation, and hygiene. Students often missed classes due to the unavailability of basic water supplies, impacting their education and well-being.
      </p>

      <h2 className="text-2xl text-blue-600 mb-4">Solution:</h2>
      <p className="mb-6">
        With the help of AquaVeda, schools discovered proven rainwater harvesting techniques shared by experts on the platform. Detailed guides, step-by-step tutorials, and community discussions provided schools with the knowledge they needed to implement these solutions effectively.
      </p>
      <p className="mb-6">
        The funding feature on AquaVeda enabled users to donate toward the installation of rainwater harvesting systems in these schools. Contributions came from concerned citizens, alumni, and local organizations who wanted to ensure sustainable water solutions for the next generation.
      </p>

      <img
        src="src/assets/real1.jpg"
        alt="Rainwater Harvesting System"
        className="mx-auto my-5 max-w-full h-72 rounded-lg"
      />

      <h2 className="text-2xl text-blue-600 mb-4">Implementation Steps:</h2>
      <ol className="mb-6 list-decimal pl-5">
        <li>Expert Consultation: Schools consulted experts on AquaVeda to assess their water needs and potential for rainwater harvesting.</li>
        <li>System Design: Plans were shared for setting up rooftop rainwater collection systems connected to storage tanks.</li>
        <li>Funding Support: The AquaVeda community contributed funds for the purchase of equipment, materials, and installation services.</li>
        <li>Installation: Professional teams installed rainwater harvesting systems, ensuring they were efficient and easy to maintain.</li>
        <li>Education & Maintenance: Teachers and students received training on maintaining the systems for long-term sustainability.</li>
      </ol>

      <img
        src="src/assets/real2.jpg"
        alt="School Rainwater Harvesting"
        className="mx-auto my-5 max-w-full h-72 rounded-lg"
      />

      <h2 className="text-2xl text-blue-600 mb-4">Impact:</h2>
      <ul className="mb-6 list-disc pl-5">
        <li>✅ Over 100 schools now have reliable and sustainable water supplies.</li>
        <li>✅ Students enjoy uninterrupted access to clean water for drinking, sanitation, and hygiene.</li>
        <li>✅ Improved school attendance and health outcomes due to consistent water availability.</li>
        <li>✅ Reduced dependence on external water supplies, helping schools save on water costs.</li>
      </ul>

      <h3 className="text-xl text-blue-600 italic mb-4">Quote from Beneficiary:</h3>
      <p className="italic mb-6">
        "With knowledge and funding from AquaVeda, our school no longer worries about water shortages. Our students can focus on their studies without interruption."
      </p>

      <p className="text-center mt-6 text-gray-600">
        This detailed story highlights how AquaVeda's knowledge-sharing and funding features facilitated real change.
      </p>
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
        
       
   
       <div className=' bg-black h-4'></div>

       <div>
      <hr className="my-10 border-gray-300" />

      {/* UNICEF Response Section */}
      <div className="max-w-4xl mx-auto my-10 p-6 bg-gray-50 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">UNICEF’s Response</h2>
        <p className="text-lg text-justify text-gray-700 mb-4">
          As the factors driving water scarcity are complex and vary widely across countries and regions, UNICEF works at multiple levels 
          to introduce context-specific technologies that increase access to safe water and address the impacts of water scarcity. 
          We focus on:
        </p>
        <ul className="list-inside list-decimal pl-8 text-lg text-gray-700">
          <li><strong>Identifying new water resources:</strong> We assess the availability of water resources using various technologies, including remote sensing and geophysical surveys and field investigations.</li>
          <li><strong>Improving the efficiency of water resources:</strong> We rehabilitate urban water distribution networks and treatment systems to reduce water leakage and contamination, promoting wastewater reuse for agriculture to protect groundwater.</li>
          <li><strong>Planning for urban scarcity:</strong> We plan for future water needs by identifying available resources to reduce the risk of cities running out of water.</li>
          <li><strong>Expanding technologies to ensure climate resilience:</strong> We support and develop climate-resilient water sources, including the use of deeper groundwater reserves through solar-powered water networks. We also advance water storage through small-scale retention structures, managed aquifer recharge (where water is pumped into underground reserves to improve its quality), and rainwater harvesting.</li>
          <li><strong>Changing behaviors:</strong> We work with schools and communities to promote an understanding of the value of water and the importance of its protection, including by supporting environmental clubs in schools.</li>
          <li><strong>Planning national water needs:</strong> We work with key stakeholders at national and sub-national levels to understand the water requirements for domestic use and for health and sanitation, and advocate to ensure that this is reflected in national planning considerations.</li>
          <li><strong>Supporting the WASH sector:</strong> We develop technical guidance, manuals, and online training programmes for WASH practitioners to improve standards for water access.</li>
        </ul>
      </div>
    </div>



    <div className=' bg-black h-4'></div>

<div className='bg-blue-300 w-auto h-20 flex items-center justify-center'>
   <p className='pr-9'>The water crisis affects millions around the world. Make an impact today.</p>
   <div>
   <NavLink
   onClick={scrollToTop}
     className="inline-flex text-blue-800 items-center px-6 py-3 font-medium bg-white rounded-lg hover:opacity-75 "                           
        to="/donate">
         Donate
   </NavLink>
   </div>
</div>


           
             
      </div>
    );
}