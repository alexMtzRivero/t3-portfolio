import Link from "next/link";
import ResumeHeader from '../_components/resume/ResumeHeader';
import ProfessionalSummary from '../_components/resume/ProfessionalSummary';
import ProfessionalExperience from '../_components/resume/ProfessionalExperience';
import EducationResearch from '../_components/resume/EducationResearch';
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
  // const {locale} = await params;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with Download Button */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-3">
            <Link
              href="/"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
            <ResumeClient />
          </div>
        </div>

        {/* Resume Content */}
        <div id="resume-content" className="bg-white shadow-2xl rounded-xl p-10 border border-gray-200">
          <ResumeHeader />
          <ProfessionalSummary />
          <ProfessionalExperience />
          <EducationResearch />
        </div>
      </div>
    </div>
  );
}