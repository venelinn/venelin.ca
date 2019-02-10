import PropTypes from "prop-types"
import React from "react"
import SocialMenu from '../socialMenu'

import "./header.scss"

const Header = ({ socialItems }) => (
  <section class="intro">
    <div class="intro__content">
      <span class="intro__msg">Hi there!</span>
      <h1>I'm Venelin</h1>
      <p class="intro__position delay--8">
        <span>Front-end Developer</span>
        <span>UI/UX</span>
      </p>
      <ul class="intro__cta btn__group">
        <li><a class="button jsSmoothScroll" href="#about" title="More About Venelin">About Me</a></li>
        <li><a class="button jsSmoothScroll" href="#portfolio" title="Venelin's Portfolio">Portfolio</a></li>
      </ul>
      <div class="header__menu__social-container">
        <SocialMenu items={socialItems} />
      </div>
    </div>

  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
