"use client";

import { useTranslations } from 'next-intl';

// type Translations = ReturnType<typeof useTranslations>;

interface ContactInformationProps {
  className?: string;
}

export default function ContactInformation({ className = "" }: ContactInformationProps) {
  const t = useTranslations();

  const contactMethods = [
    {
      name: t('contact.methods.email.name'),
      url: t('contact.methods.email.url'),
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: t('contact.methods.linkedin.name'),
      url: t('contact.methods.linkedin.url'),
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: t('contact.methods.github.name'),
      url: t('contact.methods.github.url'),
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
  ];

  // const getContactInformationPDF = () => {
  //   return `
  //     <div style="margin-bottom: 15px;">
  //       <h2 style="font-size: 18px; font-weight: bold; margin: 0 0 15px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 8px;">Contact Information</h2>
  //       <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
  //         <div style="display: flex; align-items: center; gap: 10px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  //           <div style="color: #1e40af; font-size: 16px;">📧</div>
  //           <span style="color: #000000; font-weight: 600; font-size: 12px;">Email Me</span>
  //         </div>
  //         <div style="display: flex; align-items: center; gap: 10px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  //           <div style="color: #1e40af; font-size: 16px;">💼</div>
  //           <span style="color: #000000; font-weight: 600; font-size: 12px;">LinkedIn</span>
  //         </div>
  //         <div style="display: flex; align-items: center; gap: 10px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  //           <div style="color: #1e40af; font-size: 16px;">🐙</div>
  //           <span style="color: #000000; font-weight: 600; font-size: 12px;">GitHub</span>
  //         </div>
  //       </div>
  //     </div>
  //   `;
  // };

  // const onPDFexport = () => {
  //   return getContactInformationPDF();
  // };

  return (
    <section className={className}>
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
        <div className="w-1 h-8 bg-blue-500 rounded"></div>
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            className="flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
          >
            <div className="text-blue-600 text-2xl">
              {contact.icon}
            </div>
            <span className="text-gray-700 font-semibold text-lg">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// Export the onPDFexport function for external use
export { ContactInformation };
