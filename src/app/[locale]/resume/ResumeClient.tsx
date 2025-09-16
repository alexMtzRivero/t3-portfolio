"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeClient() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const t = useTranslations('resume');

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Create a completely new element with inline styles to avoid Tailwind CSS issues
      const pdfContent = document.createElement('div');
      pdfContent.style.cssText = `
        width: 800px;
        background-color: #ffffff;
        color: #000000;
        font-family: Arial, sans-serif;
        padding: 25px;
        line-height: 1.4;
      `;

      // Get HTML from the resume content
      const resumeContent = document.getElementById('resume-content');
      if (resumeContent) {
        pdfContent.innerHTML = resumeContent.innerHTML;
      }

      // Add to DOM temporarily
      pdfContent.style.position = 'absolute';
      pdfContent.style.left = '-9999px';
      pdfContent.style.top = '0';
      document.body.appendChild(pdfContent);

      const canvas = await html2canvas(pdfContent, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        width: 800,
        height: pdfContent.scrollHeight,
      });

      // Clean up
      document.body.removeChild(pdfContent);

      const imgData = canvas.toDataURL("image/png");
      
      // Calculate dimensions for single page
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Create PDF with custom page size to fit the entire content
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [210, imgHeight] // Custom height to fit content
      });

      // Add the image to the single page
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // Download PDF directly
      const pdfBlob = pdf.output('blob') as Blob;
      const pdfUrl = URL.createObjectURL(pdfBlob);
      
      // Create download link and trigger download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'AlejandroMartinezResume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL
      URL.revokeObjectURL(pdfUrl);
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
