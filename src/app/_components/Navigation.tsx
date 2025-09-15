"use client";

import { useTranslations } from 'next-intl';
import { LanguageSelector } from '../[locale]/_components/LanguageSelector';

export function Navigation() {
  const t = useTranslations('navigation');

  const navItems = [
    { href: "#about", text: t('about') },
    { href: "#skills", text: t('skills') },
    { href: "#experience", text: t('experience') },
    { href: "#projects", text: t('projects') },
    { href: "#contact", text: t('contact') },
    { href: "/resume", text: t('resume') },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-secondary-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-secondary-900 font-canela">
            Portfolio
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                  {...(item.href.startsWith('/') ? { target: '_self' } : {})}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
