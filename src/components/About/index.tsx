import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiEye, FiStar } from 'react-icons/fi';
import styles from './About.module.scss';
import type { Skill, MvvItem } from '../../types';

const FEATURES = [
  'Experienced Team', 'Innovative Solutions', 'Customer Commitment',
  'Quality & Excellence', 'Competitive Prices', 'Timely Delivery', 'Dedicated Support',
];

const SKILLS: Skill[] = [
  { label: 'IT Hardware & Installation', pct: 95 },
  { label: 'Software Development',       pct: 88 },
  { label: 'Network Solutions',          pct: 92 },
  { label: 'Cyber Security',             pct: 85 },
];

const MVV: MvvItem[] = [
  { icon: <FiTarget />, title: 'Mission', text: 'Deliver innovative and reliable IT hardware solutions that empower businesses to achieve their goals.' },
  { icon: <FiEye />,    title: 'Vision',  text: 'Be the most trusted and preferred IT hardware partner in Andhra Pradesh and Telangana.' },
  { icon: <FiStar />,   title: 'Values',  text: 'Quality · Integrity · Innovation · Customer Satisfaction' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};
const stagger = (d = 0.1) => ({ show: { transition: { staggerChildren: d } } });

const About: React.FC = () => (
  <section id="about" className={styles.about}>
    <div className={styles.bgGlow} />
    <div className="container">
      <motion.div
        className="section-head"
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger()}
      >
        <span className="section-ghost">Who we are</span>
        <motion.span className="section-label" variants={fadeUp}>About Us</motion.span>
        <motion.h2 className="section-title" variants={fadeUp}>Who We <span>Are</span></motion.h2>
        <motion.div className="divider" variants={fadeUp} />
      </motion.div>

      <div className={styles.grid}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Equipzen Technologies Private Limited is a forward-thinking technology company committed to delivering innovative, reliable, and scalable solutions.</p>
          <p>We are a trusted name in the IT hardware industry, focused on delivering superior quality products and reliable solutions across Andhra Pradesh and Telangana.</p>

          <div className={styles.skillBars}>
            {SKILLS.map(({ label, pct }, i) => (
              <div key={label}>
                <div className={styles.skillTop}>
                  <span>{label}</span>
                  <span className={styles.skillPct}>{pct}%</span>
                </div>
                <div className={styles.skillTrack}>
                  <motion.div
                    className={styles.skillFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.whyCard}>
            <h3>Why Choose Us</h3>
            <ul>
              {FEATURES.map((f, i) => (
                <motion.li key={f}
                  initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.mvvGrid}
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
        variants={stagger(0.15)}
      >
        {MVV.map(({ icon, title, text }) => (
          <motion.div className={styles.mvvCard} key={title} variants={fadeUp} whileHover={{ y: -6 }}>
            <div className={styles.mvvIcon}>{icon}</div>
            <h4>{title}</h4>
            <p>{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
