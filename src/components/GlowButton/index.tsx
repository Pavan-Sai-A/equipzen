import React from 'react';
import clsx from 'clsx';
import styles from './GlowButton.module.scss';

type Variant = 'sm' | 'success' | 'loading' | 'navy';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: Variant | Variant[];
}

const GlowButton: React.FC<Props> = ({ children, onClick, className, type = 'button', variant }) => {
  const label = typeof children === 'string' ? children : '';
  const variants = variant ? (Array.isArray(variant) ? variant : [variant]) : [];
  return (
    <button
      type={type}
      className={clsx(styles.gb, ...variants.map(v => styles[v]), className)}
      onClick={onClick}
    >
      <span className={styles.text} data-text={label}>
        {children}
      </span>
    </button>
  );
};

export default GlowButton;
