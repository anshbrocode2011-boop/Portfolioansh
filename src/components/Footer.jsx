import React from 'react';
export default function Footer(){
  return (
    <footer className="py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div>© 2026 Ansh • Video Editor</div>
        <div className="flex gap-3">
          <a href="#" className="glass px-3 py-2 rounded">IG</a>
          <a href="#" className="glass px-3 py-2 rounded">YT</a>
          <a href="#" className="glass px-3 py-2 rounded">LI</a>
        </div>
      </div>
    </footer>
  );
}
