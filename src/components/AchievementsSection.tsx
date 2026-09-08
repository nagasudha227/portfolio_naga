import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-[#1E2023] pb-3 gap-2">
        <div>
          <div className="font-mono text-[11px] text-[#c3c0ff] tracking-widest uppercase">
            05 // VERIFICATION &amp; RECOGNITION
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#e5e2e3]">
            Achievements &amp; Track Record
          </h2>
        </div>
        <div className="font-mono text-xs text-[#918fa1]">
          <span>STRUCTURED VERIFICATION</span>
        </div>
      </div>

      {/* Grid of achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.category}
            className="p-5 rounded bg-[#151619] border border-[#25272B] space-y-2 hover:border-[#918fa1] transition-all duration-150 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group"
          >
            <div
              className={`material-symbols-outlined text-[22px] ${
                item.accent === 'primary' ? 'text-[#c3c0ff]' : 'text-[#adc6ff]'
              }`}
            >
              {item.icon}
            </div>
            <div className="font-mono text-[10px] text-[#918fa1] tracking-wider uppercase font-semibold">
              {item.category}
            </div>
            <h4 className="text-base font-semibold text-[#e5e2e3] group-hover:text-[#c3c0ff] transition-colors">
              {item.title}
            </h4>
            <p className="text-xs text-[#918fa1] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
