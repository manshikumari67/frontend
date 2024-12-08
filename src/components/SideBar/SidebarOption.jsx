import { Add } from "@material-ui/icons";
import {NavLink} from "react-router-dom"

function SidebarOption() {
  return (
    <div className="sidebarOptions flex-col h-96">
      <div className="sidebarOption flex items-center p-3 cursor-pointer w-[-75px] hover:bg-gray-300 hover:rounded-md ">
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
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
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />
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
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
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
        <img className="h-7 ml-5 "  style={{ borderRadius: '5px' }}
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
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
        <Add />
        <p className="text ml-6 text-gray-600 font-normal text-sm">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOption;