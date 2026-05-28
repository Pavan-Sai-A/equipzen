import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiGlobe, FiCheckCircle } from 'react-icons/fi';
import GlowButton from '../GlowButton';
import styles from './Contact.module.scss';
import type { FormStatus, ContactForm } from '../../types';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const RECIPIENT = 'info@equipzen.in';

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.bgGlow} />
      <div className="container">
        <motion.div
          className={`section-head ${styles.centeredHead}`}
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <span className="section-ghost">Get in touch</span>
          <motion.span className="section-label" variants={fadeUp}>Get In Touch</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>Contact <span>Us</span></motion.h2>
          <motion.p className="section-sub" variants={fadeUp}>We are here to answer your questions and help you find the right solutions.</motion.p>
          <motion.div className={`divider ${styles.centeredDivider}`} variants={fadeUp} />
        </motion.div>

        <div className={styles.grid}>
          {/* Info Panel */}
          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><FiPhone /></div>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <a href="tel:+919398919934">+91 9398919934</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><FiMail /></div>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <a href="mailto:md@equipzen.in">md@equipzen.in</a>
                <a href="mailto:info@equipzen.in">info@equipzen.in</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><FiGlobe /></div>
              <div>
                <p className={styles.infoLabel}>Website</p>
                <a href="https://www.equipzen.in" target="_blank" rel="noreferrer">www.equipzen.in</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}><FiMapPin /></div>
              <div>
                <p className={styles.infoLabel}>Office</p>
                <span>Flat no 406, Aavaas Apartment,<br />Kankipadu 521151,<br />Vijayawada, A.P, India</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required autoComplete="name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required autoComplete="email" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your project..." rows={6} value={form.message} onChange={handleChange} required />
            </div>
            <GlowButton
              type="submit"
              className={styles.submitBtn}
              variant={status === 'success' ? 'success' : undefined}
            >
              {status === 'success' ? 'Opening Email...' : 'Send Message'}
            </GlowButton>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className={styles.toast}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <FiCheckCircle /> Your email client is opening with the details filled in!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
