import React, { useState } from 'react';
export default function Contact(){
  const [msg, setMsg] = useState('');
  function handleSubmit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get('name'), email = fd.get('email'), message = fd.get('message');
    if(!name||!email||!message){ setMsg('Please fill all fields.'); return; }
    const subject = encodeURIComponent(`Project Inquiry — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:anshbrocode2011@gmail.com?subject=${subject}&body=${body}`;
    setMsg('Opening mail client...');
  }
  return (
    <section id="contact" className="py-20 bg-[rgba(255,255,255,0.01)]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-display">Contact</h2>
          <p className="text-gray-400 mt-2">Let’s make something viral.</p>
          <p className="mt-4">Email: <a href="mailto:anshbrocode2011@gmail.com" className="text-accent1">anshbrocode2011@gmail.com</a></p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
            <input name="name" placeholder="Your name" className="p-3 bg-transparent border rounded" />
            <input name="email" type="email" placeholder="you@domain.com" className="p-3 bg-transparent border rounded" />
            <textarea name="message" rows="5" placeholder="Project brief, deadline..." className="p-3 bg-transparent border rounded" />
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-[#7c4dff] to-[#00c2ff] text-black px-4 py-2 rounded">Send Message</button>
              <button type="button" onClick={()=>navigator.clipboard?.writeText('anshbrocode2011@gmail.com')} className="glass px-4 py-2 rounded">Copy Email</button>
            </div>
            {msg && <p className="text-sm text-gray-300 mt-2">{msg}</p>}
          </form>
        </div>
        <div className="glass p-6 rounded-xl">
          <h4 className="font-medium">What I need</h4>
          <ul className="list-disc list-inside mt-3 text-gray-300">
            <li>Raw footage & reference edits</li>
            <li>Brand assets (logos, fonts)</li>
            <li>Desired platform & aspect ratio</li>
          </ul>
          <h4 className="mt-6 font-medium">Availability</h4>
          <p className="text-gray-300 mt-2">Fast turnarounds — DM for rush projects.</p>
        </div>
      </div>
    </section>
  );
}
