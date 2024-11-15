import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";
import { Message } from "@/lib/models";
import { MessageSchema } from "@/lib/schema";

export const POST = async (request: Request) => {
    try {
        await connectToDb();
        const body: unknown = await request.json();
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
    const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
    try {
      await connectToDb();
     
      // Query messages with pagination
      const messages = await Message.find({})
        .skip((page - 1) * limit)
      .limit(limit)
      .sort({ updateTime: -1 });;
  
      return NextResponse.json({ data: messages });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
          }
    }
  };