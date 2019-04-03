import React from "react"
import Hero from './Hero/Hero';
import Social from './Social';

import "./header.scss"

const Header = ({ social }) => (
  <section className="intro intro--gradient">
    <Hero />
    <div className="intro__content">
      <span className="intro__msg">Hi there!</span>
      <h1>I'm Venelin</h1>
      <p className="intro__position">
        <span>Front-end Developer</span>
        <span>UI/UX</span>
      </p>
      <ul className="intro__cta btn__group">
        <li><a className="button jsSmoothScroll" href="#about" title="More About Venelin">About Me</a></li>
        <li><a className="button jsSmoothScroll" href="#portfolio" title="Venelin's Portfolio">Portfolio</a></li>
      </ul>
    </div>
    <div className="header__menu__social-container">
      <Social {...social} />
    </div>
  </section>
)

export default Header
