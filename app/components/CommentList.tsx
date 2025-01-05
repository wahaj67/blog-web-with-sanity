"use client";

import { Comments } from "@/sanity/types/blog";
import React, { useState, useEffect } from "react";

const CommentList = ({ postSlug}: { postSlug: string }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comment?postSlug=${postSlug}`, {
            method: "GET",
          });
          const data = await response.json();
          console.log(data,"dataaa");
          
          if (data?.success) {
            console.log("Fetched comments:", data.comments);
            setComments(data?.comments);
          } else {
            console.error("Error:", data.message);
          }
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false); 
      }
    };
   
    fetchComments();
  
  }, [postSlug]); 

  

   
  console.log(comments,"comments")
 
  if (comments.length === 0) {
    return <p>No comments yet. Be the first to comment!</p>;
  }


  // Display comments
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment: Comments) => (
          <li key={comment._id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
            <p className="text-sm text-gray-500 mb-1">
              <strong>{comment?.name}</strong>  {new Date(comment?._createdAt).toLocaleDateString()}
            </p>
            <p className="text-black font-extrabold text-3xl">{comment?.email}</p> 
            <p className="text-gray-800">{comment?.message
            }</p>
             
          </li>
          
        ))}
      </ul>
      
    </div>
  );
};

export default CommentList;
