"use client";

import { useTranslations } from 'next-intl';

// type Translations = ReturnType<typeof useTranslations>;

interface ResumeHeaderProps {
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export default function ResumeHeader({ className = "", ref }: ResumeHeaderProps) {
  const t = useTranslations();

  // const getResumeHeaderPDF = (t: Translations) => {
  //   return `
  //     <div style="text-align: center; margin-bottom: 25px; border-bottom: 2px solid #1e40af; padding-bottom: 15px;">
  //       <h1 style="font-size: 24px; font-weight: bold; margin: 0 0 8px 0; color: #000000;">${t('hero.name')}</h1>
  //       <p style="font-size: 14px; color: #1e40af; margin: 0 0 15px 0; font-weight: 600;">${t('hero.title')} | Full-Stack Developer</p>
  //       <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
  //         <span style="color: #000000; font-size: 12px;">${t('contact.methods.email.url').replace('mailto:', '')}</span>
  //         <span style="color: #000000; font-size: 12px;">${t('contact.methods.linkedin.name')}</span>
  //         <span style="color: #000000; font-size: 12px;">${t('contact.methods.github.name')}</span>
  //       </div>
  //     </div>
  //   `;
  // };

  // const onPDFexport = () => {
  //   return getResumeHeaderPDF(t);
  // };

  return (
    <div className={`text-center mb-10 border-b-2 border-blue-200 pb-8 ${className}`} ref={ref}>
      <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">{t('hero.name')}</h1>
      <p className="text-2xl text-blue-600 mb-6 font-medium">{t('hero.title')} | Full-Stack Developer</p>
      <div className="flex flex-wrap justify-center gap-6 text-gray-600">
        <a href={t('contact.methods.email.url')} className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {t('contact.methods.email.url').replace('mailto:', '')}
        </a>
        <a href={t('contact.methods.linkedin.url')} className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          {t('contact.methods.linkedin.name')}
        </a>
        <a href={t('contact.methods.github.url')} className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          {t('contact.methods.github.name')}
        </a>
      </div>
    </div>
  );
}

// Export the onPDFexport function for external use
export { ResumeHeader };
