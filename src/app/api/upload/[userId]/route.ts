import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

type Params = {
  userId: string;
};
export async function GET(request: Request, { params }: { params: Params }) {
  try {
    // 连接数据库
    await connectToDb();

    // 获取路径参数中的 userId
    const userId = params.userId;

    // 查询数据库中是否存在该 userId 的记录
    //const recordExists = await Record.exists({ userId });
    const record = await Record.findOne({ userId });
    // 返回结果，如果有记录返回 true，没有则返回 false
    if (record) {
      return NextResponse.json({ exists: true, data: record });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    console.error("Error fetching record:", error);
    return NextResponse.json(
      { error: "Error fetching record" },
      { status: 500 }
    );
  }
}
