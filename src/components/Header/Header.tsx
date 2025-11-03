import React from 'react';
import { Hero } from '../Hero';
import { Social, type SocialType } from '../Social';
import './Header.scss';

type HeaderData = {
  title: string;
  description: string;
  sectionTitle: string;
  modules: any;
};

type Theme = 'light' | 'dark';

interface HeaderProps {
  header: HeaderData;
  theme: Theme;
  social: SocialType[];
}

export const Header = ({ header, theme = 'light', social }: HeaderProps) => {
  return (
    <section className='intro' data-theme={theme}>
      <Hero data={header.modules[0]} />
      <div className='intro__content'>
        <div>
          <div className='intro__msg title--h2'>{header.sectionTitle}</div>
        </div>
        <div>
          <h1 className='intro__title title title--h1'>{header.title}</h1>
        </div>
        <div>
          <p className='intro__position'>
            <span>{header.description}</span>
          </p>
        </div>
        <div>
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
