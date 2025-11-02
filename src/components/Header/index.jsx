import PropTypes from 'prop-types';
import React from 'react';
import Hero from '../Hero';
import Social from './Social';
import './header.scss';

const Header = ({ header, theme, social }) => {
  return (
    <section className='intro' data-theme={theme}>
      <Hero data={header.modules[0]} />
      <div className='intro__content'>
        <div speed={5}>
          <div className='intro__msg title--h2'>{header.sectionTitle}</div>
        </div>
        <div speed={4}>
          <h1 className='intro__title title title--h1'>{header.title}</h1>
        </div>
        <div speed={3}>
          <p className='intro__position'>
            <span>{header.description}</span>
          </p>
        </div>
        <div speed={2}>
          <ul className='intro__cta btn__group'>
            <li>
              <a
                className='button'
                href='#about'
                title='More About Venelin'
                data-href='smooth'
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className='button'
                href='#portfolio'
                title="Venelin's Portfolio"
                data-href='smooth'
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Social data={social} />
    </section>
  );
};

export default Header;
export { Header };

Header.propTypes = {
  header: PropTypes.shape({
    sectionTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.shape({
          fluid: PropTypes.object,
        }),
      })
    ),
  }).isRequired,
  theme: PropTypes.string,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      link: PropTypes.string,
    }).isRequired
  ),
};

Header.defaultProps = {
  theme: 'light',
};
