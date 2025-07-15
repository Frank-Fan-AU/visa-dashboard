import { Divider } from "antd";
import CardCarousel from "../dashboard/CardCarousel";

const cards = [
    {
      type: 'donate' as const,
      avatar: '/zj-avator.jpg',
      name: '张先生',
      amount: '¥100',
      content: '感谢您的支持！'
    },
    {
      type: 'donate' as const,
      avatar: '/Arabella-avator.jpg',
      name: 'Arabella',
      amount: '¥50',
      content: '继续加油！'
    },
    {
      type: 'image' as const,
      image: '/zj-donate.JPG',
      alt: '微信赞赏码'
    },
    {
      type: 'image' as const,
      image: '/Arabella-reward.jpg',
      alt: '支付宝收款码'
    },
    {
      type: 'donate' as const,
      avatar: '/bq-avator.jpg',
      name: 'BQ',
      amount: '¥200',
      content: '项目很棒！'
    }
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
      <CardCarousel cards={cards} speed={60} />
    </div>
  );
}