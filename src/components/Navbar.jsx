import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="fixed top-4 left-4 right-4 z-50 glass px-4 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-white">ANSH</Link>
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#portfolio" className="btn-magnetic glass px-3 py-2 text-sm">View Portfolio</a>
          <a href="#contact" className="btn-magnetic bg-gradient-to-r from-[#7c4dff] to-[#00c2ff] text-black px-3 py-2 rounded-full text-sm font-medium">Hire Me</a>
        </div>
      </div>
    </header>
  );
}
