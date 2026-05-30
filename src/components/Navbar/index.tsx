import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import GlowButton from '../GlowButton';
import styles from './Navbar.module.scss';
import type { NavLink } from '../../types';

const NAV_LINKS: NavLink[] = [
  { label: 'Home',     to: 'home'     },
  { label: 'About Us', to: 'about'    },
  { label: 'Services', to: 'services' },
  { label: 'Contact',  to: 'contact'  },
];

const SECTIONS = ['home', 'about', 'services', 'contact'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  // Scrolled state — passive listener, no layout reads
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section — IntersectionObserver, zero layout thrashing
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.nav
      className={clsx(styles.navbar, scrolled && styles.scrolled)}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={`container ${styles.inner}`}>
        <Link to="home" smooth duration={350}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Equipzen" />
          </div>
        </Link>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to} smooth duration={350} offset={-70}
                className={clsx(active === to && styles.active)}
              >
                {label}
                {active === to && <motion.span className={styles.indicator} layoutId="indicator" />}
              </Link>
            </li>
          ))}
          <li>
            <Link to="contact" smooth duration={350} offset={-70}>
              <GlowButton variant={['navy', 'sm']}>Get Started</GlowButton>
            </Link>
          </li>
        </ul>

        <button
          className={clsx(styles.hamburger, menuOpen && styles.open)}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {NAV_LINKS.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={to} smooth duration={350} offset={-70}
                  className={clsx(styles.mobileLink, active === to && styles.active)}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28 }}>
              <Link to="contact" smooth duration={350} offset={-70} className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
