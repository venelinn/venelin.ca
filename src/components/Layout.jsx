import React from 'react';
import PropTypes from 'prop-types';

import '../styles/style.scss';

if (typeof window !== 'undefined') {
  require('smooth-scroll')("[data-href='smooth']");
}

const Layout = ({ children }) => <>{children}</>;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
