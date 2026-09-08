import React, { useState, useEffect, useRef } from 'react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ cmd?: string; text: string; isOutput?: boolean }>>([
    { text: 'AN-SYSTEM TELEMETRY SHELL v2.5' },
    { text: 'Type "help" for a list of valid commands.' },
    { text: 'Status: ALL SERVICES OPERATIONAL / READY FOR INTAKE' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { cmd: input, text: `an@system:~$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          isOutput: true,
          text: `AVAILABLE COMMANDS:
  help      - List available commands
  status    - Show active engine status
  projects  - List active project repositories
  skills    - Display technical competency matrix
  contact   - Display verified intake channels
  bio       - Architectural philosophy summary
  clear     - Wipe terminal output
  exit      - Close terminal shell`,
        });
        break;
      case 'status':
        newHistory.push({
          isOutput: true,
          text: `SYSTEM HEALTH:
  ● ALTERIA: Active Engine [FastAPI, Speech, Python]
  ● CLEANNET AI: Prototype Test [Firebase, Colab ML]
  ● Intake: AVAILABLE FOR ROLES (Software Engineer, AI/ML Product)`,
        });
        break;
      case 'projects':
        newHistory.push({
          isOutput: true,
          text: `REPOSITORIES:
  01. ALTERIA: AI Multilingual Assessment Platform (5 Indian languages)
  02. CLEANNET AI: AI-Powered Predictive Sanitation Monitoring
  03. RESILIENT MESH: Offline Crisis Emergency Dispatch Engine
  04. PHONETIC CLASSIFIER: Low-resource speech DSP kernel`,
        });
        break;
      case 'skills':
        newHistory.push({
          isOutput: true,
          text: `CAPABILITIES:
  [CORE] Python 3.11+, C (Systems/Memory)
  [AI/DATA] AI, ML, Pandas, NumPy, SciPy, NLP/Speech
  [BACKEND] FastAPI, Async IO, REST, Data Serialization
  [FRONTEND] React, Modern CSS, CustomTkinter
  [DEV-OPS] Git/GitHub, Linux Bash, Colab GPU, Firebase`,
        });
        break;
      case 'contact':
        newHistory.push({
          isOutput: true,
          text: `DIRECT CHANNELS:
  Email:    nagasudhamani@example.com
  GitHub:   https://github.com/nagasudhamani
  LinkedIn: https://linkedin.com/in/nagasudhamani`,
        });
        break;
      case 'bio':
        newHistory.push({
          isOutput: true,
          text: '"I don\'t just learn technology. I build with it."\nSynthesizing predictive machine learning logic with deterministic backend software.',
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
      case 'quit':
        onClose();
        return;
      default:
        newHistory.push({
          isOutput: true,
          text: `Command not recognized: "${cmd}". Type "help" for command manifest.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div
      id="terminal-modal"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#0e0e0f] border border-[#25272B] rounded-lg w-full max-w-2xl h-[480px] flex flex-col shadow-[0_16px_50px_rgba(0,0,0,0.9)] overflow-hidden font-mono text-xs">
        {/* Terminal Title Bar */}
        <div className="px-4 py-2.5 bg-[#151619] border-b border-[#25272B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-[#918fa1] text-[11px] ml-2">an@workstation: ~/portfolio (sh)</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#918fa1] hover:text-white"
          >
            &times;
          </button>
        </div>

        {/* Terminal Stream */}
        <div className="p-4 flex-1 overflow-y-auto space-y-2 text-[#c7c4d8] leading-relaxed">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={
                line.cmd
                  ? 'text-[#c3c0ff] font-semibold'
                  : line.isOutput
                  ? 'text-[#e5e2e3] whitespace-pre-wrap'
                  : 'text-[#918fa1]'
              }
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form onSubmit={handleCommand} className="p-2.5 bg-[#121316] border-t border-[#25272B] flex items-center gap-2">
          <span className="text-[#c3c0ff] font-semibold">an@system:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none text-white focus:outline-none font-mono text-xs"
            placeholder="type 'help' or command..."
          />
        </form>
      </div>
    </div>
  );
};
