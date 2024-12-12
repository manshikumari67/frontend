import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "flatpickr/dist/flatpickr.min.css";
import L from "leaflet";
import flatpickr from "flatpickr";

const Locator = () => {
  const mapRef = useRef(null);

  const waterResourceLocations = [
    { id: 1, name: "Bellandur Lake, Bengaluru", lat: 12.9667, lon: 77.5833 },
    { id: 2, name: "Varthur Lake, Bengaluru", lat: 12.9400, lon: 77.7400 },
    { id: 3, name: "Hussain Sagar Lake, Hyderabad", lat: 17.4041, lon: 78.4727 },
    { id: 4, name: "Sukhna Lake, Chandigarh", lat: 30.7110, lon: 76.8344 },
    { id: 5, name: "Pichola Lake, Udaipur", lat: 24.5765, lon: 73.6715 },
    { id: 6, name: "Dal Lake, Srinagar", lat: 34.0856, lon: 74.8056 },
    { id: 7, name: "Tungabhadra Reservoir, Hospet", lat: 15.1167, lon: 76.4211 },
    { id: 8, name: "Kumarakom Lake, Kerala", lat: 9.6112, lon: 76.5470 },
    { id: 9, name: "Kanha National Park (Water resource area)", lat: 22.4021, lon: 81.6337 },
    { id: 10, name: "Jakkur Lake, Bengaluru", lat: 13.0975, lon: 77.5940 },
  ];

  useEffect(() => {
    // Initialize map only once
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([23.2599, 77.4126], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }

    // Helper function for distance calculation
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371;
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const getUserLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          waterResourceLocations.sort((a, b) => {
            const distanceA = calculateDistance(userLat, userLon, a.lat, a.lon);
            const distanceB = calculateDistance(userLat, userLon, b.lat, b.lon);
            return distanceA - distanceB;
          });

          const dropdown = document.getElementById("locationDropdown");
          dropdown.innerHTML =
            '<option value="" disabled selected>Select a water resource location</option>';
          waterResourceLocations.forEach((location) => {
            dropdown.innerHTML += `<option value="${location.id}">${location.name} - ${calculateDistance(
              userLat,
              userLon,
              location.lat,
              location.lon
            ).toFixed(2)} km</option>`;
          });
        });
      }
    };

    const findNearestLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          waterResourceLocations.sort((a, b) => {
            const distanceA = calculateDistance(userLat, userLon, a.lat, a.lon);
            const distanceB = calculateDistance(userLat, userLon, b.lat, b.lon);
            return distanceA - distanceB;
          });

          const nearestLocation = waterResourceLocations[0];

          mapRef.current.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
              mapRef.current.removeLayer(layer);
            }
          });

          const marker = L.marker([nearestLocation.lat, nearestLocation.lon]).addTo(mapRef.current);
          marker.bindPopup(nearestLocation.name).openPopup();
          mapRef.current.setView([nearestLocation.lat, nearestLocation.lon], 15);

          document.getElementById("nearestLocationName").textContent = `Nearest Water Resource Location: ${nearestLocation.name}`;
        });
      }
    };

    const showAllLocations = () => {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapRef.current.removeLayer(layer);
        }
      });

      waterResourceLocations.forEach((location) => {
        const marker = L.marker([location.lat, location.lon]).addTo(mapRef.current);
        marker.bindPopup(location.name);
      });

      const group = new L.featureGroup(
        waterResourceLocations.map((location) => L.latLng(location.lat, location.lon))
      );
      mapRef.current.fitBounds(group.getBounds());
    };

    getUserLocation();

    flatpickr("#datePicker", {
      dateFormat: "Y-m-d",
      enableTime: false,
      minDate: "today",
    });

    document.getElementById("findNearestLocationButton").addEventListener("click", findNearestLocation);
    document.getElementById("showAllLocationsButton").addEventListener("click", showAllLocations);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // Clean up the map instance
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      <header className=" text-black p-4 text-center">
        <h1 className="text-2xl font-semibold">Water Resources Locator</h1>
      </header>

      <div className="flex flex-grow">
        <div id="map" className="h-full w-3/5"></div>
        <div className="w-2/5 bg-orange-100 flex justify-center items-center">
          <div className="bg-white w-4/5 h-4/5 rounded-lg shadow-md flex flex-col items-center p-4">
            <p id="nearestLocationName" className="text-lg font-medium mb-4"></p>
            <button
              id="findNearestLocationButton"
              className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-400"
            >
              Find Nearest Water Resource
            </button>
            <button
              id="showAllLocationsButton"
              className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-400"
            >
              Show All Water Resource Locations
            </button>

            <select
              id="locationDropdown"
              className="bg-green-500 text-white py-2 px-4 rounded mb-4 w-full appearance-none"
            >
              <option value="" disabled selected>
                Select a water resource location
              </option>
            </select>

            <button
              id="confirm"
              className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-400"
            >
              Confirm Exchange
            </button>
            <input
              type="text"
              id="datePicker"
              placeholder="Select date"
              className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locator;