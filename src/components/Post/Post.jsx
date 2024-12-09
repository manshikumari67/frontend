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
import "./Post.css"
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseIcon from "@material-ui/icons/Close";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from "react-time-ago";
import axios from "axios";
import ReactHtmlParser from "html-react-parser";
import { useSelector } from "react-redux";
import {selectUser} from "../../feature/userSlice"

function LastSeen({ date }) {
    return (
      <div>
        <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
      </div>
    );
  }
  function Post({ post }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const Close = <CloseIcon />;
  
    const user = useSelector(selectUser);
  
    const handleQuill = (value) => {
      setAnswer(value);
    };
    // console.log(answer);
  
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
            alert("Answer added succesfully");
            setIsModalOpen(false);
            window.location.href = "/";
          })
          .catch((e) => {
            console.log(e);
          });
      }
    };
    return (
      <div className="post flex flex-col p-3 bg-white mt-3 border border-gray-300 rounded-[5px] max-w-[700px] shadow-[0px_5px_8px_-9px_rgba(0,0,0,0.5)]">
        <div className="post__info flex items-center">
          <Avatar src={post?.user?.photo} />
          <h4 className="ml-3 cursor-pointer text-[13px] hover:underline">{post?.user?.userName}</h4>
  
          <small className="ml-3">
            <LastSeen date={post?.createdAt} />
          </small>
        </div>
        <div className="post__body flex flex-col">
          <div className="post__question mt-[10px] mb-[10px] font-bold cursor-pointer flex items-center flex-1">
            <p className="hover:underline">{post?.questionName}</p>
            <button
              onClick={() => {
                setIsModalOpen(true);
                console.log(post?._id);
              }}
              className="post__btnAnswer ml-auto cursor-pointer p-[7px] bg-[#222] outline-none border-0 text-[#D3D3D3] font-light text-[14px] rounded-[5px] hover:text-[#222] hover:bg-[#D3D3D3]"
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
                <h1 className="text-[#8f1f1b] font-semibold mb-[10px]">{post?.questionName}</h1>
                <p className="text-gray-500 text-sm">
                  asked by <span className="name">{post?.user?.userName}</span> on{" "}
                  <span className="name">
                    {new Date(post?.createdAt).toLocaleString()}
                  </span>
                </p>
              </div>
              <div className="modal__answer">
                <ReactQuill
                  value={answer}
                  onChange={handleQuill}
                  placeholder="Enter your answer"
                />
              </div>
              <div className="modal__button">
                <button className="cancle" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button onClick={handleSubmit} type="submit" className="add">
                  Add Answer
                </button>
              </div>
            </Modal>
          </div>
          {post.questionUrl !== "" && <img className="w-full max-h-[400px] object-contain bg-transparent rounded-[5px] cursor-pointer mt-[10px]" src={post.questionUrl} alt="url" />}
        </div>
        <div className="post__footer flex items-center mt-1">
          <div className="post__footerAction bg-[#D3D3D3] p-[5px] flex items-center justify-around rounded-[33px]">
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
        <p
          style={{
            color: "rgba(0,0,0,0.5)",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          {post?.allAnswers.length} Answer(s)
        </p>
  
        <div
          style={{
            margin: "5px 0px 0px 0px ",
            padding: "5px 0px 0px 20px",
            borderTop: "1px solid lightgray",
          }}
          className="post__answer mb-3"
        >
          {post?.allAnswers?.map((_a) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: "10px 5px",
                  borderTop: "1px solid lightgray",
                }}
                className="post-answer-container"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#888",
                  }}
                  className="post-answered"
                >
                  <Avatar src={_a?.user?.photo} />
                  <div
                    style={{
                      margin: "0px 10px",
                    }}
                    className="post-info"
                  >
                    <p>{_a?.user?.userName}</p>
                    <span>
                      <LastSeen date={_a?.createdAt} />
                    </span>
                  </div>
                </div>
                <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }

export default Post
