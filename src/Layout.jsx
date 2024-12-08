<<<<<<< HEAD
import { useState } from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import DashBoard from './components/DashBoard/DashBoard'; // Import the DashBoard component with the sidebar

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar open/close state

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} /> {/* Passing toggleSidebar to Header */}
      
      <div className="dashboard-container">
        {/* Pass state and toggle function to DashBoard */}
        <DashBoard isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content, shifting when the sidebar is open */}
        <div className={`main-content ${isSidebarOpen ? "active" : ""}`}>
          <Outlet /> {/* Render children based on routing */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Layout;
=======
import Header from './components/Header/Header'
 import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


 function Layout() {
 

    return (
      <>
       <Header />
       <Outlet/>
       <Footer/>
      </>
    )
  }
  
  export default Layout
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
