import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import ResumeHeader from '../_components/resume/ResumeHeader';
import ProfessionalSummary from '../_components/resume/ProfessionalSummary';
import ProfessionalExperience from '../_components/resume/ProfessionalExperience';
import EducationResearch from '../_components/resume/EducationResearch';
import Languages from '../_components/resume/Languages';
import { LanguageSelector } from '../_components/LanguageSelector';
import ResumeClient from './ResumeClient';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' }
  ];
}

export default async function ResumePage({
  params: _params
}: {
  params: Promise<{locale: string}>;
}) {
  const t = await getTranslations('resume');
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with Download Button and Language Selector */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-3">
            <ResumeClient />
          </div>
          <div className="flex items-center gap-3">
            <LanguageSelector />
          </div>
        </div>

        {/* Resume Content */}
        <div id="resume-content" className="bg-white shadow-2xl rounded-xl p-6 border border-gray-200">
          <ResumeHeader />
          <ProfessionalSummary />
          <Languages />
          <ProfessionalExperience />
          <EducationResearch />
        </div>
      </div>
    </div>
  );
}