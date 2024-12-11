import React from 'react'

function Donate() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <div className="font-sans">
          <h1 className=" mt-4 text-4xl md:text-5xl font-bold  text-center text-orange-950">Your Contribution Matters</h1>
    {/* Hero Section */}
    <div className=" mt-7 relative bg-cover bg-center h-[450px] flex items-center justify-center text-white" style={{ backgroundImage: "url('src/assets/donate1.jpg')" }}>
    
    </div>

    {/* Motivation Section */}
    <div className="text-center my-8 px-4">
      <p className="text-xl font-semibold text-gray-700">"A small step for you can make a big difference for someone in need."</p>
    </div>

    {/* Benefits Section */}
    <div className="flex flex-wrap justify-center gap-6 px-4">
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-full md:w-[45%] text-center">
        <h3 className="text-2xl font-bold">Helps Those in Need</h3>
        <p className="mt-2">Donations provide vital resources for people in difficult situations, ensuring that they can meet basic needs like food and shelter.</p>
      </div>
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg w-full md:w-[45%] text-center">
        <h3 className="text-2xl font-bold">Promotes Social Welfare</h3>
        <p className="mt-2">Contributing to charities or causes strengthens communities and promotes the overall well-being of society.</p>
      </div>
      <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg w-full md:w-[45%] text-center">
        <h3 className="text-2xl font-bold">Tax Benefits</h3>

        <p className="mt-2">In many countries, donations are tax-deductible, which can reduce your taxable income and benefit you financially.</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-full md:w-[45%] text-center">
          <h3 className="text-2xl font-bold">Fosters a Culture of Giving</h3>
          <p className="mt-2">Your donation encourages others to contribute, fostering a culture of kindness and generosity in your community.</p>
        </div>
      </div>

      {/* Highlight Section */}
      <div className="max-w-3xl mx-auto my-12 px-6 text-center">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Water scarcity in rural areas leads to health risks, agricultural challenges, and economic hardship. Donations help by providing clean water sources, supporting agriculture through irrigation, and building long-term resilience in communities. Your contributions empower these areas to overcome water shortages and improve their livelihoods.
        </p>
      </div>

      {/* Donation Form */}
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Donate Now</h2>

        <label className="block mb-2 font-semibold text-gray-700">Donation Amount</label>
        <select className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="100">₹100</option>
          <option value="200">₹200</option>
          <option value="500">₹500</option>
          <option value="custom">Enter your own amount</option>
        </select>

        <label className="block mb-2 font-semibold text-gray-700">Enter Amount (if custom selected)</label>
        <input
          type="number"
          placeholder="Enter amount in INR"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 font-semibold text-gray-700">Donation Frequency</label>
        <select className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="one-time">One Time</option>
          <option value="monthly">Monthly</option>
        </select>

        <label className="block mb-2 font-semibold text-gray-700">Payment Method</label>
        <select className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Bank Transfer</option>
        </select>

        <label className="block mb-2 font-semibold text-gray-700">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
         <label className="block mb-2 font-semibold text-gray-700">Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 font-semibold text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
       <label className="block mb-2 font-semibold text-gray-700">Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Donate Now
        </button>
      </form>
    </div>
  )
}

export default Donate
