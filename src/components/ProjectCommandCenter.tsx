import React, { useState } from 'react';
import { PROJECTS, ARCHIVE_CARDS } from '../data/portfolioData';
import { ProjectId } from '../types';

interface ProjectCommandCenterProps {
  selectedProject: ProjectId;
  onSelectProject: (projectId: ProjectId) => void;
  onOpenCaseStudy: (projectId: ProjectId) => void;
}

export const ProjectCommandCenter: React.FC<ProjectCommandCenterProps> = ({
  selectedProject,
  onSelectProject,
  onOpenCaseStudy,
}) => {
  const [activePipelineStep, setActivePipelineStep] = useState<number | null>(null);

  return (
    <section id="work" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-[#1E2023] pb-3 gap-2">
        <div>
          <div className="font-mono text-[11px] text-[#c3c0ff] tracking-widest uppercase">
            01 // PRODUCTION WORKSPACE
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#e5e2e3]">
            Project Command Center
          </h2>
        </div>
        <div className="font-mono text-xs text-[#918fa1]">
          <span>STATUS: 2 CORE REPOSITORIES ACTIVE</span>
        </div>
      </div>

      {/* Main Interactive Explorer Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Interactive Project Index */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0" id="project-tabs">
          <button
            type="button"
            id="tab-btn-ALTERIA"
            onClick={() => onSelectProject('ALTERIA')}
            className={`w-full text-left p-3.5 rounded transition-all duration-150 flex items-center justify-between group cursor-pointer ${
              selectedProject === 'ALTERIA'
                ? 'bg-[#151619] border border-[#c3c0ff] text-[#c3c0ff] shadow-[0_0_15px_rgba(195,192,255,0.1)]'
                : 'bg-[#101113] border border-[#25272B] text-[#918fa1] hover:border-[#4f46e5] hover:text-white'
            }`}
          >
            <div className="flex flex-col">
              <span className={`font-mono text-[10px] ${selectedProject === 'ALTERIA' ? 'text-[#c3c0ff]' : 'text-[#918fa1] group-hover:text-[#c3c0ff]'}`}>
                01 / REPOSITORY
              </span>
              <span className="text-sm font-semibold tracking-tight">ALTERIA</span>
            </div>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>

          <button
            type="button"
            id="tab-btn-CLEANNET"
            onClick={() => onSelectProject('CLEANNET')}
            className={`w-full text-left p-3.5 rounded transition-all duration-150 flex items-center justify-between group cursor-pointer ${
              selectedProject === 'CLEANNET'
                ? 'bg-[#151619] border border-[#adc6ff] text-[#adc6ff] shadow-[0_0_15px_rgba(173,198,255,0.1)]'
                : 'bg-[#101113] border border-[#25272B] text-[#918fa1] hover:border-[#3B82F6] hover:text-white'
            }`}
          >
            <div className="flex flex-col">
              <span className={`font-mono text-[10px] ${selectedProject === 'CLEANNET' ? 'text-[#adc6ff]' : 'text-[#918fa1] group-hover:text-[#adc6ff]'}`}>
                02 / REPOSITORY
              </span>
              <span className="text-sm font-semibold tracking-tight">CLEANNET AI</span>
            </div>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>

          <button
            type="button"
            id="tab-btn-ARCHIVE"
            onClick={() => onSelectProject('ARCHIVE')}
            className={`w-full text-left p-3.5 rounded transition-all duration-150 flex items-center justify-between group cursor-pointer ${
              selectedProject === 'ARCHIVE'
                ? 'bg-[#151619] border border-[#e5e2e3] text-[#e5e2e3] shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                : 'bg-[#101113] border border-[#25272B] text-[#918fa1] hover:border-[#3B82F6] hover:text-white'
            }`}
          >
            <div className="flex flex-col">
              <span className={`font-mono text-[10px] ${selectedProject === 'ARCHIVE' ? 'text-white' : 'text-[#918fa1] group-hover:text-[#e5e2e3]'}`}>
                03 / INDEX
              </span>
              <span className="text-sm font-semibold tracking-tight">OTHER BUILDS</span>
            </div>
            <span className="material-symbols-outlined text-[18px]">archive</span>
          </button>
        </div>

        {/* Right Side: Dynamic Project Preview Canvas */}
        <div className="lg:col-span-9 bg-[#151619] border border-[#25272B] rounded-lg p-6 sm:p-8 relative min-h-[520px] shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          {/* PANEL 1: ALTERIA */}
          {selectedProject === 'ALTERIA' && (
            <div className="space-y-6" id="panel-ALTERIA">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#25272B] pb-4 gap-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#4f46e5]/20 border border-[#4f46e5]/40 text-[#adc6ff] font-mono text-[10px] uppercase tracking-wider">
                    {PROJECTS.ALTERIA.categoryBadge}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e5e2e3] mt-1.5">
                    {PROJECTS.ALTERIA.name}
                  </h3>
                  <p className="font-mono text-xs text-[#c3c0ff] mt-0.5">
                    {PROJECTS.ALTERIA.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  id="alteria-case-study-btn"
                  onClick={() => onOpenCaseStudy('ALTERIA')}
                  className="px-4 py-2 rounded bg-[#101113] border border-[#25272B] hover:border-[#c3c0ff] hover:text-white text-[#e5e2e3] font-mono text-xs transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer active:scale-95 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">description</span>
                  <span>VIEW CASE STUDY</span>
                </button>
              </div>

              {/* Description */}
              <p className="text-base text-[#918fa1] leading-relaxed">
                {PROJECTS.ALTERIA.description}
              </p>

              {/* Language Support Pill Row */}
              <div className="p-3.5 rounded bg-[#101113] border border-[#25272B] space-y-2">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
                  SUPPORTED SYSTEM LANGUAGES ({PROJECTS.ALTERIA.languages?.length || 5})
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS.ALTERIA.languages?.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded bg-[#151619] border border-[#25272B] text-white font-mono text-xs hover:border-[#c3c0ff] transition-colors"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Capabilities Grid */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
                  CORE CAPABILITIES MATRIX
                </span>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                  {PROJECTS.ALTERIA.capabilities?.map((cap) => (
                    <div
                      key={cap.title}
                      className="p-3 bg-[#101113] border border-[#25272B] rounded hover:border-[#4f46e5]/60 transition-colors group"
                    >
                      <div
                        className={`material-symbols-outlined text-[20px] mb-1.5 ${
                          cap.accent === 'primary' ? 'text-[#c3c0ff]' : 'text-[#adc6ff]'
                        }`}
                      >
                        {cap.icon}
                      </div>
                      <div className="text-sm font-medium text-[#e5e2e3] group-hover:text-[#c3c0ff] transition-colors">
                        {cap.title}
                      </div>
                      <div className="text-xs text-[#918fa1] mt-0.5 leading-snug">
                        {cap.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Architecture Flow Diagram */}
              <div className="p-3.5 rounded bg-[#0D0E10] border border-[#25272B] space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider font-semibold">
                    EXECUTION PIPELINE FLOW
                  </span>
                  <span className="font-mono text-[11px] text-[#c3c0ff]">
                    FLOW SPEC v2.4
                  </span>
                </div>
                <div className="overflow-x-auto py-2">
                  <div className="flex items-center min-w-[640px] justify-between text-center font-mono text-xs text-[#e5e2e3] gap-2">
                    {PROJECTS.ALTERIA.pipeline?.map((node, index) => {
                      const isLast = index === (PROJECTS.ALTERIA.pipeline?.length || 1) - 1;
                      const isHighlighted = activePipelineStep === index;

                      return (
                        <React.Fragment key={node.step}>
                          <button
                            type="button"
                            onClick={() => setActivePipelineStep(isHighlighted ? null : index)}
                            className={`p-2 rounded w-36 transition-all text-left cursor-pointer ${
                              isLast
                                ? 'bg-[#151619] border border-[#c3c0ff] text-[#c3c0ff]'
                                : isHighlighted
                                ? 'bg-[#201f20] border border-[#adc6ff] text-white'
                                : 'bg-[#151619] border border-[#25272B] hover:border-[#918fa1]'
                            }`}
                          >
                            <span
                              className={`block font-mono text-[10px] ${
                                isLast ? 'text-[#c3c0ff]' : 'text-[#adc6ff]'
                              }`}
                            >
                              {node.step}
                            </span>
                            <span className="text-xs font-medium block truncate">
                              {node.title}
                            </span>
                          </button>
                          {!isLast && <span className="text-[#918fa1]">→</span>}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

                {/* Pipeline Step Detail Inspection */}
                {activePipelineStep !== null && PROJECTS.ALTERIA.pipeline && (
                  <div className="p-2.5 rounded bg-[#151619] border border-[#25272B] text-xs text-[#918fa1] flex items-center justify-between animate-in fade-in">
                    <div>
                      <span className="text-[#c3c0ff] font-mono font-medium mr-2">
                        {PROJECTS.ALTERIA.pipeline[activePipelineStep].step} DETAIL:
                      </span>
                      <span>{PROJECTS.ALTERIA.pipeline[activePipelineStep].desc}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActivePipelineStep(null)}
                      className="text-[#918fa1] hover:text-white font-mono text-[10px]"
                    >
                      CLEAR
                    </button>
                  </div>
                )}
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase mr-2 font-semibold">
                  TECH STACK:
                </span>
                {PROJECTS.ALTERIA.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-[#101113] border border-[#25272B] text-[#e5e2e3] font-mono text-xs hover:border-[#c3c0ff] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* PANEL 2: CLEANNET AI */}
          {selectedProject === 'CLEANNET' && (
            <div className="space-y-6" id="panel-CLEANNET">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#25272B] pb-4 gap-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-[#0566d9]/20 border border-[#0566d9]/40 text-[#adc6ff] font-mono text-[10px] uppercase tracking-wider">
                    {PROJECTS.CLEANNET.categoryBadge}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e5e2e3] mt-1.5">
                    {PROJECTS.CLEANNET.name}
                  </h3>
                  <p className="font-mono text-xs text-[#adc6ff] mt-0.5">
                    {PROJECTS.CLEANNET.tagline}
                  </p>
                </div>
                <button
                  type="button"
                  id="cleannet-case-study-btn"
                  onClick={() => onOpenCaseStudy('CLEANNET')}
                  className="px-4 py-2 rounded bg-[#101113] border border-[#25272B] hover:border-[#adc6ff] hover:text-white text-[#e5e2e3] font-mono text-xs transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer active:scale-95 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">description</span>
                  <span>VIEW CASE STUDY</span>
                </button>
              </div>

              {/* Description */}
              <p className="text-base text-[#918fa1] leading-relaxed">
                {PROJECTS.CLEANNET.description}
              </p>

              {/* Inputs Considered & Risk Levels Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Inputs */}
                <div className="md:col-span-7 p-3.5 rounded bg-[#101113] border border-[#25272B] space-y-2">
                  <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
                    HEURISTIC INPUT VECTORS
                  </span>
                  <ul className="font-mono text-xs text-[#e5e2e3] space-y-1.5">
                    {PROJECTS.CLEANNET.heuristics?.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#adc6ff] mt-0.5">▸</span>
                        <span className="text-[#c7c4d8]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risk Levels Indicator */}
                <div className="md:col-span-5 p-3.5 rounded bg-[#101113] border border-[#25272B] space-y-2 flex flex-col justify-between">
                  <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
                    TRI-STAGE RISK CLASSIFIER
                  </span>
                  <div className="space-y-2 font-mono text-xs">
                    {PROJECTS.CLEANNET.riskClassifier?.map((risk) => (
                      <div
                        key={risk.level}
                        className={`flex items-center justify-between p-2 rounded bg-[#151619] border ${risk.color}`}
                      >
                        <span className="flex items-center gap-2 font-semibold">
                          <span className={`h-2 w-2 rounded-full ${risk.dotColor}`} />
                          {risk.level}
                        </span>
                        <span className="text-[#918fa1] text-[11px]">{risk.action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Block Representation */}
              <div className="p-3.5 rounded bg-[#0D0E10] border border-[#25272B] space-y-2">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
                  PREDICTIVE OUTPUT BLOCK SAMPLE
                </span>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-[#151619] border border-[#25272B]">
                    <span className="text-[#918fa1] text-[10px] block">PREDICTED RISK</span>
                    <span className="text-red-400 font-semibold">{PROJECTS.CLEANNET.sampleOutput?.predictedRisk}</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#151619] border border-[#25272B]">
                    <span className="text-[#918fa1] text-[10px] block">CONFIDENCE</span>
                    <span className="text-[#e5e2e3] font-semibold">{PROJECTS.CLEANNET.sampleOutput?.confidence}</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#151619] border border-[#25272B] col-span-2 md:col-span-1">
                    <span className="text-[#918fa1] text-[10px] block">REASONING</span>
                    <span className="text-[#e5e2e3] truncate block" title="Market Surge + Sun">
                      {PROJECTS.CLEANNET.sampleOutput?.reasoning}
                    </span>
                  </div>
                  <div className="p-2.5 rounded bg-[#151619] border border-[#25272B]">
                    <span className="text-[#918fa1] text-[10px] block">RECOMMENDED ACTION</span>
                    <span className="text-[#c3c0ff] font-semibold">{PROJECTS.CLEANNET.sampleOutput?.action}</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#151619] border border-[#25272B]">
                    <span className="text-[#918fa1] text-[10px] block">ALERT</span>
                    <span className="text-amber-400 font-semibold">{PROJECTS.CLEANNET.sampleOutput?.alert}</span>
                  </div>
                </div>
              </div>

              {/* Architecture Flow */}
              <div className="p-3.5 rounded bg-[#101113] border border-[#25272B] space-y-2">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
                  PIPELINE ARCHITECTURE
                </span>
                <div className="overflow-x-auto py-1">
                  <div className="flex items-center min-w-[700px] justify-between text-center font-mono text-xs">
                    {PROJECTS.CLEANNET.pipeline?.map((node, i) => {
                      const isLast = i === (PROJECTS.CLEANNET.pipeline?.length || 1) - 1;
                      return (
                        <React.Fragment key={node.step}>
                          <span className="p-2 rounded bg-[#151619] border border-[#25272B] text-[#e5e2e3]">
                            {node.title}
                          </span>
                          {!isLast && <span className="text-[#918fa1]">→</span>}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] text-[#918fa1] uppercase mr-2 font-semibold">
                  TECH STACK:
                </span>
                {PROJECTS.CLEANNET.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded bg-[#101113] border border-[#25272B] text-[#e5e2e3] font-mono text-xs hover:border-[#adc6ff] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* PANEL 3: ARCHIVE */}
          {selectedProject === 'ARCHIVE' && (
            <div className="space-y-6" id="panel-ARCHIVE">
              <div className="border-b border-[#25272B] pb-4">
                <span className="px-2.5 py-0.5 rounded bg-[#101113] border border-[#25272B] text-[#918fa1] font-mono text-[10px] uppercase tracking-wider">
                  {PROJECTS.ARCHIVE.categoryBadge}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#e5e2e3] mt-1.5">
                  {PROJECTS.ARCHIVE.name}
                </h3>
                <p className="font-mono text-xs text-[#918fa1] mt-0.5">
                  {PROJECTS.ARCHIVE.tagline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ARCHIVE_CARDS.map((card) => (
                  <div
                    key={card.code}
                    className="p-4 rounded bg-[#101113] border border-[#25272B] hover:border-[#918fa1] transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-[#918fa1] font-mono text-[11px]">
                      <span className="font-semibold text-[#c3c0ff]">{card.code}</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {card.status}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-[#e5e2e3] group-hover:text-[#c3c0ff] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#918fa1] leading-relaxed">{card.description}</p>
                    <div className="font-mono text-[11px] text-[#918fa1] pt-1 border-t border-[#25272B]">
                      {card.tech}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded bg-[#101113] border border-dashed border-[#25272B] text-center font-mono text-xs text-[#918fa1]">
                MORE VERIFIED MODULES ACCESSIBLE DIRECTLY VIA GITHUB REGISTRY
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
