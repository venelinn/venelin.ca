import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import './Footer.scss';

const Footer = ({ theme }) => (
  <footer className="footer" data-theme={theme}>
    <Fade delay={300}>
      <div className="footer__copyright">
        © {new Date().getFullYear()}, Built with Gatsby. I love you Lea!
      </div>
    </Fade>
    {` `}
  </footer>
);

export default Footer;
export { Footer };

Footer.propTypes = {
  theme: PropTypes.string,
};

Footer.defaultProps = {
  theme: 'light',
}
