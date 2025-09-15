interface ContactMethod {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface ContactProps {
  contactMethods: ContactMethod[];
}

export function Contact({ contactMethods }: ContactProps) {
  return (
    <section className="py-16 px-6 bg-white/70">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary-900 mb-8 font-canela">
          Let's Work Together
        </h2>
        <p className="text-xl text-secondary-600 mb-12">
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.url}
              className="flex items-center justify-center gap-3 bg-secondary-900 hover:bg-secondary-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {method.icon}
              {method.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
