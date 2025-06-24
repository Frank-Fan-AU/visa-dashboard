'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import useTranslation from "@/hooks/useTranslation";

interface DonorInfo {
  name: string;
  avatar: string;
  wechatQR: string;
  message: string;
}

interface ContributorInfo {
  name: string;
  contribution: string;
  date?: string;
  avatar: string;
}

interface SponsorInfo {
  nickname: string;
  message: string;
}




export default function DonatePage() {
  const {t} = useTranslation();

  const donors: DonorInfo[] = [
    {
      name: t.donate.card1.title,
      avatar: '/zj-avator.jpg',
      wechatQR: '/zj-donate.JPG',
      message: t.donate.card1.desc
    },
    {
      name: t.donate.card2.title,
      avatar: '/Arabella-avator.jpg',
      wechatQR: '/Arabella-reward.jpg',
      message: t.donate.card2.desc
    }
  ];
  
  const contributors: ContributorInfo[] = [
      {
          name: t.donate.card3.title,
          contribution: t.donate.card3.desc,
          date: '网站创立-03/21/2025',
          avatar: '/bq-avator.jpg'
        },
    {
      name: t.donate.card4.title,
      contribution: t.donate.card4.desc,
      date: '03/21/2025-06/16/2025',
      avatar: '/legaoge.jpg'
    },
  ];

  const [sponsors, setSponsors] = useState<SponsorInfo[]>([]);
  useEffect(() => {
    fetch('/api/sponsors')
      .then(res => res.json())
      .then(data => setSponsors(data));
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">{t.donate.title1}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {donors.map((donor, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={donor.avatar}
                      alt={donor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-center">{donor.name}</h2>
                  <p className="text-sm text-gray-600 whitespace-pre-line text-center">{donor.message}</p>
                </div>
                <div className="flex-1 flex flex-col space-y-2">
                 
                  <div className="flex flex-col items-center">
                    <p className="text-xs text-gray-500 mb-1">{t.donate.wechatQR}</p>
                    <div className="relative w-40 h-40">
                      <Image
                        src={donor.wechatQR}
                        alt="微信赞赏码"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 鸣谢栏 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t.donate.title2}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contributors.map((contributor, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={contributor.avatar}
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{contributor.name}</h3>
                  <p className="text-gray-600">{contributor.contribution}</p>
                  {/* {contributor.date && (
                    <p className="text-sm text-gray-500">{contributor.date}</p>
                  )} */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 赞助者感谢栏 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">{t.donate.title3}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{sponsor.nickname}</h3>
                  <p className="text-gray-600 italic">&ldquo;{sponsor.message}&rdquo;</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


    </div>
  );
}
