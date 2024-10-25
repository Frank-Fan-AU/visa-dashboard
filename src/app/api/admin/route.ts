import { NextResponse } from "next/server";
import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { formSchema } from "@/lib/schema";

export const GET = async () => {
  try {
    connectToDb();
    const records = await Record.find();

    return NextResponse.json(records);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const POST = async (request: Request) => {
  try {
    connectToDb();
    const body: unknown = await request.json();
    const params = formSchema.safeParse(body);
    console.log(params);
    if (!params.success) {
      throw new Error(params.error.issues[0].message);
    }
    let res = await Record.create(params.data);

    return NextResponse.json({});
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export async function DELETE(request: Request) {
  try {
    await connectToDb();
    // 获取请求中的 id
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }
    const record = await Record.findByIdAndDelete(id);
    if (!record) {
      return NextResponse.json({ error: "Record not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Record deleted successfully" });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

 export async function PUT(request:Request){
  try {
    // 1. 连接到数据库
    await connectToDb();

    // 2. 解析请求体
    const body: unknown = await request.json();

    // 3. 使用 Zod 验证请求体数据
    const params = formSchema.safeParse(body);
    if (!params.success) {
      throw new Error(params.error.issues[0].message);
    }

    // 4. 获取更新数据中的 ID，并更新数据库记录
    const { _id, ...updateData } = params.data;
    const updatedRecord = await Record.findByIdAndUpdate(_id, updateData, { new: true });

    if (!updatedRecord) {
      return NextResponse.json({ message: '记录未找到' }, { status: 404 });
    }

    // 5. 返回成功响应
    return NextResponse.json({ message: '记录更新成功', data: updatedRecord });
  } catch (error) {
    console.error('更新记录出错:', error);
    return NextResponse.json({ message: '服务器错误', error: (error as Error).message }, { status: 500 });
  }
 }
