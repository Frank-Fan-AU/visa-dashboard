import { connectToDb } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';
import { Message } from '@/lib/models';

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
  return NextResponse.json({ message: 'Delete request received' });

}