"use client";

import { useTranslations } from 'next-intl';

// type Translations = ReturnType<typeof useTranslations>;

interface ProfessionalSummaryProps {
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export default function ProfessionalSummary({ className = "", ref }: ProfessionalSummaryProps) {
  const t = useTranslations();

  // const getProfessionalSummaryPDF = (t: Translations) => {
  //   return `
  //     <div style="margin-bottom: 25px; background-color: #f8f9fa; padding: 15px; border-left: 4px solid #1e40af; border-radius: 8px;">
  //       <h2 style="font-size: 18px; font-weight: bold; margin: 0 0 10px 0; color: #000000;">Professional Summary</h2>
  //       <p style="font-size: 12px; color: #000000; margin: 0; line-height: 1.4;">
  //         ${t('hero.description')}
  //       </p>
  //     </div>
  //   `;
  // };

  // const onPDFexport = () => {
  //   return getProfessionalSummaryPDF(t);
  // };

  return (
    <section className={`mb-10 ${className}`} ref={ref}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        {t('hero.summary')}
      </h2>
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-700 leading-relaxed text-lg">
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
}

// Export the onPDFexport function for external use
export { ProfessionalSummary };
