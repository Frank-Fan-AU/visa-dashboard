import MessageInput from "./components/messageInput";
import MessageItem from "./components/messageItem";
import { Message } from "./interface";

// 用于测试的假数据
const sampleMessages: Message[] =
[
  {
    _id:'1',
    userAvatar: '/avatarFzj.JPG',
    username: 'John Doe',
    content: '这是一段比较短的文字，我不希望展示阅读全文按钮',
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
    likes:20,
    updateTime:new Date("2024-10-11 09:00:00"),
  },{
    _id:'2',
    userAvatar: '/avatarFzj.JPG',
    username: 'John Doe',
    content: '我想测试一下这个能写多长,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行,测试数据超过两行，,测试数据超过两行,测试数据超过两行,测试数据超过两行，,测试数据超过两行,测试数据超过两行,测试数据超过两行文字尾部',
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
    likes:20,
    updateTime:new Date("2024-10-11 10:00:00"),
  }
] 

  
const Page = () => {
    return (
        <div className="flex flex-col h-screen">
          {/* 留言列表展示区 */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <h2 className="text-xl font-semibold mb-4">留言板</h2>
            <div className="space-y-4">

              {sampleMessages.map(message => <MessageItem key={message._id} message={message} />)}

            </div>
          </div>
    
          {/* 留言输入区 */}
      <div className="p-4 bg-gray-50 border-t border-gray-300">
       <MessageInput/>
      </div>
        </div>
      );
};

export default Page;
