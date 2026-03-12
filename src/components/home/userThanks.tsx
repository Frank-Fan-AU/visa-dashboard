import { Divider } from "antd";
import CardCarousel from "../dashboard/CardCarousel";

export const cards = [
    {
      type: 'donate' as const,
      name: 'Won***',
      amount: '¥50',
    },

    {
      type: 'donate' as const,
      name: '嗯？',
      amount: '¥9.99',
      content: '感谢付出，祝我们早日下签🫡'
    },
    {
        type: 'donate' as const,
        name: 'ahi***',
        amount: '¥20',
      },
      {
        type: 'donate' as const,
        amount: '¥5',
      },
      {
        type: 'donate' as const,
        name: 'Amo***',
        amount: '¥100',
        content: '大家都早日下签！'
      },
      {
        type: 'donate' as const,
        name: 'Emp***',
        amount: '¥50',
      },
      {
        type: 'donate' as const,
        name: 'x***',
        amount: '¥10',
      },
      {
        type: 'donate' as const,
        name: '宣小宜',
        amount: '¥100',
        content: '感谢,希望大家一路顺利'
      },
      {
        type: 'donate' as const,
        name: '甘小鹿快快**',
        amount: '¥88',
        content: '感谢感谢，会有好报的'
      },
      {
        type: 'donate' as const,
        name: '奶茶肚',
        amount: '¥6.6',
        content: '感谢你们为留学生提供帮助！助力你们帮助到更多人！'
      },
      {
        type: 'donate' as const,
        name: 'h1蜡笔小新杜',
        amount: '¥20',
        content: '提前祝愿我能够秒签！'
      },
      {
        type: 'donate' as const,
        name: '匿名用户',
        amount: '¥100',
        content: '感谢你们为留学生提供帮助！助力你们帮助到更多人！'
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic1.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic2.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic3.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic4.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic5.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic6.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic7.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic8.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic9.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic10.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic11.png',
      },
      {
        type: 'image' as const,
        image: '/thankspic/thankspic12.png',
      },

  ];


export default function UserThanks() {
  return (
    <div>
          <div className="mt-14 px-8">
    <Divider orientation="left" plain >
    <div className=" text-3xl font-bold">What we get from Users</div>
    </Divider>
    <div className="text-lg text-gray-600 font-medium mt-4 mb-8  leading-relaxed px-4 pl-10">
      We received gratitude in the form of money or private messages, which made us feel warm.
    </div>
    </div>
      <CardCarousel cards={cards} speed={80} />
    </div>
  );
}