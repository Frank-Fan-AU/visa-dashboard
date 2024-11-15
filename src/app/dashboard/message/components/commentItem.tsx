import { formatDate } from "@/lib/utils";
import { Comment } from "../interface";

// CommentItem 组件的 Props 类型
interface CommentItemProps {
    comment: Comment;
    currentUserId?: string;
    onDelete: (commentId:string) => void; // 定义删除函数的类型
}


const CommentItem = ({ comment,currentUserId,onDelete }: CommentItemProps) => {
    const isCurrentUser = currentUserId === comment.userId;
    const formattedDate = formatDate(new Date(comment.updateTime));
    return (
        <div className="flex items-start mb-1">
            <img
                src={comment.userAvatar}
                alt={`${comment.username}'s avatar`}
                className="w-8 h-8 rounded-full mr-3"
            />
            <div>
                <div className="font-semibold text-sm flex flex-row items-center">{comment.username} <div className="ml-2 text-xs text-gray-400">{formattedDate}</div></div>
                <p className="text-gray-600 text-sm">{comment.content}</p>
            </div>
            {isCurrentUser && (
                <button
                    onClick={()=>onDelete(comment._id as string)}
                    className="ml-auto text-sm text-red-500 hover:underline mt-2"
                >
                    删除
                </button>
            )}
        </div>
    );
};

export default CommentItem