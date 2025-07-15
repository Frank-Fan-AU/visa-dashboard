'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface DonateCardProps {
  type: 'donate' | 'image';
  avatar?: string;
  name?: string;
  amount?: string;
  content?: string;
  image?: string;
  alt?: string;
}

export default function DonateCard({ 
  type, 
  avatar, 
  name, 
  amount, 
  content, 
  image, 
  alt = "图片" 
}: DonateCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (type === 'image' && image) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <Card className="w-80 h-96 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6 h-full">
          {type === 'donate' ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              {avatar && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={avatar}
                    alt={name || "头像"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {name && (
                <h3 className="text-xl font-semibold text-center text-gray-900">{name}</h3>
              )}
              {amount && (
                <p className="text-2xl font-bold text-green-600">{amount}</p>
              )}
              {content && (
                <p className="text-sm text-gray-600 text-center leading-relaxed">{content}</p>
              )}
            </div>
          ) : (
            <div 
              className="w-full h-full relative cursor-pointer"
              onClick={handleImageClick}
            >
              {image && (
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover rounded-lg"
                />
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 图片弹窗 - 使用原生 Portal 确保完全独立 */}
      {mounted && isModalOpen && image && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-[70vw] max-h-[40vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image}
              alt={alt}
              width={600}
              height={450}
              className="object-contain rounded-lg shadow-2xl"
              priority
            />
            <button
              className="absolute -top-3 -right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg border border-gray-200"
              onClick={handleCloseModal}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
} 