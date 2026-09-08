import React, { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  const handlePrint = () => {
    onShowToast('Preparing printer-friendly dossier format...');
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#151619] border border-[#33373E] rounded-lg w-full max-w-3xl max-h-[90vh] flex flex-col shadow-[0_16px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#25272B] flex items-center justify-between bg-[#101113]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c3c0ff]">badge</span>
            <div>
              <span className="font-mono text-[10px] text-[#918fa1] uppercase">VERIFIED DOSSIER</span>
              <h3 className="text-base font-bold text-[#e5e2e3]">A. Nagasudhamani — Curriculum Vitae</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#201f20] border border-[#25272B] hover:border-[#c3c0ff] text-white font-mono text-xs flex items-center gap-1.5 cursor-pointer"
              title="Print or Save as PDF"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded hover:bg-[#25272B] text-[#918fa1] hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#e5e2e3] font-mono text-xs">
          {/* Header Bio */}
          <div className="border-b border-[#25272B] pb-4">
            <h1 className="text-2xl font-bold tracking-tight text-white">A. NAGASUDHAMANI</h1>
            <p className="text-[#c3c0ff] mt-0.5">Software Developer &middot; AI/ML Systems &middot; Backend Architectures</p>
            <div className="flex flex-wrap gap-3 mt-2 text-[#918fa1] text-[11px]">
              <span>Email: nagasudhamani@example.com</span>
              <span>&bull;</span>
              <span>GitHub: github.com/nagasudhamani</span>
              <span>&bull;</span>
              <span>LinkedIn: linkedin.com/in/nagasudhamani</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#c3c0ff] font-semibold border-b border-[#25272B] pb-1">
              EDUCATION
            </h4>
            <div className="flex justify-between items-baseline">
              <span className="font-semibold text-white">Bachelor of Technology in Computer Science &amp; Engineering</span>
              <span className="text-[#918fa1]">2022 &ndash; 2026</span>
            </div>
            <p className="text-[#918fa1]">Focus: Distributed Systems, Artificial Intelligence, Digital Signal Processing, Algorithms.</p>
          </div>

          {/* Core Technical Projects */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#c3c0ff] font-semibold border-b border-[#25272B] pb-1">
              ENGINEERED SYSTEMS &amp; PRODUCTION PLATFORMS
            </h4>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-white">
                <span>ALTERIA — AI Multilingual Assessment Platform</span>
                <span className="text-[#918fa1]">FastAPI, Python, React, NumPy</span>
              </div>
              <p className="text-[#918fa1] leading-relaxed">
                Architected non-blocking asynchronous assessment engine processing phonetic speech tokens across 5 regional Indian languages (sub-400ms latency). Built automatic rubric score synthesis and tamper-resistant candidate PDF dossier exporter.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-white">
                <span>CLEANNET AI — Predictive Sanitation Monitoring</span>
                <span className="text-[#918fa1]">Google Colab ML, Firebase, HTML5</span>
              </div>
              <p className="text-[#918fa1] leading-relaxed">
                Formulated heuristic overflow estimation models factoring calendar events and commercial footfall. Decreased emergency dispatch requirements by 43% in simulation via real-time risk alerts.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-semibold text-white">
                <span>Resilient Mesh Resource Dispatcher (National Hackathon)</span>
                <span className="text-[#918fa1]">Python, SQLite, GeoHash</span>
              </div>
              <p className="text-[#918fa1] leading-relaxed">
                Created peer-to-peer ad-hoc crisis dispatch engine running on isolated field devices with zero internet connectivity. Spatial indexing reduced lookup complexity from O(N) to O(1).
              </p>
            </div>
          </div>

          {/* Technical Tooling */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#c3c0ff] font-semibold border-b border-[#25272B] pb-1">
              TECHNICAL COMPETENCIES
            </h4>
            <div className="space-y-1 text-[#918fa1]">
              <div><strong className="text-white">Languages:</strong> Python (3.11+), C (Systems/Memory), TypeScript, JavaScript, SQL</div>
              <div><strong className="text-white">Backend &amp; Data:</strong> FastAPI, REST APIs, Pandas, NumPy, SciPy, SQLite, Firebase</div>
              <div><strong className="text-white">Frontend:</strong> React, Tailwind CSS, Modern HTML5/CSS, CustomTkinter</div>
              <div><strong className="text-white">DevOps &amp; Tools:</strong> Git/GitHub, Linux CLI/Bash, Google Colab GPU, Docker concepts</div>
            </div>
          </div>

          {/* Laurels & Leadership */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-[#c3c0ff] font-semibold border-b border-[#25272B] pb-1">
              HONORS &amp; LEADERSHIP
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-[#918fa1]">
              <li>Finalist, National Emergency Logistics Hackathon (Mesh Resource Dispatcher).</li>
              <li>Finalist, AI Accelerator Acoustic Challenge for Regional Speech Recognition.</li>
              <li>Technical club mentor: conducted peer code reviews and workshop sessions in Python systems.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-[#25272B] bg-[#101113] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#4f46e5] text-white text-xs font-mono"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
