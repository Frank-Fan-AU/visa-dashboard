'use client';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/useTranslation';

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      className="px-2"
    >
      <Languages className="w-4 h-4" />
    </Button>
  );
} 