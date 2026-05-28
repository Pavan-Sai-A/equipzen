export interface NavLink {
  label: string;
  to: string;
}

export interface FloatingBadge {
  icon: React.ReactNode;
  text: string;
  x: string;
  y: string;
  delay: number;
}

export interface Skill {
  label: string;
  pct: number;
}

export interface MvvItem {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  cat: 'Software' | 'Hardware';
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  lines: { text: string; href?: string }[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = React.FC<any>;

export interface FooterService {
  icon: IconComponent;
  label: string;
}

export interface Social {
  Icon: IconComponent;
  label: string;
  href: string;
}

export type FormStatus = null | 'success';

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
