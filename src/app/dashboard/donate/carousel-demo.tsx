'use client';

import CardCarousel from '@/components/dashboard/CardCarousel';
import useTranslation from "@/hooks/useTranslation";

export default function CarouselDemo() {
  const { t } = useTranslation();

  // 示例数据
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">卡片轮播演示</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">自动轮播（鼠标悬浮暂停）</h2>
        <CardCarousel cards={cards} speed={30} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">快速轮播</h2>
        <CardCarousel cards={cards} speed={60} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">慢速轮播</h2>
        <CardCarousel cards={cards} speed={15} />
      </div>
    </div>
  );
} 