import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiSmartphone, FiCloud, FiShield, FiBarChart2, FiTool, FiHeadphones, FiWifi, FiSettings } from 'react-icons/fi';
import clsx from 'clsx';
import styles from './Services.module.scss';
import type { Service } from '../../types';

const ALL_SERVICES: Service[] = [
  { icon: <FiCode />,       title: 'Software Development',    desc: 'Custom software solutions designed to meet your unique business needs.',                cat: 'Software' },
  { icon: <FiSmartphone />, title: 'Mobile App Development',  desc: 'User-centric mobile applications for Android and iOS platforms.',                       cat: 'Software' },
  { icon: <FiCloud />,      title: 'Cloud Solutions',         desc: 'Scalable and secure cloud solutions to accelerate digital transformation.',              cat: 'Software' },
  { icon: <FiShield />,     title: 'Cyber Security',          desc: 'Protecting your business with robust security solutions and best practices.',            cat: 'Software' },
  { icon: <FiBarChart2 />,  title: 'IT Consulting',           desc: 'Expert guidance to help you optimize, innovate, and achieve your goals.',               cat: 'Hardware' },
  { icon: <FiTool />,       title: 'IT Hardware Installation',desc: 'Expert installation for seamless hardware integration with optimal performance.',       cat: 'Hardware' },
  { icon: <FiHeadphones />, title: 'Maintenance & Support',   desc: 'Comprehensive maintenance to keep your IT infrastructure running smoothly.',            cat: 'Hardware' },
  { icon: <FiWifi />,       title: 'Network Solutions',       desc: 'Reliable network setup, optimization, and troubleshooting for secure communication.',   cat: 'Hardware' },
  { icon: <FiSettings />,   title: 'End-to-End Repairs',      desc: 'Comprehensive repair services for all IT hardware with swift diagnostics.',             cat: 'Hardware' },
];

const TABS = ['All', 'Software', 'Hardware'] as const;
type Tab = typeof TABS[number];

interface CardProps { icon: React.ReactNode; title: string; desc: string; index: number; featured?: boolean; }

const ServiceCard: React.FC<CardProps> = ({ icon, title, desc, index, featured }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    ref.current!.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };

  return (
    <motion.div
      ref={ref}
      className={clsx(styles.card, featured && styles.cardFeatured)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ willChange: 'transform' }}
    >
      <div className={styles.shine} />
      <div className={styles.cardTop}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [active, setActive] = useState<Tab>('All');
  const filtered = active === 'All' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.cat === active);

  const gridClass =
    active === 'Software' ? styles['bentogrid-sw'] :
    active === 'Hardware' ? styles['bentogrid-hw'] :
    styles.grid;

  return (
    <section id="services" className={styles.services}>
      <div className={styles.bgGlow} />
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
        >
          <span className="section-ghost">What we offer</span>
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-sub">Comprehensive technology solutions tailored for your business growth.</p>
          <div className="divider" />
        </motion.div>

        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab}
              className={clsx(styles.tabBtn, active === tab && styles.active)}
              onClick={() => setActive(tab)}
            >
              {active === tab && <motion.span className={styles.tabBg} layoutId="tabBg" />}
              <span className={styles.tabLabel}>{tab}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div className={gridClass} key={active}>
            {filtered.map(({ icon, title, desc }, i) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                desc={desc}
                index={i}
                featured={active === 'Software' && i === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
