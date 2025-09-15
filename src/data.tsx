export const navItems = [
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#experience", text: "Experience" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact" },
  { href: "/resume", text: "Resume" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Vue.js", level: 90 },
      { name: "Jetpack Compose", level: 85 },
      { name: "AngularJS", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python/Django", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "MySQL", level: 90 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Docker", level: 95 },
      { name: "Pulumi", level: 85 },
      { name: "CI/CD", level: 90 },
    ],
  },
];

export const experiences = [
  {
    title: "CTO & Co-Founder",
    company: "Platsage",
    duration: "January 2023 - Present",
    description: "Founded and scaled an AI-powered omnichannel messaging platform integrating WhatsApp, social media, and web chat for SMEs. Led a team of 6 engineers, achieving 99.9% uptime while handling 100k+ monthly conversations. Implemented AI-assisted chat automation that reduced average customer response time by 70%.",
    technologies: ["AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"],
  },
  {
    title: "Full-stack Developer",
    company: "Siglo Internet (YC S21)",
    duration: "October 2021 - October 2022",
    description: "Designed and built internal mobile apps for field technicians, enabling them to install internet services 2× faster. Optimized applications for low-end Android devices, ensuring reliability in environments with poor connectivity.",
    technologies: ["Django", "Kotlin", "Jetpack Compose", "Android", "Python"],
  },
  {
    title: "Full Stack Developer",
    company: "OneRagtime",
    duration: "October 2020 - September 2021",
    description: "Delivered complete features using test-driven development, participating from architecture design to polished UX. Built scalable services and reduced bugs in production by ~20% by introducing automated testing and CI/CD pipelines.",
    technologies: ["Django", "Vue.js", "Docker", "MySQL", "Sentry"],
  },
  {
    title: "Full Stack Developer",
    company: "Capvital",
    duration: "January 2020 - October 2020",
    description: "Owned development in critical banking transaction systems. Designed a parallel validation service that cloned the database and executed old and new transaction processes in parallel, reducing development cycles from weeks to days.",
    technologies: ["Laravel", "AngularJS", "Python", "MySQL", "Banking Systems"],
  },
];

export const projects = [
  {
    title: "Platsage AI Platform",
    icon: "🤖",
    description: "AI-powered omnichannel messaging platform integrating WhatsApp, social media, and web chat for SMEs. Achieved 99.9% uptime and 70% reduction in response time.",
    technologies: ["AWS", "Pulumi", "AI/ML", "WhatsApp API", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Field Technician Mobile App",
    icon: "📱",
    description: "Internal mobile apps for field technicians enabling 2× faster internet service installation. Optimized for low-end Android devices with offline capabilities.",
    technologies: ["Kotlin", "Jetpack Compose", "Django", "Android", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Banking Transaction System",
    icon: "🏦",
    description: "Parallel validation service for critical banking transactions. Reduced development cycles from weeks to days with high reliability and confidence in production changes.",
    technologies: ["Laravel", "AngularJS", "Python", "MySQL", "Banking Systems"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "MOZART IoT Research",
    icon: "🔬",
    description: "Published research article at WWW'20 conference on IoT modeling with rule-based systems. Built prototypes for connected device simulation.",
    technologies: ["Vue.js", "Node.js", "Java", "SQLite", "IoT"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const contactMethods = [
  {
    name: "Email Me",
    url: "mailto:alejandro.martinez.0598@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alejandromartinez-116836120",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/alexmtzrivero",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];
