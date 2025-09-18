import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import Resume2Client from './Resume2Client';
import { LanguageSelector } from '../_components/LanguageSelector';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'fr' }
  ];
}

export default async function Resume2Page({
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
            <Resume2Client />
            <Link 
              href="/resume" 
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('backToPortfolio')}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSelector />
          </div>
        </div>

        {/* Resume Content Preview */}
        <div className="bg-white shadow-2xl rounded-xl p-6 border border-gray-200">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Resume Preview</h1>
            <p className="text-gray-600">This page uses @react-pdf/renderer to generate a PDF version of your resume</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-center text-gray-500">
              Click &quot;Download PDF&quot; above to generate and download your resume using @react-pdf/renderer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
