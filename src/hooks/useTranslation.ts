import { useI18n } from '../context/i18n-context';
import en from '../locales/en.json';
import zh from '../locales/zh.json';

type Translations = typeof en;

export default function useTranslation(): {
  lang: 'en' | 'zh';
  t: Translations;
  setLang: (lang: 'en' | 'zh') => void;
} {
  const { lang, setLang } = useI18n();
  const t = lang === 'zh' ? zh : en;

  return { lang, t, setLang };
}