import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to another page

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("User registered:", response.data);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err) {
      console.error("Error registering user:", err.response?.data || err.message);
      setError(err.response?.data?.msg || "Something went wrong!");
    }
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

        {/* Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
