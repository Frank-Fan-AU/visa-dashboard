import { HoverEffect } from "../ui/card-hover-effect";
import { Divider } from 'antd';
export const projects = [
  {
    title: "如果您还未递签",
    description:
      "我们分享了一些签证表格的填写步骤和我们整理的签证材料清单与模板，希望能帮助到您，减轻准备过程中的压力。",
  },
  {
    title: "如果您正在等签",
    description:
      "欢迎留下您的递签日期！我们收集了从2024年8月初以来的博士学签出签数据，您可以看到和您递签日期相近或同专业的等签情况，为您提供参考。此外，我们也开设了<赛博许愿池>的板块，可以跟大家一起赛博许愿or发发吐槽，欢迎您的加入。",
  },
  {
    title: "如果您已经下签",
    description:
      "恭喜您下签！欢迎分享您的出签情况和等签心得，给还在等签的小伙伴一些鼓励和参考。根据以往经验，靠个人维护信息往往会随着个人下签而终止更新，如果每个下签的小伙伴动动手指更新下自己的信息就会对等签的人有巨大的帮助，相信已经经历过等签的您深有体会。愿本站薪火相传，生生不息。",
  },
  {
    title: "如何上传和更新个人信息",
    description:
      "注册、登录后在个人信息界面，您可以根据当前签证状态选择“是否递签”或“是否下签”选项。如有信息更新，您可在该界面重新上传。上传后，递签统计表页面将自动更新为最新状态。请注意，每位用户仅能更新自己上传的信息。",
  },
];

const NewAboutDesign = () => {
  return (
    <>
    <div className="mt-14 px-8">
    <Divider orientation="left" plain >
    <div className=" text-3xl font-bold">我们能为您提供什么？</div>
    </Divider>
    </div>
    
      
      <div className="pl-20 pr-4 mx-auto ">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default NewAboutDesign;
