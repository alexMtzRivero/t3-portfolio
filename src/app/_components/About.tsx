export function About() {
  return (
    <section className="py-16 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary-900 mb-12 font-canela">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* ANIMATION: Slide in from left */}
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              With over 8 years of experience in software engineering, I specialize in building 
              robust, scalable applications and leading engineering teams. As CTO and co-founder of Platsage, 
              I've designed AI-powered omnichannel messaging platforms that serve 50+ businesses and handle 100k+ monthly conversations.
            </p>
            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              My expertise spans full-stack development, cloud architecture, AI implementation, and team leadership. 
              I'm passionate about creating solutions that not only meet business requirements but also drive measurable impact, 
              like reducing customer response time by 70% through AI automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                React.js & Vue.js
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                Python & Django
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                AWS & Pulumi
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-lg text-sm font-medium">
                AI & Machine Learning
              </span>
            </div>
          </div>
          <div className="relative">
            {/* ANIMATION: Fade in with scale effect */}
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center">
              <div className="text-6xl text-white font-bold">AM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
