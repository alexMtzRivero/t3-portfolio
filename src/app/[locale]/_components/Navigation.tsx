"use client";

// import { useTranslations } from 'next-intl';
import { LanguageSelector } from './LanguageSelector';

export function Navigation() {
  // const t = useTranslations('navigation');
  // const navItems = [];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-secondary-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary-900 font-canela">
            Portfolio
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
