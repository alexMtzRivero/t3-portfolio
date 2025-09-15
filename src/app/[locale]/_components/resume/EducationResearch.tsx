"use client";

import { useTranslations } from 'next-intl';

// type Translations = ReturnType<typeof useTranslations>;

interface EducationResearchProps {
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export default function EducationResearch({ className = "", ref }: EducationResearchProps) {
  const t = useTranslations();


  const educationItems = [
    {
      title: t('education.items.harbourspace.title'),
      university: t('education.items.harbourspace.university'),
      duration: t('education.items.harbourspace.duration'),
    },
    {
      title: t('education.items.universityGrenoble.title'),
      university: t('education.items.universityGrenoble.university'),
      duration: t('education.items.universityGrenoble.duration'),
    },
    {
      title: t('education.items.universityChihuahua.title'),
      university: t('education.items.universityChihuahua.university'),
      duration: t('education.items.universityChihuahua.duration'),
    },
  ];

  return (
    <section className={`mb-10 ${className}`} ref={ref}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        {t('education.title')}
      </h2>
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.university}</h3>
                <p className="text-xl text-blue-600 font-semibold">{item.title}</p>
              </div>
              
              <span className="text-gray-600 whitespace-nowrap font-semibold text-lg bg-gray-100 px-3 py-1 rounded-full">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export the onPDFexport function for external use
export { EducationResearch };
