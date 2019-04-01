import React from "react"
import PropTypes from "prop-types"

import "../styles/style.scss"

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children }) => (
  <>
    { children }
    <footer>
      <div className="copyright">© {new Date().getFullYear()}, Built with Love</div>
      {` `}
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
