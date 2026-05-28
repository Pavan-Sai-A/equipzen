import React, { useEffect, useRef } from 'react';
import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Marquee from './components/Marquee';
import About   from './components/About';
import Contact from './components/Contact';
import Footer  from './components/Footer';
import styles  from './App.module.scss';

const App: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    let raf: number;
    let mx = 0, my = 0, cx = 0, cy = 0;

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const animate = () => {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.left = `${cx}px`;
        glowRef.current.style.top  = `${cy}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move, { passive: true });
    animate();
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className={styles.cursorGlow} ref={glowRef} />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
