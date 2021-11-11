import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme, ThemeProvider } from '../theme';
import Helmet from 'react-helmet';

import '../styles/style.scss';

const ChangeThemeButton = ({ children, theme }) => {
  const [currentTheme, setTheme] = useTheme();
  const changeTheme = useCallback(() => setTheme(theme), [theme, setTheme]);
  return (
    <button
      className={theme === currentTheme ? 'active' : ''}
      onClick={changeTheme}
    >
      {children}
    </button>
  );
};


const ThemeClassOnBody = ({ bodyClass }) => {
  const [theme] = useTheme();
  return (
    <Helmet>
      <body data-theme={theme} className={`page page--${bodyClass}`} />
    </Helmet>
  );
};


const Layout = ({bodyClass, children}) => {
  return (
    <ThemeProvider>
      <ThemeClassOnBody bodyClass={bodyClass} />
      {/* <div className="theme-toggle">
        <ChangeThemeButton theme='dark'>Dark theme</ChangeThemeButton>
        <ChangeThemeButton theme='light'>Light theme</ChangeThemeButton>
      </div> */}
      { children }
    </ThemeProvider>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string
};

Layout.defaultProps = {
  bodyClass: null,
};

export default Layout;
