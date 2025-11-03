import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Section.scss';

interface SectionProps {
  children: React.ReactNode;
  className: string;
  title: string;
  description: string;
  theme: string;
}

export const Section = ({
  children,
  className,
  title,
  theme,
  description,
}: SectionProps) => (
  <section
    id={`${className}`}
    className={`section section--${className}`}
    data-theme={theme}
  >
    <div className='section__inner'>
      <Fade triggerOnce delay={300}>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </Fade>
    </div>
    {children}
  </section>
);
