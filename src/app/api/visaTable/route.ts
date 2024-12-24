import { NextResponse } from "next/server";
import { Record } from "@/lib/models";
import { connectToDb } from "@/lib/utils";

export const GET = async (req: Request) => {
  
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);

  try {
    await connectToDb();
    
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
    const values = filterConditions[key];
    console.log('VALUES',values)
    if (Array.isArray(filterConditions[key]) && filterConditions[key].length > 1) {
      // 如果有多个值，使用 $or 和 $regex 实现模糊搜索
    filterConditions[key] = {
      $or: values.map((val: string) => ({
        [key]: { $regex: val, $options: "i" },
      })),
    };
    } else {
      // 单个值也使用 $regex 实现模糊搜索
    filterConditions[key] = { $regex: values[0], $options: "i" };
    }
  });
  
    // 分页与排序
    const records = await Record.find(filterConditions)
      .sort(
        sortField === "getVisaTime" 
          ? { [sortField]: sortOrder, submitTime: -1 } // getVisaTime排序时，submitTime降序
          : sortField === "submitTime"
            ? { [sortField]: sortOrder, getVisaTime: -1 } // submitTime排序时，getVisaTime升序
            : { [sortField]: sortOrder } // 其他字段保持单一排序
      )
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

