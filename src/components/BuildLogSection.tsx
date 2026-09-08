import React from 'react';
import { BUILD_LOG_ITEMS } from '../data/portfolioData';
import { ProjectId } from '../types';

interface BuildLogSectionProps {
  onOpenCaseStudy: (projectId: ProjectId) => void;
}

export const BuildLogSection: React.FC<BuildLogSectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="builds" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-[#1E2023] pb-3 gap-2">
        <div>
          <div className="font-mono text-[11px] text-[#c3c0ff] tracking-widest uppercase">
            02 // SPRINT ARTIFACTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#e5e2e3]">
            BUILD LOG
          </h2>
        </div>
        <div className="font-mono text-xs text-[#918fa1]">
          <span>HIGH-PRESSURE TIME-BOXED EXECUTION</span>
        </div>
      </div>

      {/* Grid of builds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BUILD_LOG_ITEMS.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`p-6 rounded-lg bg-[#151619] border border-[#25272B] hover:border-[${
              item.badgeVariant === 'emerald' ? '#4f46e5' : '#adc6ff'
            }] transition-all duration-150 flex flex-col justify-between space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] group`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-0.5 rounded bg-[#101113] border border-[#25272B] font-mono text-xs font-semibold ${
                    item.badgeVariant === 'emerald' ? 'text-[#c3c0ff]' : 'text-[#adc6ff]'
                  }`}
                >
                  {item.buildNumber}
                </span>
                <span className="font-mono text-[11px] text-[#918fa1] tracking-wider">
                  {item.tag}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold text-[#e5e2e3] group-hover:text-[#c3c0ff] transition-colors">
                  {item.title}
                </h3>
                {item.projectId && (
                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy(item.projectId!)}
                    className="shrink-0 p-1.5 rounded bg-[#101113] border border-[#25272B] hover:border-[#c3c0ff] text-[#918fa1] hover:text-white transition-all text-xs font-mono flex items-center gap-1 cursor-pointer"
                    title="Read technical monograph"
                  >
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                    <span className="hidden sm:inline">Details</span>
                  </button>
                )}
              </div>

              <div className="space-y-2.5 text-xs text-[#918fa1]">
                <div>
                  <span className="text-[#918fa1] font-mono text-[10px] uppercase tracking-wider block font-semibold">
                    PROBLEM STATEMENT:
                  </span>
                  <p className="text-[#c7c4d8] leading-relaxed mt-0.5">
                    {item.problemStatement}
                  </p>
                </div>
                <div>
                  <span className="text-[#918fa1] font-mono text-[10px] uppercase tracking-wider block font-semibold">
                    WHAT I BUILT:
                  </span>
                  <p className="text-[#c7c4d8] leading-relaxed mt-0.5">
                    {item.whatIBuilt}
                  </p>
                </div>
                <div>
                  <span className="text-[#918fa1] font-mono text-[10px] uppercase tracking-wider block font-semibold">
                    MY ROLE:
                  </span>
                  <p className="text-[#c7c4d8] leading-relaxed mt-0.5">
                    {item.myRole}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#25272B] flex justify-between items-center text-[#918fa1] font-mono text-xs">
              <span>{item.techStack}</span>
              {item.badgeVariant === 'emerald' ? (
                <span className="text-emerald-400 font-mono text-[11px] font-medium flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {item.badgeText}
                </span>
              ) : (
                <span className="text-[#adc6ff] font-mono text-[11px] font-medium flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#adc6ff]" />
                  {item.badgeText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
