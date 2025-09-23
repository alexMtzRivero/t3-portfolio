"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useCurrentLanguage } from './useCurrentLanguage';
import AnimatedTittle from '~/app/_components/AnimatedTittle';

export function Hero() {
  const t = useTranslations('hero');
  const currentLanguage = useCurrentLanguage();

  return (
    <section className="pt-24 pb-8 px-6 p">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <AnimatedTittle
            text={t('name')}
            className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6 font-canela"
            delay={100}
            duration={0.5}
            ease="elastic.out(1, 0.5)"
            splitType="chars"
            from={{ opacity: 1, y: 150 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.05}
            rootMargin="-100px"
            textAlign="center"
            tag="h1"
          />
         <AnimatedTittle
            text={t('title')}
            className="text-2xl md:text-3xl text-primary-600 mb-8 font-medium font-canela"
            delay={100}
            duration={0.5}
            ease="elastic.out(1, 0.5)"
            splitType="chars"
            from={{ opacity: 1, y: -150 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.05}
            rootMargin="-100px"
            textAlign="center"
            tag="h2"
          />

          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {/* ANIMATION: Slide up with bounce effect */}

            <Link className=" text-center border-2 border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            href={`/${currentLanguage?.code}/resume`} target="_self">
            {t('downloadResume')}
            </Link>
        </div>
      </div>
    </section>
  );
}
