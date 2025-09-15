"use client";

import { useTranslations } from 'next-intl';

export function Skills() {
  const t = useTranslations('skills');

  const skillCategories = [
    {
      title: t('categories.frontend.title'),
      skills: [
        { name: t('frontend.reactjs'), level: 95 },
        { name: t('frontend.vuejs'), level: 90 },
        { name: t('frontend.jetpackCompose'), level: 85 },
        { name: t('frontend.angularjs'), level: 80 },
      ],
    },
    {
      title: t('categories.backend.title'),
      skills: [
        { name: t('backend.pythonDjango'), level: 95 },
        { name: t('backend.nodejs'), level: 90 },
        { name: t('backend.laravel'), level: 85 },
        { name: t('backend.mysql'), level: 90 },
      ],
    },
    {
      title: t('categories.cloudDevops.title'),
      skills: [
        { name: t('cloudDevops.aws'), level: 90 },
        { name: t('cloudDevops.docker'), level: 95 },
        { name: t('cloudDevops.pulumi'), level: 85 },
        { name: t('cloudDevops.cicd'), level: 90 },
      ],
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary-900 mb-12 font-canela">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, _index) => (
            <div key={category.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary-200">
              {/* ANIMATION: Staggered fade in from bottom */}
              <h3 className="text-xl font-semibold text-primary-600 mb-6 text-center font-canela">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-secondary-700">{skill.name}</span>
                    <div className="w-24 bg-secondary-200 rounded-full h-2">
                      <div 
                        className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
