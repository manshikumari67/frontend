
import React from 'react';

const Content = () => {
  return (
    <div className="bg-gray-100">
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
  );
};

export default Content;
