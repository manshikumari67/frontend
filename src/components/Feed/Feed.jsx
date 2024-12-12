import { useEffect, useState } from "react";
import axios from "axios";
import FeedBox from "./FeedBox"
import Post from "../Post/Post";





function Feed() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get("/api/query/queries");
        setQueries(response.data.queries);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Queries</h2>
      {queries.map((query) => (
        <div key={query.id} className="mb-4 p-4 bg-white shadow-md rounded">
          <h3 className="text-lg font-semibold">{query.queryText}</h3>
          <p className="text-sm text-gray-500">
            {query.user?.username} - {new Date(query.createdAt).toLocaleString()}
          </p>
          <div className="mt-2">
            <button className="text-blue-500 underline">View Details</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
