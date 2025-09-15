"use client";

import { useTranslations } from 'next-intl';

// type Translations = ReturnType<typeof useTranslations>;

interface TechnicalSkillsProps {
  className?: string;
}

export default function TechnicalSkills({ className = "" }: TechnicalSkillsProps) {
  const t = useTranslations();

  const skillCategories = [
    {
      title: t('skills.categories.frontend.title'),
      skills: [
        { name: t('skills.frontend.reactjs'), level: 95 },
        { name: t('skills.frontend.vuejs'), level: 90 },
        { name: t('skills.frontend.jetpackCompose'), level: 85 },
        { name: t('skills.frontend.angularjs'), level: 80 },
      ],
    },
    {
      title: t('skills.categories.backend.title'),
      skills: [
        { name: t('skills.backend.pythonDjango'), level: 95 },
        { name: t('skills.backend.nodejs'), level: 90 },
        { name: t('skills.backend.laravel'), level: 85 },
        { name: t('skills.backend.mysql'), level: 90 },
      ],
    },
    {
      title: t('skills.categories.cloudDevops.title'),
      skills: [
        { name: t('skills.cloudDevops.aws'), level: 90 },
        { name: t('skills.cloudDevops.docker'), level: 95 },
        { name: t('skills.cloudDevops.pulumi'), level: 85 },
        { name: t('skills.cloudDevops.cicd'), level: 90 },
      ],
    },
  ];

  // const getTechnicalSkillsPDF = (_t: Translations) => {
  //   const skillsHTML = skillCategories.map(category => `
  //     <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
  //       <h3 style="font-size: 14px; font-weight: bold; color: #1e40af; margin: 0 0 10px 0; text-align: center;">${category.title}</h3>
  //       <div style="display: flex; flex-direction: column; gap: 6px;">
  //         ${category.skills.map(skill => `
  //           <div style="display: flex; justify-content: space-between; align-items: center;">
  //             <span style="color: #000000; font-weight: 500; font-size: 11px;">${skill.name}</span>
  //             <span style="color: #6b7280; font-size: 10px;">${skill.level}%</span>
  //           </div>
  //         `).join('')}
  //       </div>
  //     </div>
  //   `).join('');

  //   return `
  //     <div style="margin-bottom: 25px;">
  //       <h2 style="font-size: 18px; font-weight: bold; margin: 0 0 15px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 8px;">Technical Skills</h2>
  //       <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
  //         ${skillsHTML}
  //       </div>
  //     </div>
  //   `;
  // };

  // const onPDFexport = () => {
  //   return getTechnicalSkillsPDF(t);
  // };

  return (
    <section className={`mb-10 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, _index) => (
          <div key={category.title} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 font-medium w-8">{skill.level}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// Export the onPDFexport function for external use
export { TechnicalSkills };
