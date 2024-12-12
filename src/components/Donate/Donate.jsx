import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Donate() {
  const [amount, setAmount] = useState(100); // Default amount
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAmountChange = (e) => {
    const selectedAmount = e.target.value;
    setAmount(selectedAmount === 'custom' ? e.target.previousElementSibling.value : selectedAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/donations/donate', {
        userId: 1, // This should be fetched from authentication context
        amount,
      });

      if (response.status === 201) {
        setSuccessMessage('Donation successful!');
      }
    } catch (err) {
      setError('Donation failed. Please try again.');
    }
  };

  const createOrder = async () => {
    try {
      const response = await axios.post('/api/donations/create-order', { amount });
      const { orderId } = response.data;
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: amount ,
        currency: 'INR',
        name: 'Your Organization',
        description: 'Donation for Water Conservation',
        order_id: orderId,
        handler: async (response) => {
          await verifyPayment(response);
        },
      };
      const paymentGateway = new window.Razorpay(options);
      paymentGateway.open();
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
    }
      // <NavLink    to="/paymentStatus">

      // </NavLink>
  };

  const verifyPayment = async (response) => {
    try {
      const verificationResponse = await axios.post('http://localhost:5000/api/donations/verify-payment', {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        userId: 1, // Add the user ID here
        amount,
      });
      if (verificationResponse.status === 200) {
        setSuccessMessage('Payment successful!');
      } else {
        setError('Payment verification failed.');
      }
    } catch (err) {
      setError('Payment verification failed.');
    }
  };

  return (
    <div className="font-sans">
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-center text-orange-950">Your Contribution Matters</h1>
      
      {/* Hero Section */}
      <div className="mt-7 relative bg-cover bg-center h-[450px] flex items-center justify-center text-white" style={{ backgroundImage: "url('src/assets/donate1.jpg')" }}></div>

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
      </div>

      {/* Donation Form */}
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Donate Now</h2>

        <label className="block mb-2 font-semibold text-gray-700">Donation Amount</label>
        <select className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleAmountChange}>
          <option value="100">₹100</option>
          <option value="200">₹200</option>
          <option value="500">₹500</option>
          <option value="custom">Enter your own amount</option>
        </select>

        <input
          type="number"
          placeholder="Enter amount in INR"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleAmountChange}
          style={{ display: 'none' }}
        />

        <label className="block mb-2 font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userData.name}
          onChange={handleChange}
          required
        />

        {/* Other form fields for age, address, email, phone number */}
        {/* You can add them similarly as shown above */}

  {/* Age Field */}
  <label className="block mb-2 font-semibold text-gray-700">Age</label>
  <input
    type="number"
    name="age"
    placeholder="Enter your age"
    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={userData.age}
    onChange={handleChange}
    required
  />

  {/* Address Field */}
  <label className="block mb-2 font-semibold text-gray-700">Address</label>
  <textarea
    name="address"
    placeholder="Enter your address"
    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={userData.address}
    onChange={handleChange}
    required
  />

  {/* Email Field */}
  <label className="block mb-2 font-semibold text-gray-700">Email</label>
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={userData.email}
    onChange={handleChange}
    required
  />

  {/* Phone Number Field */}
  <label className="block mb-2 font-semibold text-gray-700">Phone Number</label>
  <input
    type="tel"
    name="phoneNumber"
    placeholder="Enter your phone number"
    className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={userData.phoneNumber}
    onChange={handleChange}
    required
  />

        <NavLink to="/paymentStatus"> 
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          onClick={createOrder}
        >
          Donate Now
        </button>

        </NavLink>
      </form>

      {error && <p className="text-red-600">{error}</p>}
      {successMessage && <p className="text-green-600">{successMessage}</p>}
    </div>
  );
}

export default Donate;
