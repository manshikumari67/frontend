import { Add } from "@material-ui/icons";
<<<<<<< HEAD
import {NavLink} from "react-router-dom"

function SidebarOption() {
  return (
    <div className="sidebarOptions flex-col h-96">
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-[-75px] hover:bg-gray-300 hover:rounded-md ">
=======



function SidebarOption() {
  return (
    <div className="sidebarOptions flex-col ">
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
<<<<<<< HEAD
       <NavLink  
       to="/management"
       className={({ isActive }) =>
           `text-gray-800 hover:text-orange-700 ${
               isActive ? "text-orange-700" : "text-gray-700"
           } text-lg font-semibold duration-200`
       }>
       <p className="ml-2 text-gray-700 font-normal text-sm ">Water Management</p>
       </NavLink>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointerw-[-75px] hover:bg-gray-300 hover:rounded-md">
=======
        <p className="ml-2 text-gray-700 font-normal text-sm ">History</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />
<<<<<<< HEAD
         <NavLink  
       to="/technique"
       className={({ isActive }) =>
           `text-gray-800 hover:text-orange-700 ${
               isActive ? "text-orange-700" : "text-gray-700"
           } text-lg font-semibold duration-200`
       }>
       <p className="ml-2 text-gray-700 font-normal text-sm " >Saving Techniques</p>
       </NavLink>
        
      </div>
      <div className="sidebarOption flex items-center p-3 cursor-pointerw-[-75px] hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="src/assets/about1.webp"
          alt=""
        />
         <NavLink  
       to="/agriculture"
       className={({ isActive }) =>
           `text-gray-800 hover:text-orange-700 ${
               isActive ? "text-orange-700" : "text-gray-700"
           } text-lg font-semibold duration-200`
       }>
       <p className="ml-2 text-gray-700 font-normal text-sm " >Water in Agriculture</p>
       </NavLink>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-[-75px] hover:bg-gray-300 hover:rounded-md">
=======

        <p className="ml-2 text-gray-700 font-normal text-sm " >Business</p>
      </div>
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Psychology</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
<<<<<<< HEAD
         <NavLink  
       to="/industry"
       className={({ isActive }) =>
           `text-gray-800 hover:text-orange-700 ${
               isActive ? "text-orange-700" : "text-gray-700"
           } text-lg font-semibold duration-200`
       }>
       <p className="ml-2 text-gray-700 font-normal text-sm " >Water in Industry</p>
       </NavLink>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-[-75px] hover:bg-gray-300 hover:rounded-md">
=======
        <p className="ml-2 text-gray-700 font-normal text-sm ">Cooking</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
<<<<<<< HEAD
         <NavLink  
       to="/campaigns"
       className={({ isActive }) =>
           `text-gray-800 hover:text-orange-700 ${
               isActive ? "text-orange-700" : "text-gray-700"
           } text-lg font-semibold duration-200`
       }>
       <p className="ml-2 text-gray-700 font-normal text-sm " >Awareness Campaigns</p>
       </NavLink>
      </div>

      

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-[-75px] hover:bg-gray-300 hover:rounded-md">
=======
        <p className="ml-2 text-gray-700 font-normal text-sm ">Music</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Science</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Health</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Movies</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Technology</p>
      </div>

      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p className="ml-2 text-gray-700 font-normal text-sm ">Education</p>
      </div>
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-36 hover:bg-gray-300 hover:rounded-md">
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
        <Add />
        <p className="text ml-6 text-gray-600 font-normal text-sm">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOption;