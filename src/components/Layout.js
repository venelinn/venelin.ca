import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  getLocalStorageTheme,
  setLocalStorageTheme,
  getBrowserTheme,
  scrollAfterThemeChange
} from '../utils/theme';

import '../styles/style.scss';

const ThemeClassOnBody = ({ theme }) => (
  <Helmet>
    <body data-theme={theme} className={`page page--${theme}`} />
  </Helmet>
);

const Layout = ({ children }) => {

  const [theme, setTheme] = useState(getLocalStorageTheme() || 'light');

  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme && !getLocalStorageTheme(theme)) {
      setTheme(defaultDark ? 'dark' : 'light')
    }
  }, []);


  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setLocalStorageTheme(newTheme);
    scrollAfterThemeChange(newTheme === 'light' ? 'up' : 'down');
  }

  return (
    <>
      <ThemeClassOnBody theme={theme} />
      <button onClick={switchTheme} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} Theme`} className={`theme-toggle theme-toggle--${theme}`}>
        <span className="sr-only" aria-hidden="true">Switch to {theme === 'light' ? 'dark' : 'light'} Theme</span>
      </button>
      { children }
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
export { Layout };
