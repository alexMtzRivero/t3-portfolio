interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface ExperienceProps {
  experiences: Experience[];
}

export function Experience({ experiences }: ExperienceProps) {
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
