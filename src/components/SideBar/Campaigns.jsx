import React from 'react';

const Campaign = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-8">
      <div className="max-w-4xl w-full px-4">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-center text-blue-700 mb-12">
          Water Conservation Articles
        </h1>

        {/* Article */}
        <div id="awareness" className="bg-white p-6 rounded-xl shadow-lg mb-16">
          <div className="flex mb-6">
            <img
              src="src/assets/img6.png"
              alt="Awareness Campaigns"
              className="w-48 h-48 object-cover rounded-lg mr-6"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                Awareness Campaigns
              </h2>
              <p className="text-gray-700 mb-4">
                Awareness campaigns play a critical role in promoting water
                conservation and sustainable management, particularly for
                industries and communities. Here’s a guide to organizing and
                understanding effective campaigns on water awareness:
              </p>

              <h3 className="text-2xl font-semibold text-blue-500 mt-6">Objectives of Water Awareness Campaigns</h3>
              <div className="mt-2">
                <h4 className="text-xl font-medium text-gray-700">Educate:</h4>
                <p className="text-gray-600">Highlight the importance of water in daily life, industries, and ecosystems.</p>
                <p className="text-gray-600">Address issues like scarcity, pollution, and sustainable usage.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Engage:</h4>
                <p className="text-gray-600">Foster community participation in water conservation efforts.</p>
                <p className="text-gray-600">Encourage industries to adopt sustainable water practices.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Empower:</h4>
                <p className="text-gray-600">Provide actionable steps individuals and businesses can take to reduce water waste.</p>
                <p className="text-gray-600">Advocate for policy changes to ensure sustainable water management.</p>
              </div>

              <h3 className="text-2xl font-semibold text-blue-500 mt-8">Key Focus Areas for Campaigns</h3>
              <div className="mt-2">
                <h4 className="text-xl font-medium text-gray-700">Industrial Water Use:</h4>
                <p className="text-gray-600">Efficient use and reuse of water in industries.</p>
                <p className="text-gray-600">Implementing wastewater treatment and recycling systems.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Community Conservation:</h4>
                <p className="text-gray-600">Promoting responsible water use in households and public spaces.</p>
                <p className="text-gray-600">Encouraging rainwater harvesting and greywater reuse.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Environmental Impact:</h4>
                <p className="text-gray-600">Raising awareness about the consequences of water pollution.</p>
                <p className="text-gray-600">Protecting natural water bodies and aquatic ecosystems.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Policy Advocacy:</h4>
                <p className="text-gray-600">Supporting laws and regulations that promote water conservation.</p>
                <p className="text-gray-600">Encouraging industries to comply with environmental standards.</p>
              </div>

              <h3 className="text-2xl font-semibold text-blue-500 mt-8">Strategies for an Effective Campaign</h3>
              <div className="mt-2">
                <h4 className="text-xl font-medium text-gray-700">Digital Media:</h4>
                <p className="text-gray-600">Use social media platforms to reach a wide audience with infographics, videos, and articles.</p>
                <p className="text-gray-600">Launch hashtags and challenges (e.g., #SaveWaterToday).</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Workshops and Seminars:</h4>
                <p className="text-gray-600">Host events for industries and communities to discuss water management solutions.</p>
                <p className="text-gray-600">Collaborate with experts to deliver impactful talks.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Collaborations:</h4>
                <p className="text-gray-600">Partner with local governments, NGOs, and businesses.</p>
                <p className="text-gray-600">Engage schools and universities in water conservation activities.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Storytelling and Testimonials:</h4>
                <p className="text-gray-600">Share success stories of industries and individuals implementing sustainable practices.</p>
                <p className="text-gray-600">Create videos showcasing the effects of water scarcity or pollution.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Visual Campaigns:</h4>
                <p className="text-gray-600">Develop posters, murals, or advertisements promoting water conservation messages.</p>
                <p className="text-gray-600">Use data visualization to show the impact of current water usage trends.</p>
              </div>

              <h3 className="text-2xl font-semibold text-blue-500 mt-8">Examples of Campaign Ideas</h3>
              <div className="mt-2">
                <h4 className="text-xl font-medium text-gray-700">"Drop by Drop":</h4>
                <p className="text-gray-600">Focus on small, everyday actions that collectively conserve water.</p>
                <p className="text-gray-600">Promote water-saving tips for industries and homes.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">"Blue Future":</h4>
                <p className="text-gray-600">Highlight the role of water in securing future livelihoods and ecosystems.</p>
                <p className="text-gray-600">Target industrial leaders to pledge sustainable practices.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">"Every Drop Counts":</h4>
                <p className="text-gray-600">Showcase statistics on water wastage and simple ways to reduce it.</p>
                <p className="text-gray-600">Engage through online calculators to measure water footprints.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">World Water Day Initiatives:</h4>
                <p className="text-gray-600">Organize events on March 22 to align with global efforts for water conservation.</p>
                <p className="text-gray-600">Use the UNs yearly theme to inspire local campaigns.</p>
              </div>

              <h3 className="text-2xl font-semibold text-blue-500 mt-8">Metrics to Evaluate Campaign Impact</h3>
              <div className="mt-2">
                <h4 className="text-xl font-medium text-gray-700">Engagement:</h4>
                <p className="text-gray-600">Social media reach, likes, shares, and comments.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Participation:</h4>
                <p className="text-gray-600">Attendance at events and workshops.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Adoption:</h4>
                <p className="text-gray-600">Increase in industries adopting water-efficient technologies.</p>

                <h4 className="text-xl font-medium text-gray-700 mt-4">Feedback:</h4>
                <p className="text-gray-600">Surveys to measure change in attitudes and behaviors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;