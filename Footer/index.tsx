import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiLinkedin, FiTwitter, FiFacebook, FiInstagram,
  FiArrowUp, FiPhone, FiMail, FiMapPin, FiGlobe,
  FiCode, FiSmartphone, FiCloud, FiShield, FiTool, FiWifi, FiArrowRight,
} from 'react-icons/fi';
import GlowButton from '../GlowButton';
import styles from './Footer.module.scss';
import type { FooterService, Social, NavLink } from '../../types';

const SERVICES: FooterService[] = [
  { icon: FiCode,       label: 'Software Development'   },
  { icon: FiSmartphone, label: 'Mobile App Development' },
  { icon: FiCloud,      label: 'Cloud Solutions'        },
  { icon: FiShield,     label: 'Cyber Security'         },
  { icon: FiTool,       label: 'IT Hardware'            },
  { icon: FiWifi,       label: 'Network Solutions'      },
];

const SOCIALS: Social[] = [
  { Icon: FiLinkedin,  label: 'LinkedIn',  href: 'https://www.linkedin.com/company/equipzen' },
  { Icon: FiTwitter,   label: 'Twitter',   href: 'https://twitter.com/equipzen'              },
  { Icon: FiFacebook,  label: 'Facebook',  href: 'https://www.facebook.com/equipzen'         },
  { Icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/equipzen'        },
];

const NAV_LINKS: NavLink[] = [
  { label: 'Home',       to: 'home'     },
  { label: 'About Us',   to: 'about'    },
  { label: 'Services',   to: 'services' },
  { label: 'Contact Us', to: 'contact'  },
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
              <a href="tel:9398919934" className={styles.ctaPhone}>
                <FiPhone /> 9398919934
              </a>
            </div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className="container">
            <div className={styles.grid}>
              {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logo}>
                <img src="/logo.jpg" alt="Equipzen" />
                <div>
                  <span className={styles.logoName}>EQUIPZEN</span>
                  <span className={styles.logoTagline}>TECHNOLOGIES PVT. LTD.</span>
                </div>
              </div>
              <p className={styles.about}>
                Empowering businesses with innovative technology solutions that drive growth and efficiency across Andhra Pradesh &amp; Telangana.
              </p>
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

            {/* Services */}
            <div>
              <div className={styles.colHeader}>
                <span className={styles.colDot} />
                <h5>Services</h5>
              </div>
              <ul className={styles.svcList}>
                {SERVICES.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Link to="services" smooth duration={350} offset={-70}>
                      <span className={styles.svcIco}><Icon /></span>
                      <span>{label}</span>
                      <FiArrowRight className={styles.svcArr} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <div className={styles.colHeader}>
                <span className={styles.colDot} />
                <h5>Quick Links</h5>
              </div>
              <ul className={styles.navList}>
                {NAV_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} smooth duration={350} offset={-70}>
                      <FiArrowRight className={styles.navArr} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className={styles.colHeader}>
                <span className={styles.colDot} />
                <h5>Contact Us</h5>
              </div>
              <ul className={styles.contactList}>
                <li><span className={styles.ci}><FiPhone /></span><a href="tel:9398919934">9398919934</a></li>
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
            <p>Made with <span className={styles.heart}>♥</span> in India</p>
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
