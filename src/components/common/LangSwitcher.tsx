'use client';
import { useEffect, useState } from 'react';

const LangSwitcher = () => {
    const [lang, setLang] = useState<string | null>(null); // 初始为 null

    useEffect(() => {
      let storedLang = localStorage.getItem('lang');
      if (!storedLang) {
        const browserLang = navigator.language; // 如 'en-US' 或 'zh-CN'
        storedLang = browserLang.startsWith('zh') ? 'zh' : 'en';
        localStorage.setItem('lang', storedLang);
      }
      setLang(storedLang);
    }, []);
  
    const toggleLang = () => {
      const newLang = lang === 'en' ? 'zh' : 'en';
      setLang(newLang);
      localStorage.setItem('lang', newLang);
      location.reload(); // 或触发 props/context 更新
    };
  
    if (!lang) return null;
      
  return (
    <button onClick={toggleLang} className="p-2 border rounded">
      {lang === 'en' ? '切换中文' : 'Switch to English'}
    </button>
  )
};

export default LangSwitcher;
