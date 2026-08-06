import React from 'react';
export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-display">About</h2>
          <h3 className="text-xl mt-2">Ansh — Freelance Video Editor</h3>
          <p className="text-gray-400 mt-4">I craft cinematic and high-retention edits for brands and creators. Specializing in short-form growth-focused editing, motion graphics, and premium GFX. I deliver fast, polished video content that converts.</p>
          <ul className="mt-4 flex gap-3 text-gray-300">
            <li className="glass px-3 py-1 rounded">GFX Editing</li>
            <li className="glass px-3 py-1 rounded">Short-form Content</li>
            <li className="glass px-3 py-1 rounded">Fast Delivery</li>
            <li className="glass px-3 py-1 rounded">High Retention</li>
          </ul>
        </div>
        <div>
          <div className="glass p-6 rounded-xl">
            <p className="text-gray-300">Available for remote work and rush projects. Send footage, references, and target platforms for an accurate quote.</p>
            <div className="mt-4 flex gap-3">
              <a href="mailto:anshbrocode2011@gmail.com" className="btn-magnetic glass px-4 py-2">Email Me</a>
              <button onClick={()=>navigator.clipboard?.writeText('anshbrocode2011@gmail.com')} className="btn-magnetic bg-gradient-to-r from-[#7c4dff] to-[#00c2ff] text-black px-4 py-2 rounded-full">Copy Email</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
