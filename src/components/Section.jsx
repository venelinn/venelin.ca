import PropTypes from 'prop-types';
import React from 'react';
import styles from './Section.module.scss';

const Section = ({ children, className, ...props }) => (
  <section id={`${className}`} className={`${styles.section} ${styles.section}--${className}`} {...props}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

export default Section;
