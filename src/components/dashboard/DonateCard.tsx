'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

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

  const handleImageClick = () => {
    if (type === 'image' && image) {
      setIsModalOpen(true);
    }
  };

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

      {/* 图片弹窗 */}
      {isModalOpen && image && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-4xl p-4">
            <Image
              src={image}
              alt={alt}
              width={800}
              height={600}
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
} 