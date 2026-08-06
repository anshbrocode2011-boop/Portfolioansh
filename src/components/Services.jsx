import React from 'react';
const items = [
  'Short Form Editing','Gaming Videos','Documentary Editing','Motion Graphics','GFX Editing','YouTube Videos','Reels & Shorts'
];
export default function Services(){
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-transparent to-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-display">Services</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(s=>(
            <div key={s} className="glass p-5 rounded-xl hover:-translate-y-2 transition transform">
              <h3 className="font-semibold">{s}</h3>
              <p className="text-gray-400 mt-2">Professional, platform-optimized edits tailored for engagement.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
