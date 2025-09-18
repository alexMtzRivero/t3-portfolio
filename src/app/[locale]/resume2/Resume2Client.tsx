"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { pdf } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

export default function Resume2Client() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const t = useTranslations('resume');
  const heroT = useTranslations('hero');
  const experienceT = useTranslations('experience');
  const educationT = useTranslations('education');
  const languagesT = useTranslations('languages');
  const contactT = useTranslations('contact');

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Create PDF document with translations
      const translations = {
        hero: heroT,
        experience: experienceT,
        education: educationT,
        languages: languagesT,
        contact: contactT,
      };
      
      console.log('Generating PDF with translations...');
      const blob = await pdf(<ResumePDF translations={translations} />).toBlob();
      console.log('PDF generated successfully');
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'AlejandroMartinezResume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGeneratingPDF}
      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
    >
      {isGeneratingPDF ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Generating...
        </>
      ) : (
        <>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {t('downloadPdf')}
        </>
      )}
    </button>
  );
}
