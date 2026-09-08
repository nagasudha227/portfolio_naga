import React from 'react';
import { HERO_DATA, CURRENT_BUILDS } from '../data/portfolioData';
import { ProjectId } from '../types';

interface HeroSectionProps {
  onSelectProject: (projectId: ProjectId) => void;
  onCopyEmail: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectProject,
  onCopyEmail,
}) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-2 pb-10 border-b border-[#1E2023] scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Identity & Proposition */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#101113] border border-[#25272B] font-mono text-[11px] text-[#918fa1]">
              <span className="text-[#c3c0ff] font-semibold">[ID: {HERO_DATA.idBadge}]</span>
              <span>{HERO_DATA.role}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#e5e2e3] mt-2 leading-[1.08]">
              {HERO_DATA.name}
            </h1>

            <p className="text-xl sm:text-2xl text-[#c3c0ff] font-medium tracking-tight mt-1">
              {HERO_DATA.quote}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#918fa1] max-w-xl leading-relaxed">
            {HERO_DATA.description}
          </p>

          {/* Primary Actions */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              id="hero-view-work-btn"
              href="#work"
              onClick={(e) => handleScrollTo(e, '#work')}
              className="px-5 py-2.5 rounded bg-[#4f46e5] hover:bg-[#4338ca] text-white font-mono text-xs transition-all duration-150 flex items-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
            >
              <span>VIEW MY WORK</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
            <a
              id="hero-connect-btn"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-5 py-2.5 rounded bg-[#151619] border border-[#25272B] hover:border-[#adc6ff] hover:text-white font-mono text-xs text-[#e5e2e3] transition-colors duration-150 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>LET&apos;S CONNECT</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </a>
          </div>

          {/* Direct Channels Bar */}
          <div className="pt-3 flex flex-wrap items-center gap-3 border-t border-[#1E2023] text-[#918fa1] font-mono text-xs">
            <span className="text-[10px] text-[#918fa1] tracking-wider uppercase font-semibold">
              CHANNELS:
            </span>
            <a
              id="channel-github"
              href={HERO_DATA.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c3c0ff] transition-colors flex items-center gap-1"
            >
              <span>GITHUB</span>
            </a>
            <span className="text-[#25272B]">/</span>
            <a
              id="channel-linkedin"
              href={HERO_DATA.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#c3c0ff] transition-colors flex items-center gap-1"
            >
              <span>LINKEDIN</span>
            </a>
            <span className="text-[#25272B]">/</span>
            <button
              id="channel-email-btn"
              type="button"
              onClick={onCopyEmail}
              className="hover:text-[#c3c0ff] transition-colors flex items-center gap-1 cursor-pointer"
              title="Click to copy email address"
            >
              <span>EMAIL</span>
            </button>
          </div>
        </div>

        {/* Right Column: Personal Tech Panel (Current Builds) */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#151619] border border-[#25272B] rounded-lg p-5 sm:p-6 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {/* Ambient Top Status */}
            <div className="flex items-center justify-between pb-3 border-b border-[#25272B]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="font-mono text-xs text-[#e5e2e3] font-semibold tracking-wider">
                  CURRENT BUILDS
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#918fa1] bg-[#101113] px-2 py-0.5 border border-[#25272B] rounded">
                TELEMETRY LIVE
              </span>
            </div>

            {/* List of current builds */}
            <div className="mt-4 space-y-3.5">
              {CURRENT_BUILDS.map((build) => (
                <div
                  key={build.id}
                  id={`hero-build-${build.id}`}
                  onClick={() => {
                    onSelectProject(build.id);
                    const el = document.querySelector('#work');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-3.5 rounded bg-[#101113] border border-[#25272B] hover:border-[#4f46e5] hover:bg-[#131417] transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[#918fa1] font-mono text-[11px] mb-1">
                    <span className="text-[#c3c0ff] font-semibold">{build.number}</span>
                    {build.statusColor === 'emerald' ? (
                      <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {build.status}
                      </span>
                    ) : (
                      <span className="text-[#adc6ff] flex items-center gap-1 text-[10px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#adc6ff]" />
                        {build.status}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-[#e5e2e3] group-hover:text-[#c3c0ff] transition-colors">
                    {build.title}
                  </h4>
                  <p className="text-xs text-[#918fa1] mt-1 line-clamp-2 leading-relaxed">
                    {build.description}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {build.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded bg-[#151619] border border-[#25272B] text-[#9A9DA3] font-mono text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Metadata Strip */}
            <div className="mt-4 pt-3 border-t border-[#25272B] flex justify-between items-center text-[#918fa1] font-mono text-[10px]">
              <span className="tracking-widest">DOMAINS</span>
              <span className="text-[#918fa1]">AI · SOFTWARE · DATA · PRODUCT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
