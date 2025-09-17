"use client";

import { useTranslations } from 'next-intl';

interface LanguagesProps {
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export default function Languages({ className = "", ref }: LanguagesProps) {
  const t = useTranslations('languages');

  const languages = [
    {
      name: t('items.french.name'),
      level: t('items.french.level'),
      flag: '🇫🇷'
    },
    {
      name: t('items.english.name'),
      level: t('items.english.level'),
      flag: '🇺🇸'
    },
    {
      name: t('items.spanish.name'),
      level: t('items.spanish.level'),
      flag: '🇪🇸'
    }
  ];

  return (
    <section className={`mb-4 border-t-0 ${className}`} ref={ref}>
      <div className="flex flex-wrap gap-4 justify-center">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center gap-2 px-3 py-2 rounded ">
            <span className="text-sm">{lang.flag}</span>
            <span className="text-sm font-medium text-gray-900">{lang.name}</span>
            <span className="text-xs text-gray-600">-</span>
            <span className="text-xs text-gray-600">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export the onPDFexport function for external use
export { Languages };
