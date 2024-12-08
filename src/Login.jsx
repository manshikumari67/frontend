import {Link } from "react-router-dom"

import React from 'react'

function Login() {
  return (
    <div>
      <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('src/assets/water4.jpg')", // Replace with your image URL
      }}
    >
      <div className="bg-none p-6 rounded-lg shadow-lg w-full max-w-md  shadow-slate-900 border-2 border-gray-800">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-red-600 text-center">
          AQUAVEDA
        </h1>
        <p className="text-gray-600 text-center mb-6 text-sm">
          A place to share knowledge and better understand the world
        </p>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button
            className="flex items-center justify-center w-full p-2 text-sm font-medium text-gray-600 bg-gray-50 border rounded-lg hover:bg-gray-100"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="h-4 w-4 mr-2"
            />
            Continue with Google
          </button>
          <button
            className="flex items-center justify-center w-full p-2 text-sm font-medium text-gray-600 bg-gray-50 border rounded-lg hover:bg-gray-100"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
              alt="Facebook"
              className="h-4 w-4 mr-2"
            />
            Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="my-4 text-center text-sm text-gray-900">or</div>

        {/* Email and Password Inputs */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Login Button */}
        <div className="mt-6">
          <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
          </button>
        </div>

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
  )
}

export default Login
