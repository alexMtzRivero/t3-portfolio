"use client";

import { useTranslations } from 'next-intl';

export function Experience() {
  const t = useTranslations('experience');

  const experiences = [
    {
      title: t('items.platsage.title'),
      company: t('items.platsage.company'),
      location: t('items.platsage.location'),
      duration: t('items.platsage.duration'),
      description: t('items.platsage.description'),
      technologies: [
        "AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"
      ],
    },
    {
      title: t('items.siglo.title'),
      company: t('items.siglo.company'),
      location: t('items.siglo.location'),
      duration: t('items.siglo.duration'),
      description: t('items.siglo.description'),
      technologies: [
        "Django", "Kotlin", "Jetpack Compose", "Android", "Python"
      ],
    },
    {
      title: t('items.oneragtime.title'),
      company: t('items.oneragtime.company'),
      location: t('items.oneragtime.location'),
      duration: t('items.oneragtime.duration'),
      description: t('items.oneragtime.description'),
      technologies: [
        "Django", "Vue.js", "Docker", "MySQL", "Sentry"
      ],
    },
    {
      title: t('items.capvital.title'),
      company: t('items.capvital.company'),
      location: t('items.capvital.location'),
      duration: t('items.capvital.duration'),
      description: t('items.capvital.description'),
      technologies: [
        "Laravel", "AngularJS", "Python", "MySQL"
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary-900 mb-12 font-canela">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-secondary-200">
              {/* ANIMATION: Slide in from right with delay based on index */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900 font-canela">
                    {exp.title}
                  </h3>
                  <p className="text-primary-600 text-lg font-medium">
                    {exp.company}
                  </p>
                  <p className="text-secondary-500 text-sm">
                    {exp.location}
                  </p>
                </div>
                <span className="text-secondary-500 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>
              <p className="text-secondary-600 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-lg text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
