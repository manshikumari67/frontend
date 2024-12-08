<<<<<<< HEAD
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";
import { useState } from "react";
import axios from "axios";

function FeedBox() {
  const user = useSelector(selectUser); // Get user from Redux store
  const [question, setQuestion] = useState(""); // Track the question being typed

  const handlePostQuestion = async () => {
    if (question.trim()) {
      try {
        const response = await axios.post("/api/questions", { question, userId: user.id });
        console.log("Question posted:", response.data);
        setQuestion(""); // Clear the input after posting
      } catch (error) {
        console.error("Error posting question:", error);
      }
    } else {
      console.log("Question cannot be empty");
    }
  };

  return (
    <div className="quoraBox flex flex-col p-3 border border-gray-300 bg-white rounded-md cursor-pointer max-w-[700px] hover:border hover:border-gray-400">
      <div className="quoraBox__info flex items-center">
        <Avatar src={user?.photo} />
        <h4 className="ml-2">{user?.name}</h4>
      </div>
      <div className="quoraBox__quora flex mt-2">
        <h5 className="text-gray-500 font-bold ml-2 text-lg">What is your question or link?</h5>
      </div>
      <textarea
        className="quoraBox__input p-2 mt-2 border border-gray-300 rounded-md w-full"
        placeholder="Ask your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div className="flex justify-between items-center mt-2">
        <button
          onClick={handlePostQuestion}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Post Question
        </button>
      </div>
    </div>
  );
}

export default FeedBox;
=======
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
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
