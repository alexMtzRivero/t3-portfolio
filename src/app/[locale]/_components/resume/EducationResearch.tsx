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
      location: t('education.items.harbourspace.location'),
      duration: t('education.items.harbourspace.duration'),
    },
    {
      title: t('education.items.universityGrenoble.title'),
      university: t('education.items.universityGrenoble.university'),
      location: t('education.items.universityGrenoble.location'),
      duration: t('education.items.universityGrenoble.duration'),
    },
    {
      title: t('education.items.universityChihuahua.title'),
      university: t('education.items.universityChihuahua.university'),
      location: t('education.items.universityChihuahua.location'),
      duration: t('education.items.universityChihuahua.duration'),
    },
  ];

  return (
    <section className={`mb-6 ${className}`} ref={ref}>
      <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2 flex items-center gap-2">
        <div className="w-1 h-5 bg-blue-500 rounded"></div>
        {t('education.title')}
      </h2>
      <div className="space-y-3">
        {educationItems.map((item, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.university}</h3>
                <p className="text-base text-blue-600 font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
              
              <span className="text-gray-600 whitespace-nowrap font-semibold text-sm bg-gray-100 px-2 py-1 rounded-full">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export the onPDFexport function for external use
export { EducationResearch };
