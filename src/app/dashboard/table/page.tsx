'use client'
import { useState, useEffect } from "react";
import { Record, getColumns } from "./columns";
import { DataTable } from "./data-table";
import { generateFakeRecords } from "@/lib/fakeData";
async function getData(): Promise<Record[]> {
  // Fetch data from your API here.
  let res = await fetch("/api/visaTable", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const deleteRecord = async (id: string) => {
  // 在这里实现删除行的逻辑
  const response = await fetch(`/api/admin?id=${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  if (response.ok) {
    console.log('Document deleted successfully:', data);
  } else {
    console.error('Error deleting document:', data);
  }
};

export default function TablePage() {
  const [data, setData] = useState<Record[]>([]);
  // const fakeRecords = generateFakeRecords(50000);
  useEffect(() => {
    // 初次加载数据
    getData().then((data) => {
      setData(data);
    })
  }, []);

  const handleDelete = async (id: string) => {
    await deleteRecord(id); // 调用删除 API
    const updatedData = await getData(); // 删除后重新获取数据
    setData(updatedData); // 更新表格数据
  };

  const handleEdit = async (formData: Record) => {
    try {
      console.log('Edit formData:', formData);

      // 发送 PUT 请求
      const response = await fetch('/api/admin', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`更新失败: ${response.statusText}`);
      }
      const result = await response.json();
      // 在这里你可以处理更新成功后的逻辑，比如刷新数据或显示成功消息
      const updatedData = await getData();
      setData(updatedData); // 更新表格数据
    } catch (error) {
      console.error('更新失败:', error);
      // 在这里可以处理错误情况，比如显示错误消息
    }
  }

  return (
    <div className="p-2">
      {/* <DataTable columns={columns} data={fakeRecords} /> */}
      <DataTable columns={getColumns({ handleDelete, handleEdit })} data={data} />
    </div>
  );
}
