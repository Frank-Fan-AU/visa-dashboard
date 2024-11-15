'use client'
import { useState, useRef, useEffect } from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { MessageCircleMore } from 'lucide-react';
import { Comment, Message } from '../interface';


// MessageItem 组件的 Props 类型
interface MessageItemProps {
    message: Message;
    currentUserId?:string;
    onDelete: (messageId: string) => void; // 定义删除函数的类型
}

// CommentList 组件的 Props 类型
interface CommentListProps {
    comments: Comment[];
}

// CommentItem 组件的 Props 类型
interface CommentItemProps {
    comment: Comment;
}

const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-11) and add 1
    const day = String(date.getDate()).padStart(2, "0"); // Get day (1-31)
    const hours = String(date.getHours()).padStart(2, "0"); // Get hours (0-23)
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Get minutes (0-59)
    const seconds = String(date.getSeconds()).padStart(2, "0"); // Get seconds (0-59)
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };


const MessageItem = ({ message,currentUserId,onDelete }: MessageItemProps) => {
    const isCurrentUserMessage = message.userId === currentUserId;

    const [isCommentsVisible, setIsCommentsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);//true是展开状态
    const [showReadMore, setShowReadMore] = useState(false); //是否显示阅读全文
    const contentRef = useRef<HTMLParagraphElement | null>(null);
    const toggleExpand = () => setIsExpanded((prev) => !prev);

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


    return (
        <div className="bg-white p-4 rounded shadow mb-4 border border-gray-200 w-full">
            {/* 用户信息和留言内容 */}
            <div className="flex items-start">
                <img
                    src={message.userAvatar}
                    alt={`${message.username}'s avatar`}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div className=" w-full max-w-full overflow-auto">
                    <h4 className="font-semibold text-lg">{message.username}</h4>
                    {/* <p className="text-gray-700 mt-1 mb-2">{message.content}</p> */}
                    <div ref={contentRef} className={`w-full text-gray-700 mt-1 mb-2 ${isExpanded ? '' : 'line-clamp-2'} break-words`}>{message.content}
                        <p className='text-gray-400 text-sm'>编辑于{formattedDate}</p>
                    </div>

                </div>
            </div>



            {/* 底部交互区域 */}
            <div className="flex items-center justify-between mt-4 text-gray-500">
                <div className="flex items-center">
                    <button className="flex items-center text-blue-500 bg-blue-100 py-1 px-2 rounded-md ">
                        <LikeOutlined /> {/* 替换成合适的点赞图标 */}

                        <span className="ml-1">赞同 {message.likes} </span>
                    </button>
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
                <CommentList comments={message.comments} />
            )}
        </div>
    );
};

export default MessageItem;

const CommentList = ({ comments }: CommentListProps) => {
    return (
        <div className="mt-4 border-t border-gray-200 pt-4">
            {comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
            ))}
        </div>
    );
};

const CommentItem = ({ comment }: CommentItemProps) => {
    return (
        <div className="flex items-start mb-3">
            <img
                src={comment.userAvatar}
                alt={`${comment.username}'s avatar`}
                className="w-8 h-8 rounded-full mr-3"
            />
            <div>
                <h5 className="font-semibold text-sm">{comment.username}</h5>
                <p className="text-gray-600 text-sm">{comment.content}</p>
            </div>
        </div>
    );
};