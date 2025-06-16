"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Image from "next/image";
const people = [
  {
    id: 1,
    name: "ZeJie",
    designation: "Developer",
    image:"/zj-avator.jpg",
    href:"https://frankfan.info"
  },
  {
    id: 2,
    name: "BingQI",
    designation: "Information Collector inital-03/21/2025",
    image:"/bq-avator.jpg",
    href:"https://www.xiaohongshu.com/user/profile/59e978d511be10340721d1d0"
  },
  {
    id: 3,
    name: "乐高哥",
    designation: "Information Collector 03/21/2025-06/16/2025",
    image:"/legaoge.jpg",
    href:""
  },
  
];

export default function Contributors() {
  return (
    <div className="flex flex-row items-center justify-start w-3/4 mt-12 ml-4 lg:relative">
      <div className="lg:text-2xl font-bold mr-4">Contributers:</div>
      <AnimatedTooltip items={people}/>
      <Image className="absolute w-[80px] h-[50px] right-0 lg:absolute lg:w-[100px] lg:h-[60px]  lg:right-20 lg:top-2" src="/clickMe.png" width={80} height={40} alt="click me"/>
    </div>
  );
}
