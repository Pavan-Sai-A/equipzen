import React from 'react';
import clsx from 'clsx';
import styles from './GlowButton.module.scss';

type Variant = 'sm' | 'success' | 'loading' | 'navy' | 'ghost' | 'cta';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant | Variant[];
  icon?: React.ReactNode;
}

const GlowButton: React.FC<Props> = ({ children, onClick, className, type = 'button', variant, icon }) => {
  const variants = variant ? (Array.isArray(variant) ? variant : [variant]) : [];
  return (
    <button
      type={type}
      className={clsx(styles.gb, ...variants.map(v => styles[v]), className)}
      onClick={onClick}
    >
      <span className={styles.text}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </span>
    </button>
  );
};

export default GlowButton;
