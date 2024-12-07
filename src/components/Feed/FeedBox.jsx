import { Avatar } from "@material-ui/core"
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";


function FeedBox() {
    
    const user = useSelector(selectUser);

  return (
    <div className="quoraBox flex flex-col p-3 border border-gray-300 bg-white rounded-md cursor-pointer max-w-[700px] hover:border hover:border-gray-400">
    <div className="quoraBox__info flex items-center">
      <Avatar src={user?.photo} />
    </div>
    <div className="quoraBox__quora flex mt-2">
      <h5 className="text-gray-500 font-bold ml-2 text-lg">What is your question or link?</h5>
    </div>
  </div>
  )
}

export default FeedBox
