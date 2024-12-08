import { useEffect,useState } from "react"
import FeedBox from "./FeedBox"
import axios from "axios"
import Post from "../Post/Post";



function Feed() {

<<<<<<< HEAD
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
=======
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
    <div className="feed flex flex-col  flex: 0.6">
    <FeedBox/>
    {posts.map((post, index) => (
      <Post key={index} post={post} />
    ))}
     </div>
>>>>>>> 3e8a96335667360a6d3c9822415fcf4cf6c193a3
  )
}

export default Feed
