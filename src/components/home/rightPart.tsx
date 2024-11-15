"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Link from "next/link";
import { message } from "antd";

export default function RightPart() {
  const [messageApi, contextHolder] = message.useMessage(); // 使用 message 组件

  return (
    <>
      {contextHolder}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pt-8">
        <Link href="/dashboard/doc"
          
          className="col-span-1 lg:col-span-2 h-full  min-h-[300px]">
          <WobbleCard
            containerClassName="bg-pink-800 h-full"
            className=""
            key={"1"}>
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              递签攻略
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
              分享与递签相关的材料准备清单、表格填写、文书模板、体检预约流程以及递签系统的填写步骤等，希望给还未递签的朋友一些参考！
              </p>
            </div>
          </WobbleCard>
        </Link>
        <div 
        className="col-span-1 min-h-[300px]">
          <Link href="/dashboard/message">
           <WobbleCard containerClassName="h-full" key={"2"}>
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              留言板
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            欢迎大家给我们留言，无论是等签过程中的吐槽，还是下签之后的心得，又或者是对我们网站的改进建议，都欢迎写下来与我们分享！
            </p>
          </WobbleCard>
          </Link>
        </div>


        <Link
          href="/dashboard/table"
          className="col-span-1 lg:col-span-3 h-[300px]">
          <WobbleCard containerClassName="bg-blue-900 h-full" key={"3"}>
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                递签统计表
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              这里是我们从各个下签贴、等签群中搜集来的递签信息，希望给大家一些参考！
              </p>
            </div>
            <Image
              src="/wobbleImage.png"
              width={400}
              height={400}
              alt="linear demo image"
              className="absolute -right-[40%] md:-right-[40%] lg:-right-[20%] -bottom-[30%] object-contain rounded-2xl"
            />
          </WobbleCard>
        </Link>
      </div>
    </>
  );
}
