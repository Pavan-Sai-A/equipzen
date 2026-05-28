import React from 'react';
import styles from './Marquee.module.scss';

const ITEMS = [
  '⚡ Software Development', '🛡️ Cyber Security', '☁️ Cloud Solutions',
  '📱 Mobile Apps', '🔧 IT Hardware', '🌐 Network Solutions',
  '🤝 IT Consulting', '🔁 End-to-End Repairs', '🎧 24/7 Support',
  '⚡ Software Development', '🛡️ Cyber Security', '☁️ Cloud Solutions',
  '📱 Mobile Apps', '🔧 IT Hardware', '🌐 Network Solutions',
];

const Marquee: React.FC = () => (
  <div className={styles.section}>
    <div className={styles.track}>
      <div className={styles.inner}>
        {ITEMS.map((item) => <span key={item} className={styles.item}>{item}</span>)}
      </div>
      <div className={styles.inner} aria-hidden>
        {ITEMS.map((item) => <span key={`dup-${item}`} className={styles.item}>{item}</span>)}
      </div>
    </div>
  </div>
);

export default Marquee;
