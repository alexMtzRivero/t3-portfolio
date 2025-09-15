export function Hero() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* ANIMATION: Fade in from top with stagger effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6 font-canela">
            Alejandro Martinez
          </h1>
          <div className="text-2xl md:text-3xl text-primary-600 mb-8 font-medium font-canela">
            CTO & Co-Founder
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Engineering leader and full-stack developer with 8+ years of experience designing, building, and scaling distributed systems and SaaS platforms. 
            Proven track record as CTO and co-founder, leading cross-functional teams and delivering AI-powered products adopted by mid-sized businesses.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          {/* ANIMATION: Slide up with bounce effect */}
          <button className="bg-secondary-900 hover:bg-secondary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View My Work
          </button>
          <button className="border-2 border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
