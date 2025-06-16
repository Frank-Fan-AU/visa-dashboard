'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

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

const donors: DonorInfo[] = [
  {
    name: '网站开发：Frank Fan',
    avatar: '/zj-avator.jpg',
    wechatQR: '/zj-donate.JPG',
    message: '希望网站能持续运营下去，帮助更多需要的人'
  },
  {
    name: '数据维护员：暂无',
    avatar: '/unknowPeople.webp',
    wechatQR: '/woodFish.png',
    message: '加入我们，协助我们维护数据，将信息传递下去！\n联系方式：fanzejiea@gmail.com'
  }
];

const contributors: ContributorInfo[] = [
    {
        name: '一只汽水冰',
        contribution: '感谢一只汽水冰于网站创立-03/21/2025维护数据！',
        date: '网站创立-03/21/2025',
        avatar: '/bq-avator.jpg'
      },
  {
    name: '乐高哥',
    contribution: '感谢乐高哥于03/21/2025-06/16/2025期间协助我们维护数据，将信息传递下去！',
    date: '03/21/2025-06/16/2025',
    avatar: '/legaoge.jpg'
  },
];

const sponsors: SponsorInfo[] = [
  {
    nickname: '赞助者',
    message: '之后会将赞赏站长的留言展示在这里，感谢您的慷慨支持！'
  },
  {
    nickname: '一只汽水冰',
    message: '感谢一只汽水冰为测试赞赏码转给站长的￥1！'
  },
];

export default function DonatePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">支持我们</h1>
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
                    <p className="text-xs text-gray-500 mb-1">微信赞赏码</p>
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
        <h2 className="text-2xl font-bold text-center mb-8">特别鸣谢</h2>
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
                  {contributor.date && (
                    <p className="text-sm text-gray-500">{contributor.date}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 赞助者感谢栏 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">感谢赞助</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">{sponsor.nickname}</h3>
                  <p className="text-gray-600 italic">"{sponsor.message}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
