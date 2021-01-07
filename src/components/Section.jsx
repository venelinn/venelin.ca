import PropTypes from 'prop-types';
import React from 'react';
//import Fade from 'react-reveal/Fade';
import { Fade } from 'react-awesome-reveal';

import './Section.scss';

const Section = ({
  children,
  className,
  title,
  theme,
  description,
  ...props
}) => (
  <section
    id={`${className}`}
    className={`section section--${className}`}
    data-theme={theme}
    {...props}
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

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

Section.defaultProps = {
  className: ''
};

export default Section;
