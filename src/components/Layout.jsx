import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import { useTheme, ThemeProvider } from '../theme';
import Helmet from 'react-helmet';
import GlobalStyle from '../styles/global';

import '../styles/style.scss';

if (typeof window !== 'undefined') {
  require('smooth-scroll')("[data-href='smooth']");
}

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


const ThemeClassOnBody = props => {
  const [theme] = useTheme();
  return (
    <Helmet>
      <body data-theme={theme} className={`page page--${props.bodyClass}`} />
    </Helmet>
  );
};


const Layout = props => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ThemeClassOnBody bodyClass={props.bodyClass} />
        {/* <ChangeThemeButton theme='dark'>Dark theme</ChangeThemeButton>
        <ChangeThemeButton theme='light'>Light theme</ChangeThemeButton>
        */}

      { props.children }
    </ThemeProvider>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
