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
    const pageSize = parseInt(paginationPageSize || "50", 10); // 默认值为 10
    const sortField = url.searchParams.get("sortField") || "getVisaTime";
    const sortOrder = url.searchParams.get("sortOrder") === "ascend" ? 1 : -1;

   // 动态构建筛选条件，支持多选并跳过空值
   const filterConditions: Record<string, any> = {};
   params.forEach((value, key) => {
     if (key.startsWith("filters[")) {
       const filterKey = key.slice(8, -1); // 提取过滤器的字段名称
       if (value) { // 检查值是否为空字符串
         if (!filterConditions[filterKey]) {
           filterConditions[filterKey] = [];
         }
         filterConditions[filterKey].push(value); // 添加到数组
       }
     }
   });
   // 将数组条件转化为 MongoDB 的 $in 操作符
   Object.keys(filterConditions).forEach((key) => {
    if (Array.isArray(filterConditions[key]) && filterConditions[key].length > 1) {
      filterConditions[key] = { $in: filterConditions[key] };
    } else {
      // 如果只有一个值，直接匹配该值
      filterConditions[key] = filterConditions[key][0];
    }
  });
    // 分页与排序
    const records = await Record.find(filterConditions)
      .sort({ [sortField]: sortOrder })
      .skip((current - 1) * pageSize)
      .limit(pageSize);

    // 获取总条目数
    const totalRecords = await Record.countDocuments(filterConditions);

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

