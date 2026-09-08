import React, { useState } from 'react';

export const AboutSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    { num: '01', name: 'UNDERSTAND', desc: 'Rigorous problem scoping, edge-case triage, and real constraint analysis.' },
    { num: '02', name: 'DESIGN', desc: 'Normalized data schemas, API contracts, and low-latency system topologies.' },
    { num: '03', name: 'BUILD', desc: 'Pragmatic, typed implementation in Python/TypeScript with minimal bloat.' },
    { num: '04', name: 'TEST', desc: 'Acoustic variance simulation, corrupted packet injection, and stress benchmarking.' },
    { num: '05', name: 'IMPROVE', desc: 'Profiling memory bounds, caching hot paths, and deterministic output hardening.' },
  ];

  return (
    <section id="about" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-[#1E2023] pb-3 gap-2">
        <div>
          <div className="font-mono text-[11px] text-[#c3c0ff] tracking-widest uppercase">
            03 // PHILOSOPHY &amp; PROFILE
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#e5e2e3]">
            About &amp; Approach
          </h2>
        </div>
        <div className="font-mono text-xs text-[#918fa1]">
          <span>DISCIPLINED SYSTEMS THINKING</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Editorial Bio */}
        <div className="lg:col-span-6 bg-[#151619] border border-[#25272B] rounded-lg p-6 sm:p-7 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#c3c0ff] tracking-wider uppercase font-semibold">
              WHO I AM
            </span>
            <h3 className="text-xl font-semibold text-[#e5e2e3]">
              Student Developer with an Architect&apos;s Temperament
            </h3>
            <p className="text-sm text-[#918fa1] leading-relaxed">
              Student software developer focused on applied Artificial Intelligence, Machine Learning, backend architectures, and pragmatic product engineering. Rather than treating machine learning as an isolated academic discipline, I synthesize predictive logic with production software systems.
            </p>
          </div>

          <div className="pt-3 border-t border-[#25272B] space-y-2.5">
            <span className="font-mono text-[10px] text-[#918fa1] tracking-wider uppercase font-semibold">
              WHAT I BUILD
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#e5e2e3]">
              <div className="flex items-center gap-2 p-2 bg-[#101113] rounded border border-[#25272B] hover:border-[#4f46e5] transition-colors">
                <span className="material-symbols-outlined text-[#c3c0ff] text-[16px]">check_circle</span>
                <span>AI-Powered Applications</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#101113] rounded border border-[#25272B] hover:border-[#4f46e5] transition-colors">
                <span className="material-symbols-outlined text-[#c3c0ff] text-[16px]">check_circle</span>
                <span>Software Products</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#101113] rounded border border-[#25272B] hover:border-[#4f46e5] transition-colors">
                <span className="material-symbols-outlined text-[#c3c0ff] text-[16px]">check_circle</span>
                <span>Data-Driven Systems</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-[#101113] rounded border border-[#25272B] hover:border-[#4f46e5] transition-colors">
                <span className="material-symbols-outlined text-[#c3c0ff] text-[16px]">check_circle</span>
                <span>Practical Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Approach Pipeline */}
        <div className="lg:col-span-6 bg-[#151619] border border-[#25272B] rounded-lg p-6 sm:p-7 flex flex-col justify-between space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          <div>
            <span className="font-mono text-[10px] text-[#c3c0ff] tracking-wider uppercase font-semibold">
              METHODOLOGY
            </span>
            <h3 className="text-xl font-semibold text-[#e5e2e3] mt-1">
              My Engineering Approach
            </h3>
            <p className="text-sm text-[#918fa1] mt-1.5 leading-relaxed">
              Every prototype begins with razor-sharp problem scoping, prioritizing low technical debt and deterministic edge handling.
            </p>
          </div>

          {/* Linear Horizontal Pipeline */}
          <div className="space-y-2 py-1">
            <span className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider block font-semibold">
              THE FIVE-STAGE BUILD LOOP
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 font-mono text-center">
              {stages.map((st, i) => (
                <button
                  type="button"
                  key={st.num}
                  onClick={() => setActiveStage(activeStage === i ? null : i)}
                  className={`p-2 rounded border transition-all text-left sm:text-center cursor-pointer ${
                    activeStage === i
                      ? 'bg-[#201f20] border-[#c3c0ff] text-white shadow-sm'
                      : 'bg-[#101113] border-[#25272B] hover:border-[#918fa1]'
                  }`}
                >
                  <div className="text-[10px] text-[#918fa1]">{st.num}</div>
                  <div
                    className={`text-[11px] font-semibold tracking-tight ${
                      st.num === '03'
                        ? 'text-[#c3c0ff]'
                        : st.num === '05'
                        ? 'text-[#adc6ff]'
                        : 'text-[#e5e2e3]'
                    }`}
                  >
                    {st.name}
                  </div>
                </button>
              ))}
            </div>

            {/* Stage Detail Peek */}
            {activeStage !== null && (
              <div className="p-2.5 rounded bg-[#101113] border border-[#25272B] text-xs text-[#918fa1] animate-in fade-in">
                <span className="text-[#c3c0ff] font-mono font-medium mr-1.5">
                  STAGE {stages[activeStage].num} [{stages[activeStage].name}]:
                </span>
                <span>{stages[activeStage].desc}</span>
              </div>
            )}
          </div>

          <div className="p-3.5 rounded bg-[#101113] border border-[#25272B] text-xs text-[#918fa1] flex items-center gap-3">
            <span className="material-symbols-outlined text-[#c3c0ff] text-[22px] shrink-0">verified</span>
            <span className="leading-relaxed">
              Refining performance until solutions survive contact with uncurated, chaotic production data.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
