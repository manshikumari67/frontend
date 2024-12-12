import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './DashBoard.css';
import Header from "../Header/Header";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";;
import { FaYoutube } from "react-icons/fa";
import Profile from "./Profile";
import {Link} from "react-router-dom"

const DashBoard = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`dashboard-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div
        className={`sidebarMenu fixed top-0 left-0 h-full w-[240px] bg-white bg-opacity-90 shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Your Sidebar Content */}
        <div className="logo p-4 border-b border-gray-300">
          <a href="#" className="text-xl font-bold">Dashboard</a>
        </div>

        {/* Menu items */}
        <div className="menu">
          <ul>
            <li>
              <NavLink to="#" className="menu-item">Dashboard</NavLink>
            </li>
        
            <NavLink to="/profile" className="menu-item">
              Profile
           </NavLink>

           
            <li>
              <NavLink to="#" className="menu-item">Overview</NavLink>
            </li>
            <li>
              <NavLink to="#" className="menu-item">Events</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menu-item">About</NavLink>
            </li>
            <li>
              <NavLink to="#" className="menu-item">Feedback</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="menu-item">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="socialMedia flex justify-center space-x-4 mt-auto mb-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 text-2xl transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 text-2xl transition-colors duration-300"
            aria-label="Twitter"
          >
          <FaTwitter />
          </a>
          <a
            href="#"
            className="text-pink-600 hover:text-pink-800 text-2xl transition-colors duration-300"
            aria-label="Instagram"
          >
           <FaInstagram />
          </a>
          <a
            href="#"
            className="text-red-600 hover:text-red-800 text-2xl transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="close-btn absolute top-4 right-4 text-2xl font-semibold"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default DashBoard;

