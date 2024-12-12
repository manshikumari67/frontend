import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('src/assets/water4.jpg')",
        }}
      >
        <div className="bg-none p-6 rounded-lg shadow-lg w-full max-w-md  shadow-slate-900 border-2 border-gray-800">
          {/* Header */}
          <h1 className="text-3xl font-bold mb-2 text-red-600 text-center">
            AQUAVEDA
          </h1>
          <p className="text-gray-600 text-center mb-6 text-sm">
            A place to share knowledge and better understand the world
          </p>

          {/* Email and Password Inputs */}
          <form onSubmit={handleSubmit}> 
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <div className="mt-6">
              <Link to="/">
              <button 
                type="submit" 
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => alert("Login Successful")}
              >
                Login
              </button>
              </Link>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-4 text-center text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600">
              Forgot password?
            </a>
            <br />
            <span className="text-gray-400">Dont have an account?</span>{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up with email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;