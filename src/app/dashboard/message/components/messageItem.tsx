'use client'

import { useState, useRef, useEffect } from 'react';
import { MessageCircleMore,Send } from 'lucide-react';
import { Comment, Message } from '../interface';
import { useUser } from "@clerk/nextjs";
import { CommentList } from './commentList';
import { formatDate } from '@/lib/utils';


// MessageItem 组件的 Props 类型
interface MessageItemProps {
    message: Message;
    currentUserId?: string;
    onDelete: (messageId: string) => void; // 定义删除函数的类型
}




const MessageItem = ({ message, currentUserId, onDelete }: MessageItemProps) => {
    const isCurrentUserMessage = message.userId === currentUserId;

    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);//true是展开状态
    const [showReadMore, setShowReadMore] = useState(false); //是否显示阅读全文
    const contentRef = useRef<HTMLParagraphElement | null>(null);
    const toggleExpand = () => setIsExpanded((prev) => !prev);
    const { isSignedIn, user } = useUser();
    const [commentText, setCommentText] = useState(""); //评论输入框
    const [comments, setComments] = useState<Comment[]>(message.comments);

    const formattedDate = formatDate(new Date(message.updateTime));

    useEffect(() => {
        // 检查内容高度是否超过两行
        if (contentRef.current) {
            // 暂时移除 line-clamp 样式以测量完整内容高度
            contentRef.current.classList.remove('line-clamp-2');

            const lineHeight = parseFloat(getComputedStyle(contentRef.current).lineHeight);
            const maxHeight = lineHeight * 2;
            if (contentRef.current.scrollHeight > maxHeight) {
                setShowReadMore(true);
            }
            // 检查完成后，恢复 line-clamp 样式
            contentRef.current.classList.add('line-clamp-2');
        }
    }, [message.content]);

    // 提交评论
  const handleCommentSubmit = async () => {
    if (!commentText.trim()) return;

    const newComment = {
      userId: user?.id,
      userAvatar: user!.imageUrl,
      username: user?.username ? user.username : user!.id,
      content: commentText,
      likes: 0,
      updateTime:new Date()
    };

    const response = await fetch(`/api/message/${message._id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    const savedComment = await response.json();
    setComments((prev) => [savedComment.data, ...prev]);
    setCommentText("");
  };


    return (
        <div className="bg-white p-2 rounded shadow mb-4 border border-gray-200 w-full">
            {/* 用户信息和留言内容 */}
            <div className="flex items-center">
                <img
                    src={message.userAvatar}
                    alt={`${message.username}'s avatar`}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div className=" w-full max-w-full overflow-auto">
                    <div className="font-semibold text-lg flex flex-row items-center">{message.username}<div className='text-gray-400 text-xs ml-2'>{formattedDate}</div></div>
                    {/* <p className="text-gray-700 mt-1 mb-2">{message.content}</p> */}
                    <div ref={contentRef} className={`w-full text-gray-700 mt-1 mb-2 ${isExpanded ? '' : 'line-clamp-2'} break-words`}>{message.content}
                        
                    </div>

                </div>
            </div>



            {/* 底部交互区域 */}
            <div className="flex items-center justify-between mt-2 text-gray-500">
                <div className="flex items-center">

                    <button
                        className="text-gray-500 ml-4 text-sm hover:underline flex flex-row items-center"
                        onClick={() => setIsCommentsVisible(!isCommentsVisible)}
                    >
                        <MessageCircleMore className=" h-4" />
                        {isCommentsVisible ? '收起评论' : message.comments.length + '条评论'}
                    </button>
                    <span className="ml-4"></span>
                </div>
                <div className="flex items-center space-x-4">

                    {/* 显示删除按钮 */}
                    {isCurrentUserMessage && (
                        <button
                            className="text-red-500 text-sm hover:underline"
                            onClick={() => onDelete(message._id as string)}
                        >
                            删除
                        </button>
                    )}
                    {showReadMore && (
                        !isExpanded ? (
                            <button onClick={toggleExpand} className="text-blue-500 text-sm">
                                阅读全文
                            </button>
                        ) : (
                            <button onClick={toggleExpand} className="text-blue-500 text-sm">
                                收起
                            </button>
                        )
                    )

                    }
                </div>
            </div>

            {/* 评论区 */}
            {isCommentsVisible && (
                <div className='mt-2'>
                    {isSignedIn && (
                        <div className="flex items-center bg-white  shadow px-4 rounded-md mb-2">
                            <input
                            className='flex-grow p-2 bg-transparent outline-none resize-none '
                                type="text"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="输入评论"
                            />
                            <button className="ml-2"  onClick={handleCommentSubmit}><Send /></button>
                            
 
                        </div>
                    )}
                    <CommentList messageId={message._id} comments={comments} setComments={setComments} currentUserId={currentUserId}  />
                </div>

            )}
        </div>
    );
};

export default MessageItem;

