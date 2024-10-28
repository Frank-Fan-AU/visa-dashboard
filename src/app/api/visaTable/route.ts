import { NextResponse } from "next/server";
import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { formSchema } from "@/lib/schema";

// export const GET = async () => {
//   try {
//     connectToDb();
//     const records = await Record.find();

//     return NextResponse.json(records);
//   } catch (error) {
//     throw new Error((error as Error).message);
//   }
// };

export const GET = async (req: Request) => {
  try {
    await connectToDb();

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = parseInt(url.searchParams.get("limit") || "10", 10);
    const sortBy = url.searchParams.get("sortBy") || "submitTime";
    const sortOrder = url.searchParams.get("sortOrder") === "desc" ? -1 : 1;

    // 分页与排序
    const records = await Record.find()
      .sort({ [sortBy]: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);

    // 获取总条目数
    const totalRecords = await Record.countDocuments();

    return NextResponse.json({
      data: records,
      page,
      totalPages: Math.ceil(totalRecords / limit),
      totalRecords,
    });
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const POST = async (request: Request) => {
  try {
    await connectToDb();
    const body: unknown = await request.json();
    const params = formSchema.safeParse(body);
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
