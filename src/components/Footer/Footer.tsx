import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Theme } from '../../types/types'
import './Footer.scss';

interface FooterProps {
  theme: Theme;
}

export const Footer = ({ theme = 'light' }: FooterProps) => (
  <footer className='footer' data-theme={theme}>
    <Fade delay={300}>
      <div className='footer__copyright'>
        ©{new Date().getFullYear()}, Built with Gatsby. I love you Lea!
      </div>
    </Fade>
  </footer>
);
