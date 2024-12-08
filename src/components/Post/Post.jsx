import { Avatar } from "@material-ui/core";
import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutlined,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

function LastSeen({ date }) {
  return <div><ReactTimeAgo date={date} locale="en-US" timeStyle="round" /></div>;
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const Close = <CloseIcon />;

  const user = useSelector(selectUser);

  const handleQuill = (value) => {
    setAnswer(value);
  };

  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        user: user,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added successfully");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="post flex flex-col p-3 bg-white mt-3 border border-gray-300 rounded-md max-w-[700px] shadow-md">
      <div className="post__info flex items-center">
        <Avatar src={post?.user?.photo} />
        <h4 className="ml-3 cursor-pointer text-sm hover:underline">{post?.user?.userName}</h4>
        <small className="ml-3">
          <LastSeen date={post?.createdAt} />
        </small>
      </div>

      <div className="post__body flex flex-col mt-2">
        <div className="post__question font-bold cursor-pointer flex items-center">
          <p className="hover:underline">{post?.questionName}</p>
          <button
            onClick={() => {
              setIsModalOpen(true);
              console.log(post?._id);
            }}
            className="post__btnAnswer ml-auto cursor-pointer p-2 bg-gray-800 text-gray-300 font-light text-sm rounded-md hover:text-gray-800 hover:bg-gray-300"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__question flex items-center flex-col mt-5">
              <h1 className="text-red-600 font-semibold mb-2">{post?.questionName}</h1>
              <p className="text-gray-500 text-sm">
                asked by <span className="name">{post?.user?.userName}</span> on{" "}
                <span className="name">{new Date(post?.createdAt).toLocaleString()}</span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill value={answer} onChange={handleQuill} placeholder="Enter your answer" />
            </div>
            <div className="modal__button flex justify-between mt-5">
              <button
                className="cancle text-gray-500 font-semibold p-3 rounded-full hover:text-red-500"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button onClick={handleSubmit} className="add bg-gray-800 text-white font-semibold p-3 rounded-full hover:bg-gray-400">
                Add Answer
              </button>
            </div>
          </Modal>
        </div>

        {post?.questionUrl && (
          <img className="w-full max-h-96 object-contain bg-transparent rounded-md cursor-pointer mt-3" src={post?.questionUrl} alt="url" />
        )}
      </div>

      <div className="post__footer flex items-center mt-2">
        <div className="post__footerAction bg-gray-300 p-2 flex items-center justify-around rounded-full">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerLeft ml-auto">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>

      <p className="text-sm font-bold text-gray-600 mt-2">{post?.allAnswers.length} Answer(s)</p>

      <div className="post__answer mt-2 pt-2 border-t border-gray-300">
        {post?.allAnswers?.map((_a) => (
          <div key={_a._id} className="post-answer-container flex flex-col w-full p-2 border-t border-gray-300">
            <div className="post-answered flex items-center mb-2 text-xs font-semibold text-gray-500">
              <Avatar src={_a?.user?.photo} />
              <div className="ml-3">
                <p>{_a?.user?.userName}</p>
                <span><LastSeen date={_a?.createdAt} /></span>
              </div>
            </div>
            <div className="post-answer text-sm">{ReactHtmlParser(_a?.answer)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
