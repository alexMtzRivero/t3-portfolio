"use client";

import { useTranslations } from 'next-intl';

export function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: t('items.platsage.title'),
      icon: t('items.platsage.icon'),
      description: t('items.platsage.description'),
      technologies: [
        "AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"
      ],
      liveUrl: t('items.platsage.liveUrl'),
      githubUrl: t('items.platsage.githubUrl'),
    },
    {
      title: t('items.fieldTechnician.title'),
      icon: t('items.fieldTechnician.icon'),
      description: t('items.fieldTechnician.description'),
      technologies: [
        "Kotlin", "Jetpack Compose", "Django", "Android", "Python"
      ],
      liveUrl: t('items.fieldTechnician.liveUrl'),
      githubUrl: t('items.fieldTechnician.githubUrl'),
    },
    {
      title: t('items.bankingSystem.title'),
      icon: t('items.bankingSystem.icon'),
      description: t('items.bankingSystem.description'),
      technologies: [
        "Laravel", "AngularJS", "Python", "MySQL"
      ],
      liveUrl: t('items.bankingSystem.liveUrl'),
      githubUrl: t('items.bankingSystem.githubUrl'),
    },
    {
      title: t('items.mozartIot.title'),
      icon: t('items.mozartIot.icon'),
      description: t('items.mozartIot.description'),
      technologies: [
        "Vue.js", "Node.js", "Java", "SQLite", "IoT"
      ],
      liveUrl: t('items.mozartIot.liveUrl'),
      githubUrl: t('items.mozartIot.githubUrl'),
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary-900 mb-12 font-canela">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-secondary-200">
              {/* ANIMATION: Fade in with scale effect on hover */}
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <div className="text-4xl text-white font-bold">{project.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-canela">
                  {project.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveUrl} className="text-primary-600 hover:underline">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="text-primary-600 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
