'use client'
import useTranslation from "@/hooks/useTranslation";
import { HoverEffect } from "../ui/card-hover-effect";
import { Divider } from 'antd';
// export const projects = [
//   {
//     title: "如果您还未递签",
//     description:
//       "欢迎查看首页的<递签攻略>板块，我们整理了一些递签相关的表格填写步骤、体检预约流程等参考攻略，未来也会分享一些文书撰写模板、材料清单以及递签系统的填写步骤等，希望给还未递签的朋友一些参考",
//   },
//   {
//     title: "如果您正在等签",
//     description:
//       "欢迎查看首页的<Visa-数据看板>，选择<个人递签信息>，上传您的递签日期，在<递签统计表>可以看到有多少朋友正在一起等签，下签了之后也别忘了回来更新信息哦，祝您早日顺利下签！",
//   },
//   {
//     title: "如果您已经下签",
//     description:
//       "欢迎点击首页的<Visa-数据看板>，选择<个人递签信息>，上传您的递签、下签日期，给正在等签的朋友一个参考.",
//   },
//   {
//     title: "如何上传和更新个人信息",
//     description:
//       "首页点击<login to share>注册、登录后，返回主页点击<visa-数据看板>，选择<个人递签信息>，根据个人情况填写，上传成功后，如有情况更新可直接在该界面重新上传，递签统计表会自动更新。\nps：每位用户只能更新自己的递签信息",
//   },
// ];

const NewAboutDesign = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t.homePage.blackCard.card1.title,
      description: t.homePage.blackCard.card1.desc,
    },
    {
      title: t.homePage.blackCard.card2.title,
      description: t.homePage.blackCard.card2.desc,
    },
    {
      title: t.homePage.blackCard.card3.title,
      description: t.homePage.blackCard.card3.desc,
    },
    {
      title: t.homePage.blackCard.card4.title,
      description: t.homePage.blackCard.card4.desc,
    },
  ];
  return (
    <>
    <div className="mt-14 px-8">
    <Divider orientation="left" plain >
    <div className=" text-3xl font-bold">{t.homePage.blackCard.title}</div>
    </Divider>
    </div>
    
      
      <div className=" mx-auto ">
        <HoverEffect items={projects} className=" whitespace-pre-line"/>
      </div>
    </>
  );
};

export default NewAboutDesign;
