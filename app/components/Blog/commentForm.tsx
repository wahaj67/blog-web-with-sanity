"use client";
import { useState } from "react";

const CommentForm = ({ postSlug }: { postSlug: string }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatusMessage("All fields are required!");
      return;
    }

    const commentData = { name, email, message };

    try {
      const response = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...commentData, postSlug }),
      });

      if (response.ok) {
        setStatusMessage("Comment submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await response.json();
        setStatusMessage(data?.message || "Failed to submit comment.");
      }
    } catch (error) {
      setStatusMessage("An error occurred while submitting your comment.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Leave a Comment
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Comment
          </label>
          <textarea
            id="message"
            placeholder="Enter your comment"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit Comment
        </button>
      </form>
      {statusMessage && (
        <p
          className={`mt-4 text-center ${
            statusMessage.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default CommentForm;


