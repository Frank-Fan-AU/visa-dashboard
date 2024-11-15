'use client'
import { useEffect, useState } from "react";
import MessageInput from "./components/messageInput";
import MessageItem from "./components/messageItem";
import { Message } from "./interface";
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  SignInButton,
  useUser,
} from "@clerk/nextjs";

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [page, setPage] = useState(1); // Page number for pagination
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Flag to check if there are more messages
  const { isSignedIn, user } = useUser();
  // Fetch messages
  const fetchMessages = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/message?page=${page}&limit=10`);
      const { data } = await response.json();

      // Append new messages to the existing list
      setMessages((prevMessages) => [...prevMessages, ...data]);

      // Check if there are more messages to load
      if (data.length === 0 || data.length < 10) {
        setHasMore(false); // No more messages to load
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [page]);



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
      setMessages((prevMessages) => [savedMessage.data, ...prevMessages]);
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  const handleDelete = async (messageId: string) => {
    try {
      await fetch(`/api/message/${messageId}`, { method: "DELETE" });
      setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== messageId));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // Function to load the next page
  const loadMoreMessages = () => {
    setPage((prevPage) => prevPage + 1);
  };


  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50" >
      {/* 留言列表展示区 */}
      <div className=" p-4 bg-gray-50 h-screen-minus-120  md:h-screen-minus-100 " >
        <h2 className="text-xl font-semibold mb-4">留言板</h2>
        <div className="space-y-4  overflow-auto" id="scrollableDiv"  style={{
      height:"calc(100% - 30px)"
    }}>
          <InfiniteScroll
            dataLength={messages.length} // This is the length of the currently loaded messages
            next={loadMoreMessages} // This will be triggered when the user scrolls to the bottom
            hasMore={hasMore} // Whether there are more items to load
            loader={<p>Loading more messages...</p>} // Loader when messages are loading
            endMessage={<p>No more messages.</p>} // End message when no more messages are available
            scrollThreshold={0.9} // When 90% of the list is scrolled, trigger next
            scrollableTarget="scrollableDiv" // The target container for the scroll
          >
            {messages.map((message) => (
              <MessageItem key={message._id} message={message} currentUserId={user?.id} onDelete={handleDelete} />
            ))}
          </InfiniteScroll>
        </div>
      </div>

      {/* 留言输入区 */}
      {isSignedIn ? <div className=" bg-gray-50 md:mt-4  h-[80px]">
        <MessageInput onSubmit={handleNewMessage} />
      </div> :
      <button className="p-[3px] relative mt-5 ">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
       <SignInButton forceRedirectUrl={"/dashboard/message"}>登录后留言</SignInButton>
      </div>
    </button>
      }
      
    </div>
  );
};

export default Page;
