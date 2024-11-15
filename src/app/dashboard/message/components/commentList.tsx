import { Comment } from "../interface";
import CommentItem from "./commentItem";

// CommentList 组件的 Props 类型
interface CommentListProps {
    messageId?:string;
    comments: Comment[];
    currentUserId?: string;
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>; // 更新评论状态
}


export const CommentList = ({messageId, comments,currentUserId,setComments }: CommentListProps) => {
    const handleDeleteComment = async (commentId:string) => {
        // 调用 API 删除评论
        await fetch(`/api/message/${messageId}/comment/${commentId}`, { method: "DELETE" });
        // 更新评论列表
        setComments((prevComments) =>
            prevComments.filter((comment) => comment._id !== commentId)
        );
    };
    return (
        <div className="border-t border-gray-200 pt-2">
            {comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} currentUserId={currentUserId} onDelete={handleDeleteComment}/>
            ))}
        </div>
    );
};

