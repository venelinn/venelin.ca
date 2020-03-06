import React from 'react';
import Hero from '../Hero';
import Social from './Social';
import Rellax from 'react-rellax';

import './header.scss';

const Header = ({ header, theme, social }) => {
  return (
    <section className='intro' data-theme={theme}>
      <Hero data={header.modules[0]} />
      <div className='intro__content'>
        <Rellax speed={5}>
          <div className='intro__msg title--h2'>{header.sectionTitle}</div>
        </Rellax>
        <Rellax speed={4}>
          <h1 className='intro__title title title--h1'>{header.title}</h1>
        </Rellax>
        <Rellax speed={3}>
          <p className='intro__position'>
            <span>{header.description}</span>
          </p>
        </Rellax>
        <Rellax speed={2}>
          <ul className='intro__cta btn__group'>
            <li>
              <a
                className='button jsSmoothScroll'
                href='#about'
                title='More About Venelin'
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className='button jsSmoothScroll'
                href='#portfolio'
                title="Venelin's Portfolio"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </Rellax>
      </div>
      <Social data={social} />
    </section>
  );
};

export default Header;
