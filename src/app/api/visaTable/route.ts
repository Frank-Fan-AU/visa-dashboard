import { NextResponse } from "next/server";
import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { formSchema } from "@/lib/schema";

export const GET = async (req: Request) => {
  try {
    await connectToDb();
    const url = new URL(req.url);
    const params = new URLSearchParams(url.search);
    const paginationCurrent = params.get('pagination[current]');
    const paginationPageSize = params.get('pagination[pageSize]');
    // 将值转换为整数，确保它们是数字
    const current = parseInt(paginationCurrent || "1", 10); // 默认值为 1
    const pageSize = parseInt(paginationPageSize || "10", 10); // 默认值为 10
    const sortField = url.searchParams.get("sortField") || "getVisaTime";
    const sortOrder = url.searchParams.get("sortOrder") === "ascend" ? 1 : -1;

    console.log('sortField',sortField)
    console.log('sortOrder',sortOrder)
    // 分页与排序
    const records = await Record.find()
      .sort({ [sortField]: sortOrder })
      .skip((current - 1) * pageSize)
      .limit(pageSize);

    // 获取总条目数
    const totalRecords = await Record.countDocuments();

    return NextResponse.json({
      data: records,
      current,
      totalPages: Math.ceil(totalRecords / pageSize),
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
