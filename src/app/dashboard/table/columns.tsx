"use client"

import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react";
import { DetailModal } from "./detailModal";

// 计算日期差的函数
const calculateDaysBetween = (start: string, end: string) => {
  if (!start || !end) return "未计算"; // 如果没有日期，返回提示信息
  const startDate = new Date(start);
  const endDate = new Date(end);
  
  // 计算相差的天数
  const diffTime = endDate.getTime() - startDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 转换为天数
  return diffDays >= 0 ? `${diffDays} 天` : "未下签";
};
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Record = {
  id: string
  submitTime: string
  getVisaTime:string
  visaOfficer:string
  ifIncludedCouple:string
  ifTogether:string
  major:string
  majorType:string
  educationLevel:string
  schoolType:string
  submitPlace:string
}

export const columns: ColumnDef<Record>[] = [
  {
    accessorKey: "submitTime",
    header: "递签日期",
    sortUndefined: "last",
  },
  {
    accessorKey: "getVisaTime",
    header: "下签日期",
    sortDescFirst: false,
    sortUndefined: "last",
    
    cell(props) {
      return  props.getValue() === "" ? "未下签" : props.getValue()
    },
  },
  {
    header: "签证处理时间", // 新增一列展示相隔天数
    cell: (props) => {
      const submitTime = props.row.original.submitTime;
      const getVisaTime = props.row.original.getVisaTime;
      return calculateDaysBetween(submitTime, getVisaTime);
    },
  },
  {
    accessorKey: "visaOfficer",
    header: "签证官",
  },
  {
    accessorKey: "major",
    header: "专业",
  },
  {
    accessorKey: "submitPlace",
    header: "递签地点",
  },
  {
    accessorKey: "ifIncludedCouple",
    header: "是否含陪读",
    cell: ({ getValue }) => {
      const value = getValue() 
      if(value === "true"){
        return "含陪读"
      } else{
        return "单独"
      }
    },
  },
  {
    id: "details",
    header: "详情",
    cell: ({ row }) => {
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [selectedData, setSelectedData] = useState<any>(null);

      const showModal = () => {
        setSelectedData(row.original);
        setIsModalVisible(true);
      };

      const handleClose = () => {
        setIsModalVisible(false);
      };

      return (
        <>
          <button onClick={showModal} className="btn-details">查看详情</button>
          {isModalVisible && <DetailModal data={selectedData} onClose={handleClose} />}
        </>
      );
    },
  },
  // {
  //   accessorKey: "majorType",
  //   header: "三宝/其他",
  // },
  // {
  //   accessorKey: "educationLevel",
  //   header: "本/硕/博",
  // },
]
