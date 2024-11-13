'use client'
import { useState } from "react";
import { useUser } from "@clerk/nextjs";


const MessageInput = () => {
    const [messageContent, setMessageContent] = useState("");
    const { user } = useUser();
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageContent(event.target.value);
  };

  const handleSubmit = async () => {
    if (!messageContent.trim()) return; // Prevent empty messages
    // Create the message payload
    const newMessage = {
      userAvatar: user?.imageUrl, // Set actual user avatar URL
      username: user?.username ? user?.username : user?.id, // Set the actual username
      content: messageContent,
      comments: [],
      likes: 0,
      updateTime: new Date()
    };
    
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        console.log("Message submitted successfully");
        setMessageContent(""); // Clear the textarea
      } else {
        console.error("Error submitting message");
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow px-4 py-2">
    <textarea
      className="flex-grow p-2 bg-transparent outline-none resize-none placeholder-gray-500"
      placeholder="Write a message..."
      value={messageContent}
          onChange={handleInputChange}
    ></textarea>
    <button className="ml-2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800"  onClick={handleSubmit}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M3 10l6 6v-5h4v-2H9V4l-6 6z" />
      </svg>
    </button>
  </div>
  )
};

export default MessageInput;
