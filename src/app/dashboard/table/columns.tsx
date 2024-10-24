"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { DetailModal } from "./detailModal";
import { useUser } from "@clerk/nextjs";
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
  _id: string;
  submitTime: string;
  getVisaTime: string;
  visaOfficer: string;
  ifIncludedCouple: string;
  ifTogether: string;
  major: string;
  majorType: string;
  educationLevel: string;
  schoolType: string;
  submitPlace: string;
};



export const getColumns = (handleDelete: (id: string) => void): ColumnDef<Record>[] => [
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
      return props.getValue() === "" ? "未下签" : props.getValue();
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
    accessorKey: "educationLevel",
    header: "本硕博",
  },
  {
    accessorKey: "major",
    header: "专业",
    cell:(props) => {
  
      if(props.row.original.major.length >= 10){
        const str = props.row.original.major.substring(0,15)

        return str+'...'
      }else{
        return props.row.original.major
      }
      
    }
  },
  {
    accessorKey: "submitPlace",
    header: "递签地点",
  },
  {
    accessorKey: "ifIncludedCouple",
    header: "是否含陪读",
    cell: ({ getValue }) => {
      const value = getValue();
      if (value === "true") {
        return "含陪读";
      } else {
        return "单独";
      }
    },
  },
  {
    id: "details",
    header: "详情",
    cell: ({ row }) => {
      const [isModalVisible, setIsModalVisible] = useState(false);
      const [selectedData, setSelectedData] = useState<any>(null);
      const { user } = useUser();
      const isAdmin = user?.organizationMemberships[0]?.role === "org:admin";
      const showModal = () => {
        setSelectedData(row.original);
        console.log('selectData',selectedData)
        setIsModalVisible(true);
      };

      const handleClose = () => {
        setIsModalVisible(false);
      };
      
      return (
        <>
          <Button
            variant="ghost"
            onClick={showModal}
            className="h-6 w-16 mr-2 ">
            查看详情
          </Button>
          {isModalVisible && (
            <DetailModal data={selectedData} onClose={handleClose} />
          )}
          {isAdmin && (
            <Button
              variant="destructive"
              onClick={() => handleDelete(row.original._id)}
              className="h-6 w-10">
              删除
            </Button>
          )}
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
];
