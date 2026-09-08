import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechnologyIndex: React.FC = () => {
  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-[#1E2023] pb-3 gap-2">
        <div>
          <div className="font-mono text-[11px] text-[#c3c0ff] tracking-widest uppercase">
            04 // CAPABILITY INVENTORY
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#e5e2e3]">
            Technology Index
          </h2>
        </div>
        <div className="font-mono text-xs text-[#918fa1]">
          <span>STANDARDIZED WORKSPACE TOOLING</span>
        </div>
      </div>

      {/* Categorized Matrix (Zero arbitrary percentage bars) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="p-4 rounded bg-[#151619] border border-[#25272B] space-y-3 hover:border-[#918fa1] transition-all duration-150 shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
          >
            <div className="font-mono text-[10px] text-[#918fa1] uppercase tracking-wider flex items-center justify-between font-semibold">
              <span>{category.title}</span>
              <span className={`${category.badgeColor} font-mono`}>{category.badge}</span>
            </div>
            <ul className="font-mono text-xs text-[#e5e2e3] space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="p-2 rounded bg-[#101113] border border-[#25272B] hover:border-[#4f46e5]/40 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
