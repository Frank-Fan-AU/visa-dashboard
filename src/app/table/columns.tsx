"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Record = {
  id: string
  submitTime: String
  getVisaTime:String
  ifIncludedCouple:String
  ifTogether:String
  major:String
  majorType:String
  educationLevel:String
  schoolType:String
  submitPlace:String
}

export const columns: ColumnDef<Record>[] = [
  {
    accessorKey: "submitTime",
    header: "递签时间",
  },
  {
    accessorKey: "getVisaTime",
    header: "下签时间",
    cell(props) {
      return  props.getValue() === "" ? "未下签" : props.getValue()
    },
  },
  {
    accessorKey: "ifIncludedCouple",
    header: "是否含陪读",
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
    accessorKey: "educationLevel",
    header: "本/硕/博",
  },
  {
    accessorKey: "schoolType",
    header: "八大/其他",
  },
  {
    accessorKey: "submitPlace",
    header: "境内境外递交",
  }
]
