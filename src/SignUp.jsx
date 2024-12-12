import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validation and submit data to server
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password); 
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
          Sign Up
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Create your account and start your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}> 
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-6 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;