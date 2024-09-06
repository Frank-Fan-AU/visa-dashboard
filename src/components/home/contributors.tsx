"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "ZeJie",
    designation: "Developer",
    image:"/avatarFzj.JPG",
  },
  {
    id: 2,
    name: "BingQI",
    designation: "Information Collector",
    image:"/avatarBQ.png",
  },
  
];

export default function Contributors() {
  return (
    <div className="flex flex-row items-center justify-start w-3/4 mt-12 ml-4">
      <div className="text-2xl font-bold mr-4">Contributers:</div>
      <AnimatedTooltip items={people} />
    </div>
  );
}
