"use client";

import { useTranslations } from 'next-intl';

export function Languages() {
  const t = useTranslations('languages');

  const languages = [
    'french',
    'english', 
    'spanish'
  ];

  return (
    <section id="languages" className="py-16 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary-900 mb-12 font-canela">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang) => (
            <div key={lang} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary-200 text-center">
              {/* ANIMATION: Fade in from bottom */}
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl text-white font-bold">
                    {lang === 'french' ? '🇫🇷' : lang === 'english' ? '🇺🇸' : '🇪🇸'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 font-canela">
                  {t(`items.${lang}.name`)}
                </h3>
              </div>
              <p className="text-primary-600 font-medium">
                {t(`items.${lang}.level`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
