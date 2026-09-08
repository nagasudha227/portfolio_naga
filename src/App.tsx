/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ProjectId } from './types';
import { HERO_DATA } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectCommandCenter } from './components/ProjectCommandCenter';
import { BuildLogSection } from './components/BuildLogSection';
import { AboutSection } from './components/AboutSection';
import { TechnologyIndex } from './components/TechnologyIndex';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { TerminalModal } from './components/TerminalModal';
import { Toast } from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('work');
  const [selectedProject, setSelectedProject] = useState<ProjectId>('ALTERIA');
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [caseStudyProjectId, setCaseStudyProjectId] = useState<ProjectId>('ALTERIA');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(HERO_DATA.email)
      .then(() => {
        showToast(`Copied ${HERO_DATA.email} to clipboard`);
      })
      .catch(() => {
        showToast(`Email address: ${HERO_DATA.email}`);
      });
  };

  const handleOpenCaseStudy = (projectId: ProjectId) => {
    setCaseStudyProjectId(projectId);
    setCaseStudyOpen(true);
  };

  // Scrollspy to highlight current active nav tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'builds', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0A0A0B] text-[#e5e2e3] font-sans antialiased min-h-screen flex flex-col selection:bg-[#4f46e5] selection:text-white">
      {/* 1. TOP APP BAR */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* 2. MAIN CANVAS */}
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 space-y-14 sm:space-y-16">
        {/* HERO SECTION */}
        <HeroSection
          onSelectProject={(pid) => setSelectedProject(pid)}
          onCopyEmail={handleCopyEmail}
        />

        {/* 01 // PRODUCTION WORKSPACE — Project Command Center */}
        <ProjectCommandCenter
          selectedProject={selectedProject}
          onSelectProject={(pid) => setSelectedProject(pid)}
          onOpenCaseStudy={handleOpenCaseStudy}
        />

        {/* 02 // SPRINT ARTIFACTS — Build Log */}
        <BuildLogSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 03 // PHILOSOPHY & PROFILE — About & Approach */}
        <AboutSection />

        {/* 04 // CAPABILITY INVENTORY — Technology Index */}
        <TechnologyIndex />

        {/* 05 // VERIFICATION & RECOGNITION — Achievements & Track Record */}
        <AchievementsSection />

        {/* 06 // CONTACT & INTAKE — Let's Build Something Meaningful */}
        <ContactSection onCopyEmail={handleCopyEmail} onShowToast={showToast} />
      </main>

      {/* 3. FOOTER */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onShowToast={showToast}
      />

      {/* MODAL 1: Technical Monograph / Case Study */}
      <CaseStudyModal
        isOpen={caseStudyOpen}
        projectId={caseStudyProjectId}
        onClose={() => setCaseStudyOpen(false)}
        onSwitchProject={(pid) => setCaseStudyProjectId(pid)}
      />

      {/* MODAL 2: Full Formatted Resume / Dossier */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onShowToast={showToast}
      />

      {/* MODAL 3: Interactive CLI Terminal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* SYSTEM TOAST NOTIFICATION */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
