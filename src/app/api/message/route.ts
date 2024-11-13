import { NextResponse } from "next/server";
import { z } from "zod";
import mongoose, { Schema, model, models } from 'mongoose';
import { connectToDb } from "@/lib/utils";

// Define your Zod schema for validation
const CommentSchema = z.object({
    _id: z.string().optional(),
    userAvatar: z.string().url(),
    username: z.string(),
    content: z.string(),
    likes: z.number().nonnegative(),
    updateTime: z.preprocess((arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg), z.date())
});

const MessageSchema = z.object({
    _id: z.string().optional(),
    userAvatar: z.string().url(),
    username: z.string(),
    content: z.string(),
    comments: z.array(CommentSchema),
    likes: z.number().nonnegative(),
    updateTime: z.preprocess((arg) => (typeof arg === 'string' || arg instanceof Date ? new Date(arg) : arg), z.date())
});

// Define Mongoose schema for MongoDB
const mongooseMessageSchema = new Schema({
    userAvatar: { type: String, required: true },
    username: { type: String, required: true },
    content: { type: String, required: true },
    comments: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }], default: [] },
    likes: { type: Number, default: 0 },
    updateTime: { type: Date, default: Date.now }
});

// Check if model exists, otherwise create it
const Message = models.Message || model('Message', mongooseMessageSchema);

export const POST = async (request: Request) => {
    try {
        await connectToDb();
        const body: unknown = await request.json();
        console.log("Received message data:", body);
        const params = MessageSchema.safeParse(body);
        if (!params.success) {           
            throw new Error(params.error.issues[0].message); 
        } else {
            // Create and save the new message
            const newMessage = new Message(params.data);
            await newMessage.save();
            return NextResponse.json({ message: "Message saved successfully", data: newMessage }, { status: 201 });
        }

       
    } catch (error) {
        throw new Error((error as Error).message);
    }
};

export const GET = async (req: Request) => {
    try {
      await connectToDb();
      const url = new URL(req.url);
      const limit = parseInt(url.searchParams.get("limit") || "10", 10);
      const skip = parseInt(url.searchParams.get("skip") || "0", 10);
  
      // Query messages with pagination
      const messages = await Message.find({})
        .sort({ updateTime: -1 }) // Sort by newest first
        .skip(skip)
        .limit(limit);
  
      return NextResponse.json({ data: messages });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
          }
    }
  };