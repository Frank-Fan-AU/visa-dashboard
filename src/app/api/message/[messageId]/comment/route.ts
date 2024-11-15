import { connectToDb } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/lib/models';
import { CommentSchema } from '@/lib/schema';

export const POST = async (req: NextRequest, { params }: { params: { messageId: string } }) => {
    const { messageId } = params;
    const commentData = await req.json();
  
    // 验证评论数据格式
    const parsedComment = CommentSchema.safeParse(commentData);
    if (!parsedComment.success) {
      return NextResponse.json({ error: parsedComment.error.errors }, { status: 400 });
    }
  
    try {
      await connectToDb();
  
      const newComment = parsedComment.data;
  
      // 添加评论到 message 的 comments 字段
      const updatedMessage = await Message.findByIdAndUpdate(
        messageId,
        { $push: { comments: newComment } },
        { new: true }
      );
  
      if (!updatedMessage) {
        return NextResponse.json({ error: "Message not found" }, { status: 404 });
      }
  
      return NextResponse.json({ data: newComment });
    } catch (error) {
      console.error("Error adding comment:", error);
      return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
    }
  };