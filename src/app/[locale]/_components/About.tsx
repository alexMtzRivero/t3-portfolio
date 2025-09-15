"use client";

import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');

  return (
    <section className="py-16 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary-900 mb-12 font-canela">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* ANIMATION: Slide in from left */}
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              {t('description1')}
            </p>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              {t('description2')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                {t('skills.reactVue')}
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                {t('skills.pythonDjango')}
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                {t('skills.awsPulumi')}
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                {t('skills.aiMl')}
              </span>
            </div>
          </div>
          <div className="relative">
            {/* ANIMATION: Fade in with scale effect */}
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
              <div className="text-6xl text-white font-bold">AM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
