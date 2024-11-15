'use client'
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Message } from "../interface";

interface MessageInputProps {
    onSubmit: (newMessage: Message) => void;
  }

const MessageInput = ({ onSubmit }: MessageInputProps) => {
    const [content, setContent] = useState<string>("");
    const { user } = useUser();
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
      };

  const handleSubmit = async () => {
    if (!content.trim()) return; // Prevent empty messages
    // Create the message payload
    const newMessage = {
      userAvatar: user!.imageUrl, // Set actual user avatar URL
      userId:user!.id,
      username: user?.username ? user.username : user!.id, // Set the actual username
      content: content,
      comments: [],
      likes: 0,
      updateTime: new Date()
    };
    onSubmit(newMessage);
    setContent("")
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow px-4 py-2">
    <textarea
      className="flex-grow p-2 bg-transparent outline-none resize-none placeholder-gray-500"
      placeholder="Write a message..."
      value={content}
    onChange={handleContentChange}
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
