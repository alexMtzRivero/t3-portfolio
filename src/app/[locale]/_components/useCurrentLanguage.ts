"use client";

import { useEffect, useState } from 'react';
import { usePathname } from '@/i18n/routing';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export function useCurrentLanguage() {
  const pathname = usePathname();
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  useEffect(() => {
    const urlLocale = pathname.split('/')[1];
    setCurrentLanguage(languages.find(lang => lang.code === urlLocale) ?? languages[0]);
  }, [pathname]);

  return currentLanguage;
}
