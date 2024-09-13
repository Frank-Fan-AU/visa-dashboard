"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Link from "next/link";
import { message } from "antd";

export default function RightPart() {
  const [messageApi, contextHolder] = message.useMessage(); // 使用 message 组件
  const handleClick = () => {
    messageApi.info(
      "处于设计阶段，暂未开发完成，敬请期待。签证记录表已开发完成，可以点击查看。"
    );
  };
  return (
    <>
      {contextHolder}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pt-8">
        <div
          onClick={handleClick}
          className="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px]">
          <WobbleCard
            containerClassName="bg-pink-800 h-full"
            className=""
            key={"1"}>
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                留学中介红黑榜
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                可以在这里分享你的留学中介经历，让大家知道谁值得信赖，谁需要谨慎选择。
              </p>
            </div>
          </WobbleCard>
        </div>
        <div onClick={handleClick} className="col-span-1 min-h-[300px]">
          <WobbleCard containerClassName="h-full" key={"2"}>
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              材料准备清单
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              分享签证流程、准备了哪些材料，以及如何准备这些材料。
            </p>
          </WobbleCard>
        </div>

        <Link
          href="/dashboard/table"
          className="col-span-1 lg:col-span-3 h-[300px]">
          <WobbleCard containerClassName="bg-blue-900 h-full" key={"3"}>
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                签证记录表
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                从各个微信群、小红书统计下来的签证记录表，可以帮助您了解各专业、陪读/单独、境内/境外的批签进度
              </p>
            </div>
            <Image
              src="/wobbleImage.png"
              width={400}
              height={400}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-4 object-contain rounded-2xl"
            />
          </WobbleCard>
        </Link>
      </div>
    </>
  );
}
