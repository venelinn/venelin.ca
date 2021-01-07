import React from 'react';
//import Fade from 'react-reveal/Fade';
import { Fade } from 'react-awesome-reveal';
import classes from './Footer.module.scss';

const Footer = ({ theme }) => (
  <footer className={classes.footer} data-theme={theme}>
    <Fade delay={300}>
      <div className={classes.copyright}>
        © {new Date().getFullYear()}, Built with Gatsby. I love you Lea!
      </div>
    </Fade>
    {` `}
  </footer>
);

export default Footer;
