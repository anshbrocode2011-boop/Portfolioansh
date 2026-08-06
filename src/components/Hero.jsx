import React, { useEffect, useRef } from 'react';

export default function Hero(){
  const canvasRef = useRef();

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = innerWidth;
    let h = canvas.height = innerHeight;
    const particles = [];
    const count = Math.round(Math.max(24, Math.min(80, (w*h)/90000)));
    for(let i=0;i<count;i++) particles.push({
      x: Math.random()*w, y: Math.random()*h,
      vx:(Math.random()-0.5)*0.4, vy:(Math.random()-0.5)*0.4, r:Math.random()*1.8+0.6
    });
    function resize(){ w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
    window.addEventListener('resize', resize);
    function loop(){
      ctx.clearRect(0,0,w,h);
      // soft gradient
      const g = ctx.createLinearGradient(0,0,w,h);
      g.addColorStop(0,'rgba(12,8,20,0.28)'); g.addColorStop(1,'rgba(10,8,14,0.28)');
      ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
      const t = performance.now()*0.00016;
      ctx.save(); ctx.globalCompositeOperation='lighter';
      const lg = ctx.createLinearGradient(0,0,w,0);
      lg.addColorStop(0,'rgba(124,77,255,0.04)'); lg.addColorStop(1,'rgba(0,194,255,0.04)');
      ctx.fillStyle = lg; ctx.fillRect((Math.sin(t)*200), h*0.05, w*0.9, 180);
      ctx.restore();
      particles.forEach(p=>{
        p.x+=p.vx; p.y+=p.vy;
        if(p.x < -10) p.x = w+10; if(p.x > w+10) p.x = -10;
        if(p.y < -10) p.y = h+10; if(p.y > h+10) p.y = -10;
        ctx.beginPath(); ctx.fillStyle = 'rgba(173,216,255,0.06)';
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      });
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i], b=particles[j];
          const dx=a.x-b.x, dy=a.y-b.y, d=Math.hypot(dx,dy);
          if(d<140){ ctx.beginPath(); ctx.strokeStyle = `rgba(0,194,255,${0.06*(1-d/140)})`; ctx.lineWidth=1; ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
        }
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
    return ()=>window.removeEventListener('resize', resize);
  },[]);

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="container mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="font-display text-4xl md:text-6xl leading-tight">I Turn Ideas Into Viral Videos.</h1>
          <p className="mt-4 text-gray-300">Professional Short-form &amp; GFX Video Editor</p>
          <div className="mt-6 flex gap-3">
            <a href="#portfolio" className="btn-magnetic bg-gradient-to-r from-[#7c4dff] to-[#00c2ff] text-black px-4 py-2 rounded-full font-semibold">View Portfolio</a>
            <a href="#contact" className="btn-magnetic glass px-4 py-2 rounded-md">Hire Me</a>
          </div>
          <div className="mt-6 flex gap-3">
            <span className="glass px-3 py-1 text-sm">Fast Turnaround</span>
            <span className="glass px-3 py-1 text-sm">High Retention</span>
            <span className="glass px-3 py-1 text-sm">Cinematic Look</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-xl">
          <div className="glass p-2 rounded-xl overflow-hidden">
            <video className="w-full rounded-md" autoPlay loop muted playsInline>
              <source src="https://cdn.coverr.co/videos/coverr-drone-over-city-3015?token=eyJhbGciOiJIUzI1NiJ9" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
