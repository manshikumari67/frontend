import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Login successful:", response.data);

      // Store token in localStorage (or use other secure storage if needed)
      localStorage.setItem("token", response.data.token);

      // Redirect to home or dashboard page
      navigate("/");
    } catch (err) {
      console.error("Error logging in:", err.response?.data || err.message);
      setError(err.response?.data?.msg || "Invalid login credentials.");
    }
  };

  return (
    <div className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('src/assets/water4.jpg')",
      }}
    >
      <div className="bg-none p-6 rounded-lg shadow-lg w-full max-w-md shadow-slate-900 border-2 border-gray-800">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-red-600 text-center">AQUAVEDA</h1>
        <p className="text-gray-600 text-center mb-6 text-sm">
          A place to share knowledge and better understand the world
        </p>

        {/* Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Email and Password Inputs */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Login Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600">
            Forgot password?
          </a>
          <br />
          <span className="text-gray-400">Don’t have an account?</span>{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up with email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
