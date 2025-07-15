'use client';

import Link from 'next/link';
import useTranslation from "@/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 品牌信息 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Visa Dashboard</h3>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              {t.footer?.description || "澳洲500学签信息收集平台，为留学生提供签证申请指导和信息分享服务。"}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Frank-Fan-AU/visa-dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="mailto:fanzejiea@gmail.com" 
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          {/* <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t.footer?.quickLinks || "快速链接"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.footer?.dashboard || "仪表板"}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/table" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.footer?.visaTable || "签证表格"}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/message" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.footer?.messages || "留言板"}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/donate" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.footer?.donate || "捐赠支持"}
                </Link>
              </li>
            </ul>
          </div> */}

          {/* 帮助支持 */}
          {/* <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {t.footer?.support || "帮助支持"}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard/doc" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.footer?.documentation || "使用文档"}
                </Link>
              </li>
              <li>
                <Link href="/dashboard/upload" className="text-gray-600 hover:text-gray-900 transition-colors">
                  {t.footer?.upload || "上传材料"}
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:fanzejiea@gmail.com" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t.footer?.contact || "联系我们"}
                </a>
              </li>

            </ul>
          </div> */}
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Visa Dashboard. {t.footer?.allRightsReserved || "保留所有权利。"}
            </p>
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                {t.footer?.privacy || "隐私政策"}
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                {t.footer?.terms || "服务条款"}
              </Link>
              <Link href="/dashboard/admin" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                {t.footer?.admin || "管理后台"}
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
} 