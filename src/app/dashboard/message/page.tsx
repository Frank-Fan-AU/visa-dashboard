import MessageItem from "./components/messageItem";

// 定义留言项的类型
interface Comment {
    userAvatar: string;
    username: string;
    content: string;
}

// 定义留言消息的类型
interface Message {
    userAvatar: string;
    username: string;
    content: string;
    comments: Comment[];
    likes:number
}

// 用于测试的假数据
const sampleMessage: Message = {
    userAvatar: '/avatarFzj.JPG',
    username: 'John Doe',
    content: '我想测试一下这个能写多长,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行，,测试数据超过两行,测试数据超过两行,测试数据超过两行文字尾部',
    comments: [
      {
        userAvatar: '/avatarBQ.png',
        username: 'Jane Doe',
        content: 'This is a sample comment!',
      },
      {
        userAvatar: '/avatarBQ.png',
        username: 'Tom Smith',
        content: 'This is another sample comment!',
      },
    ],
    likes:20
  };

  
const Page = () => {
    return (
        <div className="flex flex-col h-screen">
          {/* 留言列表展示区 */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">留言板</h2>
            <div className="space-y-4">
              {/* 使用假数据展示留言，可以用 .map() 遍历并渲染每条留言 */}
              <MessageItem message={sampleMessage} />
              <MessageItem message={sampleMessage} />

              {/* ...更多留言 */}
            </div>
          </div>
    
          {/* 留言输入区 */}
      <div className="p-4 bg-gray-100 border-t border-gray-300">
        <div className="flex items-center bg-white rounded-full shadow px-4 py-2">
          <textarea
            className="flex-grow p-2 bg-transparent outline-none resize-none placeholder-gray-500"
            placeholder="Write a message..."
          ></textarea>
          <button className="ml-2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-800">
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
      </div>
        </div>
      );
};

export default Page;
