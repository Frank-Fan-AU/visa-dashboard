'use client'
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Message } from "../interface";
import { Send } from "lucide-react";

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
    <div className="flex items-center  bg-white rounded-xl shadow px-2 mx-2 py-2">
    <textarea
      className="flex-grow p-2 bg-transparent outline-none resize-none placeholder-gray-500"
      placeholder="Write a message..."
      value={content}
    onChange={handleContentChange}
    ></textarea>
    <button className="ml-2 p-2"  onClick={handleSubmit}>
    <Send />
    </button>
  </div>
  )
};

export default MessageInput;
