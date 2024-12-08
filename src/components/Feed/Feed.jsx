import { useEffect,useState } from "react"
import FeedBox from "./FeedBox"
import axios from "axios"
import Post from "../Post/Post";



function Feed() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="feed">
    <FeedBox />
    {posts.map((post, index) => (
      <Post key={index} post={post} />
    ))}
    
  </div>
  )
}

export default Feed
