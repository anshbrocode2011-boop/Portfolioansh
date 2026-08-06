import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

function Card({p}){
  const nav = useNavigate();
  return (
    <article onClick={()=>nav(`/project/${p.id}`)} className="glass overflow-hidden rounded-xl cursor-pointer transform transition hover:-translate-y-4 hover:shadow-soft">
      <img src={p.thumbnail} alt={p.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="font-medium">{p.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{p.style}</p>
      </div>
    </article>
  );
}

export default function Portfolio(){
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-display">Portfolio</h2>
        <p className="text-gray-400 mt-2">Featured short-form &amp; GFX projects. Click to view details.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p=> <Card key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
