import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { IoMdClose } from "react-icons/io"; // Close icon for the sidebar
import './Header.css';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // for mobile menu toggle

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
    };

    const Close = <IoMdClose />;  // Close icon for the modal

    return (
        <header className="shadow sticky top-0 z-50">
            <nav className="bg-gray-200 border-gray-700 px-4 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center h-16 border-2 w-52">
                        <img
                            src="src/assets/aquaveda.png"
                            className="h-48 mr-3 mt-6"
                            alt="Logo"
                        />
                    </Link>

                    {/* Main navigation items */}
                    <div className="hidden lg:flex items-center space-x-8 ml-10">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-gray-800 hover:text-orange-700 ${isActive ? "text-orange-700" : "text-gray-700"} text-lg font-semibold duration-200`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/ask-an-expert"
                            className={({ isActive }) =>
                                `text-gray-800 hover:text-orange-700 ${isActive ? "text-orange-700" : "text-gray-700"} text-lg font-semibold duration-200`
                            }
                        >
                            Ask an Expert
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-gray-800 hover:text-orange-700 ${isActive ? "text-orange-700" : "text-gray-700"} text-lg font-semibold duration-200`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-gray-800 hover:text-orange-700 ${isActive ? "text-orange-700" : "text-gray-700 "} text-lg font-semibold duration-200`
                            }
                        >
                            Contact
                        </NavLink>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="text-gray-800 hover:text-orange-700 text-lg font-semibold duration-200"
                        >
                            Add Question
                        </button>
                    </div>

                    {/* Mobile menu toggle button */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-orange-700"
                        >
                            {isMenuOpen ? <IoMdClose size={30} /> : <CgProfile size={30} />}
                        </button>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            to="#"
                            className="text-gray-800 flex hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg w-10 focus:outline-none"
                        >
                            <IoIosNotifications size={30} />
                        </Link>
                        <NavLink
                            to="/login"
                            className="text-gray-800 flex hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg w-12 focus:outline-none"
                        >
                            <h3>Login</h3>
                        </NavLink>
                        <NavLink
                            to="#"
                            onClick={toggleSidebar} // Trigger sidebar toggle
                            className="text-blue-900 hover:text-blue-800 focus:ring-4 font-medium rounded-lg px-4 lg:px-5 py-2 ml-4 focus:outline-none"
                        >
                            <CgProfile size={37} />
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Mobile menu (Hamburger) */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-200 bg-opacity-80 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <ul className="space-y-4 text-center">
                            <li>
                                <NavLink to="/" className="text-gray-800 text-lg font-semibold">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ask-an-expert" className="text-gray-800 text-lg font-semibold">Ask an Expert</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="text-gray-800 text-lg font-semibold">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="text-gray-800 text-lg font-semibold">Contact</NavLink>
                            </li>
                            <li>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-gray-800 text-lg font-semibold"
                                >
                                    Add Question
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Sidebar (Sliding from the right) */}
            <div
                className={`fixed top-0 right-0 w-[240px] h-full bg-white bg-opacity-90 shadow-lg transition-transform duration-300 ease-in-out ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="logo p-4 border-b border-gray-300">
                    <a href="#" className="text-xl font-bold ml-11">Dashboard</a>
                </div>

                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="#" className="menu-item">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className="menu-item">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/locator" className="menu-item">Water resource Locator</NavLink>
                        </li>
                        <li>
                        <NavLink to="/calculator" className="menu-item">Water Footprint Calculator</NavLink>
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

                {/* Close Sidebar Button */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 left-4 text-2xl font-semibold"
                >
                    <IoMdClose />
                </button>
            </div>

            {/* Modal for Add Question */}
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                center
                styles={{
                    modal: {
                        width: "600px",
                        height: "400px",
                        padding: "20px",
                        borderRadius: "10px",
                        backgroundColor: "white",
                    },
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                }}
            >
                <h2 className="text-xl font-bold mb-4">Add your Question</h2>
                <textarea
                    placeholder="Enter your question here"
                    rows="5"
                    className="w-full p-4 border border-gray-300 rounded-lg"
                ></textarea>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </Modal>
        </header>
    );
}
