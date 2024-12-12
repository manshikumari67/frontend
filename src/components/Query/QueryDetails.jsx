import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Assuming you're using React Router
import axios from "axios";

function QueryDetails() {
  const { queryId } = useParams();
  const [query, setQuery] = useState(null);

  useEffect(() => {
    const fetchQueryDetails = async () => {
      try {
        const response = await axios.get(`/api/query/query/${queryId}`);
        setQuery(response.data.query);
      } catch (error) {
        console.error("Error fetching query details:", error);
      }
    };

    fetchQueryDetails();
  }, [queryId]);

  if (!query) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">{query.queryText}</h2>
      <p className="text-sm text-gray-500">
        Asked by: {query.user?.username} - {new Date(query.createdAt).toLocaleString()}
      </p>
      <h3 className="text-lg font-semibold mt-4">Answers:</h3>
      {query.answers.map((answer) => (
        <div key={answer.id} className="mt-2 p-2 border border-gray-300 rounded">
          <p>{answer.answerText}</p>
          <p className="text-sm text-gray-500">
            Answered by: {answer.answeredBy?.username} - {new Date(answer.answeredAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default QueryDetails;
