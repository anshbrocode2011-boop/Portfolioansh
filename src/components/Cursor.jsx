import React, { useEffect } from 'react';

export default function Cursor(){
  useEffect(()=>{
    const dot = document.createElement('div');
    dot.id = 'cursor-dot';
    const follower = document.createElement('div');
    follower.id = 'cursor-follower';
    document.body.appendChild(dot); document.body.appendChild(follower);
    let mx = -100, my = -100, fx = -100, fy = -100;
    window.addEventListener('mousemove', (e)=>{ mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`; });
    function loop(){ fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12; follower.style.transform = `translate(${fx}px, ${fy}px)`; requestAnimationFrame(loop); }
    requestAnimationFrame(loop);
    document.querySelectorAll('a,button,.glass').forEach(el=>{
      el.addEventListener('mouseenter', ()=>{ follower.style.transform += ' scale(1.06)'; dot.style.opacity='0.6' });
      el.addEventListener('mouseleave', ()=>{ follower.style.transform = follower.style.transform.replace(' scale(1.06)',''); dot.style.opacity='1' });
    });
    return ()=>{ dot.remove(); follower.remove(); };
  },[]);
  return null;
}
