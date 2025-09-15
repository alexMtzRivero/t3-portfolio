"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { skillCategories, experiences, projects, contactMethods } from "../../data";

export default function ResumePage() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

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
        padding: 40px;
        line-height: 1.6;
      `;

      // Header Section
      const header = document.createElement('div');
      header.style.cssText = `
        text-align: center;
        margin-bottom: 40px;
        border-bottom: 2px solid #1e40af;
        padding-bottom: 20px;
      `;
      header.innerHTML = `
        <h1 style="font-size: 36px; font-weight: bold; margin: 0 0 10px 0; color: #000000;">Alejandro Martinez</h1>
        <p style="font-size: 20px; color: #1e40af; margin: 0 0 20px 0; font-weight: 600;">CTO & Co-Founder | Full-Stack Developer</p>
        <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
          <span style="color: #000000;">alejandro.martinez.0598@gmail.com</span>
          <span style="color: #000000;">LinkedIn</span>
          <span style="color: #000000;">GitHub</span>
        </div>
      `;
      pdfContent.appendChild(header);

      // Professional Summary
      const summary = document.createElement('div');
      summary.style.cssText = `
        margin-bottom: 40px;
        background-color: #f8f9fa;
        padding: 20px;
        border-left: 4px solid #1e40af;
        border-radius: 8px;
      `;
      summary.innerHTML = `
        <h2 style="font-size: 24px; font-weight: bold; margin: 0 0 15px 0; color: #000000;">Professional Summary</h2>
        <p style="font-size: 16px; color: #000000; margin: 0; line-height: 1.6;">
          Experienced software engineer with over 8 years of expertise in building robust, scalable applications and leading engineering teams. 
          Currently serving as CTO and co-founder of Platsage, where I've designed AI-powered omnichannel messaging platforms serving 50+ businesses 
          and handling 100k+ monthly conversations. Passionate about creating solutions that drive measurable impact, including reducing customer 
          response time by 70% through AI automation.
        </p>
      `;
      pdfContent.appendChild(summary);

      // Technical Skills
      const skills = document.createElement('div');
      skills.style.cssText = 'margin-bottom: 40px;';
      skills.innerHTML = `
        <h2 style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Technical Skills</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="font-size: 18px; font-weight: bold; color: #1e40af; margin: 0 0 15px 0; text-align: center;">Frontend</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">React.js</span>
                <span style="color: #6b7280; font-size: 14px;">95%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">Vue.js</span>
                <span style="color: #6b7280; font-size: 14px;">90%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">Jetpack Compose</span>
                <span style="color: #6b7280; font-size: 14px;">85%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">AngularJS</span>
                <span style="color: #6b7280; font-size: 14px;">80%</span>
              </div>
            </div>
          </div>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="font-size: 18px; font-weight: bold; color: #1e40af; margin: 0 0 15px 0; text-align: center;">Backend</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">Python/Django</span>
                <span style="color: #6b7280; font-size: 14px;">95%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">Node.js</span>
                <span style="color: #6b7280; font-size: 14px;">90%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">Laravel</span>
                <span style="color: #6b7280; font-size: 14px;">85%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">MySQL</span>
                <span style="color: #6b7280; font-size: 14px;">90%</span>
              </div>
            </div>
          </div>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="font-size: 18px; font-weight: bold; color: #1e40af; margin: 0 0 15px 0; text-align: center;">Cloud & DevOps</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">AWS</span>
                <span style="color: #6b7280; font-size: 14px;">90%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">Docker</span>
                <span style="color: #6b7280; font-size: 14px;">95%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">Pulumi</span>
                <span style="color: #6b7280; font-size: 14px;">85%</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #000000; font-weight: 500;">CI/CD</span>
                <span style="color: #6b7280; font-size: 14px;">90%</span>
              </div>
            </div>
          </div>
        </div>
      `;
      pdfContent.appendChild(skills);

      // Professional Experience
      const experience = document.createElement('div');
      experience.style.cssText = 'margin-bottom: 40px;';
      let experienceHTML = `
        <h2 style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Professional Experience</h2>
      `;
      
      experiences.forEach((exp, index) => {
        experienceHTML += `
          <div style="background-color: #ffffff; border-left: 4px solid #1e40af; padding: 20px; margin-bottom: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
              <div>
                <h3 style="font-size: 20px; font-weight: bold; color: #000000; margin: 0 0 5px 0;">${exp.title}</h3>
                <p style="font-size: 18px; color: #1e40af; font-weight: 600; margin: 0;">${exp.company}</p>
              </div>
              <span style="color: #6b7280; font-weight: 600; background-color: #f3f4f6; padding: 5px 15px; border-radius: 20px;">${exp.duration}</span>
            </div>
            <p style="color: #000000; margin: 0 0 15px 0; font-size: 16px; line-height: 1.6;">${exp.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${exp.technologies.map(tech => `
                <span style="background-color: #dbeafe; color: #1e3a8a; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; border: 1px solid #93c5fd;">${tech}</span>
              `).join('')}
            </div>
          </div>
        `;
      });
      
      experience.innerHTML = experienceHTML;
      pdfContent.appendChild(experience);

      // Key Projects
      const projectsSection = document.createElement('div');
      projectsSection.style.cssText = 'margin-bottom: 40px;';
      let projectsHTML = `
        <h2 style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Key Projects</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
      `;
      
      projects.forEach((project, index) => {
        projectsHTML += `
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
              <span style="font-size: 24px; margin-right: 15px;">${project.icon}</span>
              <h3 style="font-size: 18px; font-weight: bold; color: #000000; margin: 0;">${project.title}</h3>
            </div>
            <p style="color: #000000; margin: 0 0 15px 0; font-size: 14px; line-height: 1.6;">${project.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${project.technologies.map(tech => `
                <span style="background-color: #dbeafe; color: #1e3a8a; padding: 3px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">${tech}</span>
              `).join('')}
            </div>
          </div>
        `;
      });
      
      projectsHTML += `</div>`;
      projectsSection.innerHTML = projectsHTML;
      pdfContent.appendChild(projectsSection);

      // Education & Research
      const education = document.createElement('div');
      education.style.cssText = 'margin-bottom: 40px;';
      education.innerHTML = `
        <h2 style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Education & Research</h2>
        <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; border: 1px solid #93c5fd; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="font-size: 20px; font-weight: bold; color: #000000; margin: 0 0 10px 0;">MOZART IoT Research</h3>
          <p style="color: #000000; margin: 0 0 10px 0; font-size: 16px; line-height: 1.6;">Published research article at WWW'20 conference on IoT modeling with rule-based systems</p>
          <p style="color: #6b7280; margin: 0; font-size: 14px;">Built prototypes for connected device simulation using Vue.js, Node.js, Java, and SQLite</p>
        </div>
      `;
      pdfContent.appendChild(education);

      // Contact Information
      const contact = document.createElement('div');
      contact.style.cssText = 'margin-bottom: 20px;';
      contact.innerHTML = `
        <h2 style="font-size: 24px; font-weight: bold; margin: 0 0 20px 0; color: #000000; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">Contact Information</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="color: #1e40af; font-size: 20px;">📧</div>
            <span style="color: #000000; font-weight: 600; font-size: 16px;">Email Me</span>
          </div>
          <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="color: #1e40af; font-size: 20px;">💼</div>
            <span style="color: #000000; font-weight: 600; font-size: 16px;">LinkedIn</span>
          </div>
          <div style="display: flex; align-items: center; gap: 15px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="color: #1e40af; font-size: 20px;">🐙</div>
            <span style="color: #000000; font-weight: 600; font-size: 16px;">GitHub</span>
          </div>
        </div>
      `;
      pdfContent.appendChild(contact);

      // Add to DOM temporarily
      pdfContent.style.position = 'absolute';
      pdfContent.style.left = '-9999px';
      pdfContent.style.top = '0';
      document.body.appendChild(pdfContent);

      const canvas = await html2canvas(pdfContent, {
        scale: 2,
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
      const pdf = new jsPDF("p", "mm", "a4");
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Alejandro_Martinez_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again or contact support.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with Download Button */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Professional Resume</h1>
            <p className="text-gray-600">Alejandro Martinez - CTO & Full-Stack Developer</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </a>
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
                  Download PDF
                </>
              )}
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div id="resume-content" className="bg-white shadow-2xl rounded-xl p-10 border border-gray-200">
          {/* Header Section */}
          <div className="text-center mb-10 border-b-2 border-blue-200 pb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-3 tracking-tight">Alejandro Martinez</h1>
            <p className="text-2xl text-blue-600 mb-6 font-medium">CTO & Co-Founder | Full-Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <a href="mailto:alejandro.martinez.0598@gmail.com" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                alejandro.martinez.0598@gmail.com
              </a>
              <a href="https://linkedin.com/in/alejandromartinez-116836120" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/alexmtzrivero" className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
              Professional Summary
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed text-lg">
                Experienced software engineer with over 8 years of expertise in building robust, scalable applications and leading engineering teams. 
                Currently serving as CTO and co-founder of Platsage, where I've designed AI-powered omnichannel messaging platforms serving 50+ businesses 
                and handling 100k+ monthly conversations. Passionate about creating solutions that drive measurable impact, including reducing customer 
                response time by 70% through AI automation.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div key={category.title} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 font-medium w-8">{skill.level}%</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white border-l-4 border-blue-500 pl-6 pr-6 py-6 rounded-r-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 font-semibold text-lg bg-gray-100 px-3 py-1 rounded-full">{exp.duration}</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
              Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{project.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Research */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-3 flex items-center gap-3">
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
              Education & Research
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">MOZART IoT Research</h3>
              <p className="text-gray-700 mb-3 text-lg">Published research article at WWW'20 conference on IoT modeling with rule-based systems</p>
              <p className="text-gray-600">Built prototypes for connected device simulation using Vue.js, Node.js, Java, and SQLite</p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
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
        </div>
      </div>
    </div>
  );
}