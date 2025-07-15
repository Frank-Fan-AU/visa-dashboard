'use client';

import { useEffect, useRef, useState } from 'react';
import DonateCard from './DonateCard';

interface CardData {
  type: 'donate' | 'image';
  avatar?: string;
  name?: string;
  amount?: string;
  content?: string;
  image?: string;
  alt?: string;
}

interface CardCarouselProps {
  cards: CardData[];
  speed?: number; // 滚动速度，单位像素/秒
}

export default function CardCarousel({ cards, speed = 30 }: CardCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (!containerRef.current || isPaused) return;

    const interval = setInterval(() => {
      setTranslateX(prev => {
        // 每个卡片宽度大约是 320px + 24px gap = 344px
        const cardWidth = 344;
        const totalWidth = cards.length * cardWidth;
        
        const newPosition = prev - (speed / 60); // 60fps
        
        // 当滚动到第一组卡片的末尾时，重置到开始位置
        if (Math.abs(newPosition) >= totalWidth) {
          return 0;
        }
        
        return newPosition;
      });
    }, 1000 / 60); // 60fps

    return () => clearInterval(interval);
  }, [speed, isPaused, cards.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={containerRef}
        className="flex gap-6 py-4"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isPaused ? 'transform 0.3s ease-out' : 'none'
        }}
      >
        {/* 第一组卡片 */}
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0">
            <DonateCard {...card} setIsPaused={setIsPaused} />
          </div>
        ))}
        
        {/* 复制卡片实现无缝循环 */}
        {cards.map((card, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <DonateCard {...card} setIsPaused={setIsPaused} />
          </div>
        ))}
      </div>
      
      {/* 渐变遮罩效果 */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
} 