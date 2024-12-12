import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Calculator = () => {
  const mapRef = useRef(null); // To store the map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize the map only once
      mapRef.current = L.map('map-container').setView([20.5937, 78.9629], 5); // Centered on India

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);

      // Sample marker for a water-scarce region
      L.marker([13.0827, 80.2707])
        .addTo(mapRef.current)
        .bindPopup('Chennai: Water scarcity reported.')
        .openPopup();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // Clean up the map instance
        mapRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const calculateFootprint = () => {
    const showers = parseInt(document.getElementById('showers').value) || 0;
    const dishwashing = parseInt(document.getElementById('dishwashing').value) || 0;
    const laundry = parseInt(document.getElementById('laundry').value) || 0;

    const totalWater = showers * 70 + dishwashing * 15 + laundry * 50;

    document.getElementById('result').innerText = Your `weekly water footprint is approximately ${totalWater} liters.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reporting! We'll look into it.");
  };

  return (
    <div className="bg-blue-50 font-sans min-h-screen p-4">
      <section className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl text-blue-600 text-center mb-4">Water Footprint Calculator</h2>
        <form id="footprint-form" className="space-y-4">
          <div>
            <label htmlFor="showers" className="block text-gray-700">Showers per week:</label>
            <input
              type="number"
              id="showers"
              min="0"
              placeholder="e.g., 7"
              className="w-full border border-blue-200 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="dishwashing" className="block text-gray-700">Dishwashing sessions per week:</label>
            <input
              type="number"
              id="dishwashing"
              min="0"
              placeholder="e.g., 10"
              className="w-full border border-blue-200 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="laundry" className="block text-gray-700">Laundry loads per week:</label>
            <input
              type="number"
              id="laundry"
              min="0"
              placeholder="e.g., 3"
              className="w-full border border-blue-200 rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="button"
            onClick={calculateFootprint}
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700"
          >
            Calculate
          </button>
        </form>
        <p id="result" className="text-center font-bold text-blue-600 mt-4"></p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto mb-8">
        <h2 className="text-2xl text-blue-600 text-center mb-4">Real-Time Water Scarcity Dashboard</h2>
        <div id="map-container" className="h-96 w-full border border-gray-300 rounded"></div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl text-blue-600 text-center mb-4">Report a Water Issue</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="location" className="block text-gray-700">Location:</label>
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              className="w-full border border-blue-200 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label htmlFor="issue" className="block text-gray-700">Describe the Issue:</label>
            <textarea
              id="issue"
              rows="4"
              placeholder="E.g., Leak in water pipe"
              className="w-full border border-blue-200 rounded px-3 py-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700"
          >
            Submit Report
          </button>
        </form>
      </section>
    </div>
  );
};

export default Calculator;