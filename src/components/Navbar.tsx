import React from 'react';

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onOpenResume,
  onOpenTerminal,
}) => {
  const navLinks = [
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'BUILDS', href: '#builds', id: 'builds' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#0e0e0f]/90 backdrop-blur-md border-b border-[#25272B] sticky top-0 z-40 transition-all duration-150 ease-out">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 max-w-[1200px] mx-auto h-14">
        {/* Brand & System Telemetry Status */}
        <div className="flex items-center gap-4">
          <a
            id="brand-logo"
            className="font-mono text-xs tracking-wider text-[#e5e2e3] font-semibold flex items-center gap-2"
            href="#hero"
            onClick={(e) => handleScroll(e, '#hero')}
          >
            <span className="text-[#c3c0ff] text-base sm:text-lg tracking-tight font-bold">A.N.</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-0.5 rounded-sm bg-[#101113] border border-[#25272B]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#918fa1] tracking-wider font-medium">
              SYSTEM OPERATIONAL / AVAILABLE FOR BUILDS
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs" id="main-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`tracking-wider pb-1 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#c3c0ff] font-medium border-b-2 border-[#c3c0ff]'
                    : 'text-[#918fa1] hover:text-[#e5e2e3]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            id="terminal-trigger-btn"
            onClick={onOpenTerminal}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded bg-[#151619] border border-[#25272B] hover:border-[#adc6ff] hover:text-[#e5e2e3] transition-colors duration-150 font-mono text-[11px] text-[#918fa1]"
          >
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            <span>Available for Roles</span>
          </button>
          <button
            type="button"
            id="resume-btn"
            onClick={onOpenResume}
            className="px-3.5 py-1.5 rounded bg-[#4f46e5] hover:bg-[#4338ca] text-white font-mono text-xs transition-all duration-150 flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-[15px]">code</span>
            <span>Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
};
