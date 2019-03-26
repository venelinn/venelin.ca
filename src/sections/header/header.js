import React from "react"
import { Parallax } from "react-parallax";
import Social from './Social';

import "./header.scss"

const Header = ({social}) => (
  <Parallax bgImage={image} strength={1200}>
    <div className="intro intro--gradient">
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
    </div>
  </Parallax>
)

export default Header

const image = require('../../images/bg.jpg')

