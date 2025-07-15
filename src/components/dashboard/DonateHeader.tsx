'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DonateHeader() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow p-6 mb-8 gap-6">
      {/* 左侧头像+title */}
      <div className="flex flex-col items-center min-w-[160px]">
        <Link href="https://frankfan.info" target="_blank"  className="relative w-20 h-20 rounded-full overflow-hidden mb-2">
          <Image src="/zj-avator.jpg" alt="网站作者" fill className="object-cover" />
        </Link>
        <div className="text-xl font-bold">Frank Fan</div>
        <div className="text-gray-500 text-sm mt-1">Visa Dashboard 作者</div>
      </div>

      {/* <div className="flex flex-col items-center max-w-[180px]">
        
        <div className="text-xl font-bold">最重要</div>
        <div className="text-gray-500 text-sm mt-1">记得下签后在网站上更新下自己的数据</div>
      </div> */}

      {/* 微信赞赏码 */}
      <div className="flex flex-col items-center min-w-[180px]">
        <div  rel="noopener noreferrer" className="relative w-60 h-60 rounded-lg overflow-hidden mb-2 border border-gray-200">
          <Image src="/zj-donate.JPG" alt="微信赞赏码" fill className="object-contain" />
        </div>
        <div className="text-gray-700 text-base font-medium">微信赞赏码</div>
        <div className="text-gray-400 text-xs mt-1">所有赞赏会在群里发红包给到我和其他维护网站信息的同学</div>
      </div>

      {/* GitHub */}
      <div className="flex flex-col items-center min-w-[120px]">
        <a href="https://github.com/Frank-Fan-AU/visa-dashboard" target="_blank" rel="noopener noreferrer" className="mb-2">
          <svg className="w-10 h-10 text-gray-800 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <div className="text-gray-700 text-sm">开源项目地址</div>
        <div className="text-gray-400 text-xs mt-1">求大伙给点点star，助力站长早日找到工作</div>
      </div>

      {/* LinkedIn */}
      <div className="flex flex-col items-center min-w-[120px]">
        <a href="https://www.linkedin.com/in/frankfanau/" target="_blank" rel="noopener noreferrer" className="mb-2">
          <svg className="w-10 h-10 text-blue-700 hover:text-blue-800 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
          </svg>
        </a>
        <div className="text-gray-700 text-sm">LinkedIn</div>
        <div className="text-gray-400 text-xs mt-1">求大伙互connect，助力站长早日找到工作</div>
      </div>
    </div>
  );
} 