import { Comment } from "../interface";

// CommentItem 组件的 Props 类型
interface CommentItemProps {
    comment: Comment;
    currentUserId?: string;
    onDelete: (commentId:string) => void; // 定义删除函数的类型
}


const CommentItem = ({ comment,currentUserId,onDelete }: CommentItemProps) => {
    const isCurrentUser = currentUserId === comment.userId;
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