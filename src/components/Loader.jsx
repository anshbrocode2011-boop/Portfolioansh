import React from 'react';

export default function Loader({visible}) {
  if(!visible) return null;
  return (
    <div id="loader" className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <svg width="72" height="72" viewBox="0 0 100 100" aria-hidden>
          <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#7c4dff"/><stop offset="1" stopColor="#00c2ff"/></linearGradient></defs>
          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round" strokeDasharray="0 260">
            <animate attributeName="stroke-dasharray" from="0 260" to="200 60" dur="1.2s" fill="freeze" />
          </circle>
        </svg>
        <div className="text-accent1 font-display tracking-widest">ANSH</div>
      </div>
    </div>
  );
}
