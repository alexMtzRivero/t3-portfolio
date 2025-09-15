"use client";

import { useTranslations } from 'next-intl';

// type Translations = ReturnType<typeof useTranslations>;

interface KeyProjectsProps {
  className?: string;
}

export default function KeyProjects({ className = "" }: KeyProjectsProps) {
  const t = useTranslations();

  const projects = [
    {
      title: t('projects.items.platsage.title'),
      icon: t('projects.items.platsage.icon'),
      description: t('projects.items.platsage.description'),
      technologies: [
        "AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"
      ],
    },
    {
      title: t('projects.items.fieldTechnician.title'),
      icon: t('projects.items.fieldTechnician.icon'),
      description: t('projects.items.fieldTechnician.description'),
      technologies: [
        "Kotlin", "Jetpack Compose", "Django", "Android", "Python"
      ],
    },
    {
      title: t('projects.items.bankingSystem.title'),
      icon: t('projects.items.bankingSystem.icon'),
      description: t('projects.items.bankingSystem.description'),
      technologies: [
        "Laravel", "AngularJS", "Python", "MySQL", "Banking Systems"
      ],
    },
    {
      title: t('projects.items.mozartIot.title'),
      icon: t('projects.items.mozartIot.icon'),
      description: t('projects.items.mozartIot.description'),
      technologies: [
        "Vue.js", "Node.js", "Java", "SQLite", "IoT"
      ],
    },
  ];

  // const getKeyProjectsPDF = (t: any) => {
  //   const projects = [
  //     {
  //       title: t('projects.items.platsage.title'),
  //       icon: t('projects.items.platsage.icon'),
  //       description: t('projects.items.platsage.description'),
  //       technologies: [
  //         "AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"
  //       ],
  //     },
  //     {
  //       title: t('projects.items.fieldTechnician.title'),
  //       icon: t('projects.items.fieldTechnician.icon'),
  //       description: t('projects.items.fieldTechnician.description'),
  //       technologies: [
  //         "Kotlin", "Jetpack Compose", "Django", "Android", "Python"
  //       ],
  //     },
  //     {
  //       title: t('projects.items.bankingSystem.title'),
  //       icon: t('projects.items.bankingSystem.icon'),
  //       description: t('projects.items.bankingSystem.description'),
  //       technologies: [
  //         "Laravel", "AngularJS", "Python", "MySQL", "Banking Systems"
  //       ],
  //     },
  //     {
  //       title: t('projects.items.mozartIot.title'),
  //       icon: t('projects.items.mozartIot.icon'),
  //       description: t('projects.items.mozartIot.description'),
  //       technologies: [
  //         "Vue.js", "Node.js", "Java", "SQLite", "IoT"
  //       ],
  //     },
  //   ];

  //   let projectsHTML = `
  //     <h2 style="font-size: 18px; font-weight: bold; margin: 0 0 15px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 8px;">Key Projects</h2>
  //     <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
  //   `;
  //   
  //   projects.forEach((project, _index) => {
  //     projectsHTML += `
  //       <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  //         <div style="display: flex; align-items: center; margin-bottom: 10px;">
  //           <span style="font-size: 18px; margin-right: 10px;">${project.icon}</span>
  //           <h3 style="font-size: 14px; font-weight: bold; color: #000000; margin: 0;">${project.title}</h3>
  //         </div>
  //         <p style="color: #000000; margin: 0 0 10px 0; font-size: 11px; line-height: 1.4;">${project.description}</p>
  //         <div style="display: flex; flex-wrap: wrap; gap: 4px;">
  //           ${project.technologies.map(tech => `
  //             <span style="background-color: #dbeafe; color: #1e3a8a; padding: 2px 6px; border-radius: 10px; font-size: 9px; font-weight: 500;">${tech}</span>
  //           `).join('')}
  //         </div>
  //       </div>
  //     `;
  //   });
  //   
  //   projectsHTML += `</div>`;

  //   return `
  //     <div style="margin-bottom: 25px;">
  //       ${projectsHTML}
  //     </div>
  //   `;
  // };

  // const onPDFexport = () => {
  //   return getKeyProjectsPDF(t);
  // };

  return (
    <section className={`mb-10 ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        Key Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, _index) => (
          <div key={_index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-4">{project.icon}</span>
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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
export { KeyProjects };
