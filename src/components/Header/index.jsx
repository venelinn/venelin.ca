import React from 'react';
import Hero from '../Hero';
import Social from './Social';
import { RellaxWrapper } from 'react-rellax-wrapper'
import './header.scss';

const Header = ({ header, theme, social }) => {
  return (
    <section className='intro' data-theme={theme}>
      <Hero data={header.modules[0]} />
      <div className='intro__content'>
        <RellaxWrapper speed={5}>
          <div className='intro__msg title--h2'>{header.sectionTitle}</div>
        </RellaxWrapper>
        <RellaxWrapper speed={4}>
          <h1 className='intro__title title title--h1'>{header.title}</h1>
        </RellaxWrapper>
        <RellaxWrapper speed={3}>
          <p className='intro__position'>
            <span>{header.description}</span>
          </p>
        </RellaxWrapper>
        <RellaxWrapper speed={2}>
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
        </RellaxWrapper>
      </div>
      <Social data={social} />
    </section>
  );
};

export default Header;
