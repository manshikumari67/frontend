import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput) return;

    const userMessage = { role: 'user', text: userInput };
    setMessages([...messages, userMessage]);
    setUserInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();
      const botMessage = { role: 'bot', text: data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-teal-300">
      <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4 border-b pb-2">AlterDroid</h1>
        <div className="overflow-y-auto h-64 mb-4 p-2 bg-gray-800 rounded">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-1 rounded ${
                msg.role === 'user' ? 'bg-blue-500 text-right' : 'bg-green-500 text-left'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            className="flex-grow p-2 rounded border focus:outline-none focus:ring focus:ring-teal-400"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your message"
          />
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            onClick={sendMessage}
          >
            {loading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;