"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useCurrentLanguage } from './useCurrentLanguage';

export function UnderConstruction() {
  const t = useTranslations('underConstruction');
  const currentLanguage = useCurrentLanguage();

  return (
    <section className="py-8 mt-20 bg-yellow-50 ">
      <div className="text-center flex flex-row items-center justify-center">
      
          <Image
            src="/images/construction.png"
            alt="Under Construction"
            width={80}
            height={80}
          />
      
        <div className="bg-yellow-100  border-yellow-400 p-6  rounded-lg">
         <h2 className="text-2xl font-bold text-secondary-900 font-canela">
          {t('title')}
        </h2>
          <p className="text-lg mb-4 text-secondary-800 font-medium">
            {t('warning')}
          </p>
          <Link className="border-2 mt-4 border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white px-4 py-2 rounded-lg font-semibold text-lg transition-all duration-300"
          href={`/${currentLanguage?.code}/resume`} target="_self">
            {t('downloadResume')}
          </Link>
        </div>
      </div>
    </section>
  );
}
