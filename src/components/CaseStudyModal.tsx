import React, { useState, useEffect } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ProjectId, CaseStudySectionId } from '../types';

interface CaseStudyModalProps {
  isOpen: boolean;
  projectId: ProjectId;
  onClose: () => void;
  onSwitchProject: (id: ProjectId) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  projectId,
  onClose,
  onSwitchProject,
}) => {
  const [activeSection, setActiveSection] = useState<CaseStudySectionId>('OVERVIEW');

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const caseStudy = CASE_STUDIES[projectId] || CASE_STUDIES.ALTERIA;
  const sectionsList: CaseStudySectionId[] = [
    'OVERVIEW',
    'PROCESS',
    'ARCHITECTURE',
    'TECHNOLOGY',
    'CONTRIBUTION',
    'CHALLENGES',
    'OUTCOME',
  ];

  const currentSectionData = caseStudy.sections[activeSection];

  return (
    <div
      id="case-study-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#181A1E] border border-[#33373E] rounded-lg w-full max-w-4xl max-h-[92vh] flex flex-col shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#25272B] flex items-center justify-between bg-[#151619]">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="material-symbols-outlined text-[#c3c0ff] text-[22px] shrink-0">analytics</span>
            <div>
              <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block">
                TECHNICAL MONOGRAPH
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#e5e2e3] tracking-tight truncate">
                {caseStudy.projectTitle}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[#25272B] text-[#918fa1] hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Project Selector Bar inside Modal */}
        <div className="px-4 py-2 bg-[#121316] border-b border-[#25272B] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-[#918fa1] text-[10px] uppercase mr-1">MONOGRAPHS:</span>
          {(['ALTERIA', 'CLEANNET', 'MESH_DISPATCHER', 'ACOUSTIC_CLASSIFIER'] as ProjectId[]).map((pid) => (
            <button
              key={pid}
              type="button"
              onClick={() => {
                onSwitchProject(pid);
                setActiveSection('OVERVIEW');
              }}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                projectId === pid
                  ? 'bg-[#1e2025] text-[#c3c0ff] border border-[#4f46e5]'
                  : 'text-[#918fa1] hover:text-white border border-transparent'
              }`}
            >
              {pid.replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Internal Tab Navigation */}
        <div className="px-4 pt-2 border-b border-[#25272B] bg-[#101113] flex gap-4 sm:gap-6 overflow-x-auto text-xs font-mono">
          {sectionsList.map((sec) => (
            <button
              key={sec}
              type="button"
              onClick={() => setActiveSection(sec)}
              className={`pb-2.5 transition-colors whitespace-nowrap cursor-pointer ${
                activeSection === sec
                  ? 'border-b-2 border-[#c3c0ff] text-[#c3c0ff] font-semibold'
                  : 'border-b-2 border-transparent text-[#918fa1] hover:text-[#e5e2e3]'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Modal Body (Dynamic Sections) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-[#918fa1] text-sm leading-relaxed">
          {currentSectionData && (
            <div className="space-y-4 animate-in fade-in duration-100">
              <h4 className="text-lg font-semibold text-[#e5e2e3]">
                {currentSectionData.title}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-[#c7c4d8]">
                {currentSectionData.content}
              </p>

              {currentSectionData.callout && (
                <div className="p-3.5 bg-[#101113] border border-[#25272B] rounded text-xs font-mono text-[#c3c0ff] flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>{currentSectionData.callout}</span>
                </div>
              )}

              {currentSectionData.highlights && currentSectionData.highlights.length > 0 && (
                <div className="p-4 rounded bg-[#101113] border border-[#25272B] space-y-2">
                  <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
                    KEY ARCHITECTURAL HIGHLIGHTS
                  </span>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#e5e2e3]">
                    {currentSectionData.highlights.map((h, i) => (
                      <li key={i} className="leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-[#25272B] bg-[#101113] flex justify-between items-center text-xs font-mono text-[#918fa1]">
          <span className="text-[11px] text-[#918fa1]">SECURITY LEVEL: OPEN INSPECTION</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded bg-[#151619] border border-[#25272B] hover:text-white text-[#e5e2e3] transition-colors cursor-pointer active:scale-95"
          >
            CLOSE DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
