import { NextResponse } from "next/server";
import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { newFormSchema } from "@/lib/schema";

export const GET = async () => {
  try {
    connectToDb();
    const records = await Record.find();

    return NextResponse.json(records);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

// export const POST = async (request: Request) => {
//     try {
//         connectToDb();
//         const body:unknown = await request.json()
//         const params = newFormSchema.safeParse(body)
//         if(!params.success){
//             throw new Error(params.error.issues[0].message)
//         }
//         let res = await Record.create(params.data)

//         return NextResponse.json({})
//     }catch(error){
//         throw new Error((error as Error).message);
//     }
// }

export const POST = async (request: Request) => {
  try {
    await connectToDb();
    const body: unknown = await request.json();
    const params = newFormSchema.safeParse(body);
    if (!params.success) {
      throw new Error(params.error.issues[0].message);
    }
    // 解构获取需要的数据
    const { userId, ...formData } = params.data;
    // 使用 findOneAndUpdate 实现查找并更新（如果没有则插入）
    const res = await Record.findOneAndUpdate(
      { userId }, // 查询条件：根据 userId 查找记录
      { $set: formData }, // 更新的内容
      { upsert: true, new: true } // 如果没有找到记录则插入，返回新的文档
    );
    // 返回成功响应
    return NextResponse.json({ success: true, data: res });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
