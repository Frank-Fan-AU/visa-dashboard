'use client';

import useTranslation from '@/hooks/useTranslation';

export default function LangSwitcher() {
  const { lang, setLang } = useTranslation();

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'zh' : 'en';
    setLang(newLang); // 不再刷新页面
  };

  return (
    <button onClick={toggleLang} className="p-2 border rounded">
      {lang === 'en' ? '切换中文' : 'Switch to English'}
    </button>
  );
}