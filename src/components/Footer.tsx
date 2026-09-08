import React from 'react';

interface FooterProps {
  onOpenTerminal: () => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onShowToast }) => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0e0f] border-t border-[#25272B] mt-16 transition-colors duration-150 ease-out">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-5 max-w-[1200px] mx-auto gap-3 text-xs">
        {/* Monogram & Precision Copyright */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={handleScrollToTop}
            className="font-mono text-sm font-bold text-[#c3c0ff] hover:text-white transition-colors"
          >
            A.N.
          </a>
          <span className="text-xs text-[#918fa1]">
            © 2025 A. Nagasudhamani. Engineered with deliberate precision. All systems operational.
          </span>
        </div>

        {/* Secondary Technical Links */}
        <div className="flex items-center gap-4 font-mono text-[11px] text-[#918fa1]">
          <button
            type="button"
            id="footer-terminal-btn"
            onClick={onOpenTerminal}
            className="hover:text-white transition-colors cursor-pointer"
          >
            TERMINAL
          </button>
          <a
            href="https://github.com/nagasudhamani"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/nagasudhamani"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="#work"
            className="hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#work');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            SOURCE
          </a>
          <button
            type="button"
            onClick={() => onShowToast('RSS Feed: Feeds serialized to JSON/Atom at /rss.xml')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            RSS
          </button>
        </div>
      </div>
    </footer>
  );
};
