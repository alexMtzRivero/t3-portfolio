"use client";

import { useRouter, usePathname } from '@/i18n/routing';
import { useState, useCallback } from 'react';
import { useCurrentLanguage } from './useCurrentLanguage';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export function LanguageSelector() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = useCurrentLanguage();
  const pathname = usePathname();
  const handleLanguageChange = useCallback((newLocale: string) => {
    router.push(pathname.replace(`/${currentLanguage?.code}/`,"/"), {locale: newLocale});
    setIsOpen(false);
  }, [pathname, currentLanguage?.code, router]);
  

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200 border border-secondary-200 rounded-lg hover:border-primary-300"
        aria-label="Select language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-secondary-50 transition-colors duration-200 ${
                  currentLanguage?.code === language.code 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-secondary-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLanguage?.code === language.code && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
