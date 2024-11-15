import { connectToDb } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import mongoose, { Schema, model, models } from 'mongoose';

// Define Mongoose schema for MongoDB
const mongooseMessageSchema = new Schema({
    userAvatar: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true },
    comments: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }], default: [] },
    likes: { type: Number, default: 0 },
    updateTime: { type: Date, default: Date.now }
});

// Check if model exists, otherwise create it
const Message = models.Message || model('Message', mongooseMessageSchema);

export const DELETE = async (req: NextRequest, { params }: { params: { messageId: string} }) => {
  const { messageId  } = params;
  try {
    await connectToDb();
    await Message.findByIdAndDelete(messageId);
    return NextResponse.json({ message: 'Message deleted successfully' });
  } catch (error) {
      if (error instanceof Error) {
          return NextResponse.json({ error: error.message }, { status: 500 });
        }
  }
  console.log("Message ID:", messageId);


  return NextResponse.json({ message: 'Delete request received' });

}