import PropTypes from 'prop-types';
import React from 'react';
import styles from './Section.module.scss';

const Section = ({type, children, className, title, description, ...props }) =>  (
   <section id={`${className}`} className={`${styles.section} ${styles.section}--${className}`} {...props}>
      { type === 'ContentfulIntro'
        ?
        <h1>{title}</h1>
        : (
        <div className={`${styles.inner}`}>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        )
      }

    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

export default Section;
