import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Footer.scss';

interface FooterProps {
  theme: string;
}

export const Footer = ({ theme = 'light' }: FooterProps) => (
  <footer className='footer' data-theme={theme}>
    <Fade delay={300}>
      <div className='footer__copyright'>
        ©{new Date().getFullYear()}, Built with Gatsby. I love you Lea!{' '}
      </div>
    </Fade>
  </footer>
);
