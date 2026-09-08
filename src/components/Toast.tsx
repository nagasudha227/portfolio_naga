import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      id="system-toast"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-[#151619] border border-primary/40 text-on-surface shadow-[0_8px_30px_rgb(0,0,0,0.8)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="font-mono text-xs text-on-surface">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-on-surface-variant hover:text-white transition-colors"
        aria-label="Dismiss notification"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
