// Profile.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Conditional Rendering: If editing, show edit profile form, else show profile */}
        {isEditing ? (
          <div className="edit-profile-container p-6">
            <h2 className="text-center text-xl font-semibold mb-4">Edit Profile</h2>
            <form id="edit-profile-form">
              <div className="form-group mb-4">
                <label htmlFor="user-name" className="block font-semibold text-gray-800 mb-2">Full Name:</label>
                <input 
                  type="text" 
                  id="user-name"
                  name="user-name"
                  placeholder="Enter your full name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="user-email" className="block font-semibold text-gray-800 mb-2">Email:</label>
                <input
                  type="email"
                  id="user-email"
                  name="user-email"
                  placeholder="Enter your email address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="user-phone" className="block font-semibold text-gray-800 mb-2">Phone:</label>
                <input
                  type="text"
                  id="user-phone"
                  name="user-phone"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="user-address" className="block font-semibold text-gray-800 mb-2">Address:</label>
                <textarea
                  id="user-address"
                  name="user-address"
                  placeholder="Enter your address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="form-actions text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
            <Link to="/profile" className="block text-center text-blue-500 mt-4 hover:underline">Back to Profile</Link>
          </div>
        ) : (
          <div>
            {/* Profile Header */}
            <div className="bg-blue-500 text-white text-center py-6">
              <img
                src="https://via.placeholder.com/100"
                alt="User Photo"
                className="w-24 h-24 rounded-full mx-auto border-4 border-white "
              />
              <h2 className="text-xl font-semibold mt-2">Shubham</h2>
            </div>

            {/* Profile Body */}
            <div className="p-6">
              <div className="mb-6 pt-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium text-gray-800">Email:</span>{' '}
                  <a href="mailto:johndoe@example.com" className="text-blue-500 hover:underline">
                    shubham123@example.com
                  </a>
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium text-gray-800">Phone:</span>{' '}
                  +1 (123) 456-7890
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium text-gray-800">Address:</span>{' '}
                  1234 Elm Street, Springfield, USA
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-800">Joined:</span>{' '}
                  January 2020
                </p>
              </div>
            </div>

            {/* Profile Footer */}
            <div className="text-center bg-gray-100 py-4 border-t">
              <button
                onClick={handleEditToggle}
                className="text-blue-500 font-medium hover:underline"
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
