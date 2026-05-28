import React from 'react';
import { FiCode, FiShield, FiCloud, FiSmartphone, FiTool, FiWifi, FiUsers, FiRefreshCw, FiHeadphones } from 'react-icons/fi';
import styles from './Marquee.module.scss';

const ITEMS = [
  { icon: FiCode,        label: 'Software Development' },
  { icon: FiShield,      label: 'Cyber Security'       },
  { icon: FiCloud,       label: 'Cloud Solutions'      },
  { icon: FiSmartphone,  label: 'Mobile Apps'          },
  { icon: FiTool,        label: 'IT Hardware'          },
  { icon: FiWifi,        label: 'Network Solutions'    },
  { icon: FiUsers,       label: 'IT Consulting'        },
  { icon: FiRefreshCw,   label: 'End-to-End Repairs'  },
  { icon: FiHeadphones,  label: '24/7 Support'         },
];

const Marquee: React.FC = () => (
  <div className={styles.section}>
    <div className={styles.track}>
      {[0, 1].map((d) => (
        <div className={styles.inner} key={d} aria-hidden={d === 1 || undefined}>
          {ITEMS.map(({ icon: Icon, label }) => (
            <span key={label} className={styles.item}>
              <span className={styles.icon}><Icon /></span>
              {label}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
