import SideBar from "../SideBar/SideBar"
import Feed from "../Feed/Feed"


function AddQuestion() {


  return (
    <div className="w-full bg-gray-100 py-12">
    <div className="flex justify-center px-4 w-full max-w-screen-xl">
      {/* Sidebar */}
      <div className="w-full sm:w-1/4 bg-white shadow-md rounded-md">
        <SideBar />
      </div>

      {/* Feed */}
      <div className="w-full sm:w-3/4 ml-4">
        <Feed />
      </div>
    </div>
  </div>
   
  )
}

export default AddQuestion
