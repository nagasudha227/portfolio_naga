import React, { useState } from 'react';

interface ContactSectionProps {
  onCopyEmail: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onCopyEmail,
  onShowToast,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [roleType, setRoleType] = useState('Full-Time Software Engineer');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDirectForm, setShowDirectForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) {
      onShowToast('Please provide your email and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('Telemetry packet dispatched! Thank you, will respond promptly.');
      setSenderName('');
      setSenderEmail('');
      setMessage('');
      setShowDirectForm(false);
    }, 600);
  };

  return (
    <section id="contact" className="space-y-6 scroll-mt-20 pt-4">
      <div className="bg-[#151619] border border-[#25272B] rounded-lg p-6 sm:p-12 relative overflow-hidden text-center space-y-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        {/* Subtle grid background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101113] border border-[#25272B] font-mono text-xs text-[#918fa1]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEM READY FOR INTAKE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#e5e2e3]">
            LET&apos;S BUILD SOMETHING MEANINGFUL.
          </h2>

          <p className="text-base sm:text-lg text-[#918fa1] max-w-xl mx-auto leading-relaxed">
            Open to software developer roles, AI/ML product engineering, and collaborative technical initiatives.
          </p>

          {/* Copyable Channel Trays */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              type="button"
              id="contact-email-btn"
              onClick={onCopyEmail}
              className="px-4 py-2.5 rounded bg-[#101113] border border-[#25272B] hover:border-[#c3c0ff] text-[#e5e2e3] font-mono text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm"
              title="Copy nagasudhamani@example.com"
            >
              <span className="material-symbols-outlined text-[#c3c0ff] text-[18px]">mail</span>
              <span>nagasudhamani@example.com</span>
              <span className="material-symbols-outlined text-[#918fa1] text-[16px]">content_copy</span>
            </button>

            <a
              id="contact-github-link"
              href="https://github.com/nagasudhamani"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded bg-[#101113] border border-[#25272B] hover:border-[#adc6ff] text-[#e5e2e3] font-mono text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined text-[#adc6ff] text-[18px]">terminal</span>
              <span>github.com/nagasudhamani</span>
              <span className="material-symbols-outlined text-[#918fa1] text-[16px]">north_east</span>
            </a>

            <a
              id="contact-linkedin-link"
              href="https://linkedin.com/in/nagasudhamani"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded bg-[#101113] border border-[#25272B] hover:border-[#adc6ff] text-[#e5e2e3] font-mono text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined text-[#adc6ff] text-[18px]">badge</span>
              <span>linkedin.com/in/nagasudhamani</span>
              <span className="material-symbols-outlined text-[#918fa1] text-[16px]">north_east</span>
            </a>
          </div>

          {/* Direct intake dispatch toggle */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowDirectForm(!showDirectForm)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#c3c0ff] hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                {showDirectForm ? 'expand_less' : 'send'}
              </span>
              <span>{showDirectForm ? 'Collapse Direct Inquiry Form' : 'Send Direct Technical Inquiry'}</span>
            </button>
          </div>

          {showDirectForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-6 p-6 rounded-lg bg-[#101113] border border-[#25272B] text-left space-y-4 max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="intake-name" className="block font-mono text-[10px] text-[#918fa1] uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    id="intake-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Lead Recruiter / Eng Manager"
                    className="w-full px-3 py-2 rounded bg-[#151619] border border-[#25272B] text-xs text-white focus:outline-none focus:border-[#4f46e5]"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="intake-email" className="block font-mono text-[10px] text-[#918fa1] uppercase">
                    Your Email Address *
                  </label>
                  <input
                    id="intake-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3 py-2 rounded bg-[#151619] border border-[#25272B] text-xs text-white focus:outline-none focus:border-[#4f46e5]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="intake-role" className="block font-mono text-[10px] text-[#918fa1] uppercase">
                  Opportunity Type
                </label>
                <select
                  id="intake-role"
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#151619] border border-[#25272B] text-xs text-white focus:outline-none focus:border-[#4f46e5]"
                >
                  <option value="Full-Time Software Engineer">Full-Time Software Engineer</option>
                  <option value="AI / ML Engineer">AI / ML Engineer</option>
                  <option value="Backend Systems Engineer">Backend Systems Engineer</option>
                  <option value="Technical Product Collaboration">Technical Product Collaboration</option>
                  <option value="Hackathon / Research Initiative">Hackathon / Research Initiative</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="intake-msg" className="block font-mono text-[10px] text-[#918fa1] uppercase">
                  Message / Opportunity Overview *
                </label>
                <textarea
                  id="intake-msg"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details on team, challenges, or scope..."
                  className="w-full px-3 py-2 rounded bg-[#151619] border border-[#25272B] text-xs text-white focus:outline-none focus:border-[#4f46e5] resize-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowDirectForm(false)}
                  className="px-3 py-1.5 rounded bg-[#151619] border border-[#25272B] text-xs font-mono text-[#918fa1] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-1.5 rounded bg-[#4f46e5] hover:bg-[#4338ca] text-white text-xs font-mono flex items-center gap-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting...' : 'Transmit Intake Packet'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
