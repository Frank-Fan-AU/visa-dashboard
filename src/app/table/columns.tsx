"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  submitTime: String
  endTime:String
  ifIncludedCouple:Boolean
  ifTogether:Boolean
  major:String
  majorType:String
  educationLevel:String
  educationType:String
  submitPlace:String
  ifDIY:Boolean
  infoFrom:String
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "submitTime",
    header: "递签时间",
    
  },
  {
    accessorKey: "endTime",
    header: "下签时间",

  },
  {
    accessorKey: "ifIncludedCouple",
    header: "是否含陪读",
    cell: ({ row }) => {
      let value = ""
      if (row.getValue("ifIncludedCouple") === true) {
        value = "是"
      }else{
        value = "否"
      }
      return <div suppressHydrationWarning>{value}</div>;
    }
  },{
    accessorKey: "ifTogether",
    header: "分开递/一起递",
    cell: ({ row }) => {
      let value = ""
      if (row.getValue("ifTogether") === true) {
        value = "一起递"
      }else{
        value = "分开递"
      }
      return <div suppressHydrationWarning>{value}</div>;
    }
  },
  {
    accessorKey: "major",
    header: "主申专业",
  },
  {
    accessorKey: "majorType",
    header: "三宝/其他",
  },
  {
    accessorKey: "educationType",
    header: "八大/其他",
  },
  {
    accessorKey: "educationLevel",
    header: "本/硕/博",
  },
  {
    accessorKey: "submitPlace",
    header: "境内境外递交",
  },
  {
    accessorKey: "ifDIY",
    header: "DIY/找中介",
    cell: ({ row }) => {
      let value = ""
      if (row.getValue("ifDIY") === true) {
        value = "DIY"
      }else{
        value = "找中介"
      }
      return <div suppressHydrationWarning>{value}</div>;
    }
  },
  {
    accessorKey: "infoFrom",
    header: "信息来源",
  },
]
