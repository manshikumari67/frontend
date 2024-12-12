import { useState, useEffect } from "react";
import axios from "axios";
import * as jwt_decode from "jwt-decode"; // Corrected to default import

function AddQuestionForm() {
  const [queryText, setQueryText] = useState("");
  const [userId, setUserId] = useState(""); // Dynamically set userId

  // Hardcoded questions and answers
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is water scarcity?",
      answer: "Water scarcity is the lack of sufficient available water resources to meet the demands of water usage in a region.",
    },
    {
      id: 2,
      question: "How can we conserve water?",
      answer: "Water can be conserved through methods like rainwater harvesting, fixing leaks, and using water-efficient appliances.",
    },
  ]);

  // Fetch userId from the token (assuming the token is stored in localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token"); // Assuming the JWT token is stored in localStorage
    if (token) {
      try {
        const decodedToken = jwt_decode(token); // Decode the JWT to get the user details
        setUserId(decodedToken.user.id); // Assuming the userId is in decodedToken.user.id
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!queryText || !userId) {
      alert("Query text and user ID are required");
      return;
    }

    try {
      // Simulate a backend submission by adding the question locally
      const newQuestion = {
        id: questions.length + 1, // Incremental ID for simplicity
        question: queryText,
        answer: "Answer pending...", // Default placeholder
      };
      setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

      // Clear input field after submission
      setQueryText("");

      // Optionally, make a real API call
      await axios.post("/api/auth/submit-query", { queryText, userId });
      alert("Query submitted successfully!");
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Error submitting query");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded mb-6">
        <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
        <textarea
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          placeholder="Type your question here..."
          className="w-full border border-gray-300 p-2 rounded mb-4"
          rows="5"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Display Hardcoded and Submitted Questions */}
      <div className="bg-gray-100 p-4 shadow-md rounded">
        <h3 className="text-lg font-bold mb-4">Questions and Answers</h3>
        {questions.map((q) => (
          <div key={q.id} className="mb-4">
            <p className="font-semibold">Q: {q.question}</p>
            <p className="text-gray-700">A: {q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddQuestionForm;
