import { Message } from "@/lib/models";

export const DELETE = async (req: Request, { params }: { params: { messageId: string; commentId: string } }) => {
    const { messageId, commentId } = params;

    try {
        await Message.updateOne(
            { _id: messageId },
            { $pull: { comments: { _id: commentId } } }
        );
        return new Response("Comment deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting comment", { status: 500 });
    }
};