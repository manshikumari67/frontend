import SideBar from "../SideBar/SideBar"
import Feed from "../Feed/Feed"


function AddQuestion() {


  return (
    <div className="quora__contents">
        <div className="quora__content">
          <SideBar />
          <Feed/>
        </div>
      </div>
   
  )
}

export default AddQuestion
