import { HoverEffect } from "../ui/card-hover-effect";

export const projects = [
  {
    title: "精准签证进度追踪",
    description:
      "通过记录当天下签的人递交的日期，帮助你快速推断自己可能的下签时间，避免频繁刷消息群，轻松安排学习、工作和租房计划。",
  },
  {
    title: "信息集中，无需爬楼",
    description:
      "微信群和小红书的繁琐信息已整合。再也不用在各个微信群小红书群的99+消息中爬楼，获取下签信息和小道消息变得更简单、高效。",
  },
  {
    title: "专注500学签",
    description:
      "我们专注于500学签的签证进度与经验分享，为学生提供最快、最实用的签证信息，节省时间，减少焦虑，专注学习规划。",
  },
  {
    title: "实时下签名单推送",
    description:
      "每日推送最新的学签下签名单，方便快速了解当天的签证情况，不再错过任何重要进度信息。",
  },
];

const NewAboutDesign = () => {
  return (
    <div className="pl-20 pr-4 mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
};

export default NewAboutDesign;
