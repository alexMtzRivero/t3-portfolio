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
        "Laravel", "AngularJS", "Python", "MySQL", "Banking Systems"
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
    <section className={`mb-10 ${className}`} ref={ref}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        {t('experience.title')}
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white border-l-4 border-blue-500 pl-6 pr-6 py-6 rounded-r-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
              </div>
              <span className="text-gray-600 font-semibold text-lg bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
            </div>
            <ol>
            {exp.description.split('\n').map((line, index) => (
              <li key={index} className="text-gray-700 mb-2 leading-relaxed text-lg">{line}</li>
            ))}
            </ol>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
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
