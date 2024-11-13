'use client'
import { useEffect, useState } from "react";
import MessageInput from "./components/messageInput";
import MessageItem from "./components/messageItem";
import { Message } from "./interface";

  
const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    setLoading(true);
    const response = await fetch(`/api/message?limit=10&skip=${page * 10}`);
    const { data } = await response.json();
    setMessages((prevMessages) => [...prevMessages, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, [page]);

  // Infinite scroll: load more when reaching the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// Call the API to add a new message and update the messages list
const handleNewMessage = async (newMessage: Message) => {
  try {
    // Send the new message to the API to be stored in the database
    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });

    const savedMessage = await response.json();
    console.log('saveMessage',savedMessage)
    setMessages((prevMessages) => [savedMessage.data,...prevMessages]);
  } catch (error) {
    console.error("Error adding message:", error);
  }
};


    return (
        <div className="flex flex-col h-screen overflow-hidden">
          {/* 留言列表展示区 */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">留言板</h2>
            <div className="space-y-4">

              {messages.map((message) => (
          <MessageItem key={message._id} message={message} />
        ))}
        {loading && <p>Loading more messages...</p>}
            </div>
          </div>
    
          {/* 留言输入区 */}
      <div className="p-2 bg-gray-50 border-t border-gray-300">
       <MessageInput onSubmit={handleNewMessage} />
      </div>
        </div>
      );
};

export default Page;
