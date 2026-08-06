import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectPage(){
  const { id } = useParams();
  const nav = useNavigate();
  const p = projects.find(x=>x.id===id);
  if(!p) return <div className="container py-28"><h2>Project not found</h2></div>;
  return (
    <section className="container mx-auto px-6 py-20">
      <button onClick={()=>nav('/')} className="glass px-3 py-2 rounded">← Back</button>
      <div className="mt-6 glass p-6 rounded-xl">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            {p.video ? <video controls className="w-full rounded-md"><source src={p.video} /></video> : <img src={p.thumbnail} alt={p.title} className="w-full rounded-md" />}
          </div>
          <div>
            <h1 className="text-2xl font-display">{p.title}</h1>
            <p className="text-gray-300 mt-3">{p.description}</p>
            <dl className="mt-4 text-gray-300">
              <dt className="font-semibold">Editing style</dt><dd>{p.style}</dd>
              <dt className="font-semibold mt-2">Software used</dt><dd>{p.software}</dd>
            </dl>
            <div className="mt-6">
              <a href={`mailto:anshbrocode2011@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(p.title)}`} className="bg-gradient-to-r from-[#7c4dff] to-[#00c2ff] text-black px-4 py-2 rounded">Hire for this style</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
