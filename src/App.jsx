import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import Cursor from './components/Cursor';
import Loader from './components/Loader';

export default function App(){
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    // simulate loader for small time to show logo animation
    const t = setTimeout(()=> setLoading(false), 900);
    return ()=>clearTimeout(t);
  },[]);

  useEffect(()=>{
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = (window.scrollY / (docH || 1)) * 100;
      const bar = document.getElementById('progress')?.firstElementChild;
      if(bar) bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);

  return (
    <>
      <Loader visible={loading} />
      <Cursor />
      <div id="progress"><div /></div>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-6 }} transition={{duration:0.45}}>
          <Routes location={location}>
            <Route path="/" element={
              <>
                <Hero />
                <Portfolio />
                <Services />
                <About />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="*" element={<main className="container py-28"><h2 className="text-2xl">404 — Not Found</h2></main>} />
          </Routes>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
