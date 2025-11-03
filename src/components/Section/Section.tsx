import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Section.scss';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  theme?: string;
  type?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  theme,
  description,
  ...props // <-- this allows extra props like data-* attributes
}) => (
  <section
    id={className}
    className={`section section--${className}`}
    data-theme={theme}
    {...props}
  >
    <div className='section__inner'>
      <Fade triggerOnce delay={300}>
        <h2>{title}</h2>
        {description && <h3>{description}</h3>}
      </Fade>
    </div>
    {children}
  </section>
);
