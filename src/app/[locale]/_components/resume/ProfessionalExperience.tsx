"use client";

import { useTranslations } from 'next-intl';

// type Translations = ReturnType<typeof useTranslations>;

interface ProfessionalExperienceProps {
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export default function ProfessionalExperience({ className = "", ref }: ProfessionalExperienceProps) {
  const t = useTranslations();

  const experiences = [
    {
      title: t('experience.items.platsage.title'),
      company: t('experience.items.platsage.company'),
      duration: t('experience.items.platsage.duration'),
      description: t('experience.items.platsage.description'),
      technologies: [
        "AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"
      ],
    },
    {
      title: t('experience.items.siglo.title'),
      company: t('experience.items.siglo.company'),
      duration: t('experience.items.siglo.duration'),
      description: t('experience.items.siglo.description'),
      technologies: [
        "Django", "Kotlin", "Jetpack Compose", "Android", "Python"
      ],
    },
    {
      title: t('experience.items.oneragtime.title'),
      company: t('experience.items.oneragtime.company'),
      duration: t('experience.items.oneragtime.duration'),
      description: t('experience.items.oneragtime.description'),
      technologies: [
        "Django", "Vue.js", "Docker", "MySQL", "Sentry"
      ],
    },
    {
      title: t('experience.items.capvital.title'),
      company: t('experience.items.capvital.company'),
      duration: t('experience.items.capvital.duration'),
      description: t('experience.items.capvital.description'),
      technologies: [
        "Laravel", "AngularJS", "Python", "MySQL"
      ],
    },
    {
      title: t('experience.items.inria.title'),
      company: t('experience.items.inria.company'),
      duration: t('experience.items.inria.duration'),
      description: t('experience.items.inria.description'),
      technologies: [
        "Vue.js", "Node.js", "Java", "SQLite", "IoT"
      ],
    },
  ];

 

  return (
    <section className={`mb-6 ${className}`} ref={ref}>
      <h2 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-200 pb-2 flex items-center gap-2">
        <div className="w-1 h-5 bg-blue-500 rounded"></div>
        {t('experience.title')}
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white border-l-4 border-blue-500 pl-4 pr-4 py-3 rounded-r-xl shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h3>
                <p className="text-base text-blue-600 font-semibold">{exp.company}</p>
              </div>
              <span className="text-gray-600 font-semibold text-sm bg-gray-100 px-2 py-1 rounded-full">{exp.duration}</span>
            </div>
            <ul>
            {exp.description.split('\n').map((line, index) => (
              <li key={index} className="text-gray-700 mb-1 leading-relaxed text-sm list-disc list-inside">{line}</li>
            ))}
            </ul>
            <div className="flex flex-wrap gap-1">
              {exp.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium border border-blue-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export the onPDFexport function for external use
export { ProfessionalExperience };
