export default function About() {
    return (
        <div>
      {/* Background Section */}
      <div className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('src/assets/bg_about.jpeg')" }}>
        <div className="max-w-2xl bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to AquaVeda</h1>
          <p className="text-lg leading-relaxed">
            AquaVeda is committed to water conservation and management. Learn how we can help you adopt sustainable practices to preserve our planet's most precious resource. Together, let's create a future where water scarcity is no longer a concern.
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="py-10">
        {/* Section: Why Water Management Matters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-8">
          <img
            src="src/assets/about1.webp"
            alt="Water Management"
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Water Management Matters</h2>
            <p className="text-gray-600">
              Water management is essential to address the growing challenges of water scarcity, climate change, and increasing demand. By conserving water, we ensure a sustainable future for generations to come.
            </p>
          </div>
        </div>

        {/* Section: Our Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-6 py-8">
          <img
            src="src/assets/about2.webp"
            alt="Our Mission"
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to empower communities, businesses, and individuals to adopt sustainable water management practices that safeguard this vital resource for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Section: What We Offer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-8">
          <img
            src="src/assets/about3.webp"
            alt="What We Offer"
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600">
              AquaVeda provides innovative solutions such as rainwater harvesting systems, efficient water usage technologies, and educational programs to promote water conservation.
            </p>
          </div>
        </div>
      </div>


      

    </div>
    );
  }