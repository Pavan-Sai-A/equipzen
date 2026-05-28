import React, { useEffect, useRef, useState, memo } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiShield, FiCloud, FiSmartphone } from 'react-icons/fi';
import GlowButton from '../GlowButton';
import { useCounter, useTypewriter } from '../../hooks/useAnimations';
import styles from './Hero.module.scss';
import type { FloatingBadge } from '../../types';

const BADGES: FloatingBadge[] = [
  { icon: <FiShield />, text: 'Cyber Security',  x: '72%', y: '18%', delay: 0   },
  { icon: <FiCloud />,  text: 'Cloud Solutions', x: '68%', y: '55%', delay: 0.3 },
  { icon: <FiSmartphone />, text: 'Mobile Apps', x: '78%', y: '78%', delay: 0.6 },
];

const up = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] as const },
});

const ParticleCanvas = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d')!;
    let animId: number;
    let resizeTimer: ReturnType<typeof setTimeout>;

    const resize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 100);
    };

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener('resize', resize, { passive: true });

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.35, dy: (Math.random() - 0.5) * 0.35,
      o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10,34,64,${p.o * 0.5})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(10,34,64,${0.05 * (1 - d / 110)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); clearTimeout(resizeTimer); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
});

const Typewriter = memo(() => {
  const displayed = useTypewriter();
  return (
    <span className={styles.word}>
      {displayed}<span className={styles.cursor}>|</span>
    </span>
  );
});

const Hero: React.FC = () => {
  const [countStart, setCountStart] = useState(false);
  useEffect(() => { const t = setTimeout(() => setCountStart(true), 800); return () => clearTimeout(t); }, []);

  const c1 = useCounter(150, 1800, countStart);
  const c2 = useCounter(98,  1800, countStart);
  const c3 = useCounter(9,   1200, countStart);

  return (
    <section id="home" className={styles.hero}>
      <ParticleCanvas />
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.grid} />

      {BADGES.map(({ icon, text, x, y, delay }) => (
        <motion.div
          key={text}
          className={styles.badge}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: delay + 1, duration: 0.5 },
            scale:   { delay: delay + 1, duration: 0.5 },
            y: { delay: delay + 1.5, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span className={styles.badgeIcon}>{icon}</span>
          {text}
        </motion.div>
      ))}

      <div className={`container ${styles.content}`}>
        <motion.div className={styles.heroBadge} {...up(0.2)}>
          <span className={styles.dot} />
          Trusted IT Partner · AP &amp; Telangana
        </motion.div>

        <motion.h1 className={styles.h1} {...up(0.35)}>
          Innovating Today
          <span className={styles.line2}>For a Better <Typewriter /></span>
        </motion.h1>

        <motion.p className={styles.sub} {...up(0.5)}>
          Empowering businesses with innovative technology solutions that drive growth and efficiency across every industry.
        </motion.p>

        <motion.div className={styles.btns} {...up(0.62)}>
          <Link to="services" smooth duration={350} offset={-70}>
            <GlowButton>Explore Services</GlowButton>
          </Link>
          <Link to="contact" smooth duration={350} offset={-70} className={styles.btnGhost}>
            <span>Get In Touch</span>
          </Link>
        </motion.div>

        <motion.div className={styles.stats} {...up(0.78)}>
          <div className={styles.stat}><strong>{c1}+</strong><span>Happy Clients</span></div>
          <div className={styles.stat}><strong>{c2}%</strong><span>Client Satisfaction</span></div>
          <div className={styles.stat}><strong>{c3}+</strong><span>Services Offered</span></div>
          <div className={styles.stat}><strong>24/7</strong><span>Support Available</span></div>
        </motion.div>
      </div>

      <div className={styles.scrollMouse}>
        <div className={styles.scrollWheel} />
      </div>
    </section>
  );
};

export default Hero;
