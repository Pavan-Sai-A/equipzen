import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiLinkedin, FiTwitter, FiFacebook, FiInstagram,
  FiArrowUp, FiPhone, FiMail, FiMapPin, FiGlobe,
} from 'react-icons/fi';
import GlowButton from '../GlowButton';
import styles from './Footer.module.scss';
import type { Social } from '../../types';

const SOCIALS: Social[] = [
  { Icon: FiLinkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/equipzen' },
  { Icon: FiTwitter,   label: 'Twitter',   href: 'https://twitter.com/equipzen'              },
  { Icon: FiFacebook,  label: 'Facebook',  href: 'https://www.facebook.com/equipzen'         },
  { Icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/equipzen'        },
];

const YEAR = new Date().getFullYear();

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        {/* CTA Band */}
        <div className={styles.cta}>
          <div className={styles.ctaBlob} />
          <div className={`${styles.ctaBlob} ${styles.blob2}`} />
          <div className="container">
            <div className={styles.ctaRow}>
              <div>
                <span className={styles.ctaEyebrow}>Let's Work Together</span>
                <h2 className={styles.ctaHeading}>Ready to Transform<br />Your Business?</h2>
                <p className={styles.ctaSub}>Get in touch with our team and let's build something extraordinary.</p>
              </div>
              <div className={styles.ctaRight}>
                <Link to="contact" smooth duration={350} offset={-70}>
                  <GlowButton>Start a Project</GlowButton>
                </Link>
                <a href="tel:+919398919934" className={styles.ctaPhone}>
                  <FiPhone /> +91 9398919934
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main body — Contact info only */}
        <div className={styles.body}>
          <div className="container">
            <div className={styles.grid}>
              {/* Contact */}
              <div>
                <div className={styles.colHeader}>
                  <span className={styles.colDot} />
                  <h5>Contact Us</h5>
                </div>
                <ul className={styles.contactList}>
                  <li><span className={styles.ci}><FiPhone /></span><a href="tel:+919398919934">+91 9398919934</a></li>
                  <li className={styles.multiLine}>
                    <span className={styles.ci}><FiMail /></span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <a href="mailto:md@equipzen.in">md@equipzen.in</a>
                      <a href="mailto:info@equipzen.in">info@equipzen.in</a>
                    </div>
                  </li>
                  <li><span className={styles.ci}><FiGlobe /></span><a href="https://www.equipzen.in" target="_blank" rel="noreferrer">www.equipzen.in</a></li>
                  <li className={styles.multiLine}>
                    <span className={styles.ci}><FiMapPin /></span>
                    <span>Flat no 406, Aavaas Apartment,<br />Kankipadu 521151,<br />Vijayawada, A.P, India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bar}>
          <div className={`container ${styles.barInner}`}>
            <p>© {YEAR} Equipzen Technologies Private Limited. All Rights Reserved.</p>
            <div className={styles.barRight}>
              <div className={styles.logo}>
                <img src="/logo.jpg" alt="Equipzen" />
                <div>
                  <span className={styles.logoName}>EQUIPZEN</span>
                  <span className={styles.logoTagline}>TECHNOLOGIES</span>
                </div>
              </div>
              <div className={styles.socials}>
                {SOCIALS.map(({ Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.88 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
