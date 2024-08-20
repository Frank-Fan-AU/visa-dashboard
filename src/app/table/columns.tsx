"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Record = {
  id: string
  submitTime: String
  endTime:String
  ifIncludedCouple:String
  ifTogether:String
  major:String
  majorType:String
  educationLevel:String
  educationType:String
  submitPlace:String
  ifDIY:String
  infoFrom:String
}

export const columns: ColumnDef<Record>[] = [
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
  },{
    accessorKey: "ifTogether",
    header: "分开递/一起递",
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
    header: "DIY/找中介"
  },
  {
    accessorKey: "infoFrom",
    header: "信息来源",
  },
]
