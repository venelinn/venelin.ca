import React from "react"
import Hero from '../Hero';
import Social from './Social';
import styles from './index.module.scss';

import "./header.scss"

const Header = () => (
  <section className={`${styles.intro} ${styles.introGradient}`}>
    <Hero className={styles.hero__image} />
    <div className={styles.intro__content}>
      <span className={styles.intro__msg}>Hi there!</span>
      <h1>I'm Venelin</h1>
      <p className={styles.intro__position}>
        <span>Front-end Developer</span>
        <span>UI/UX</span>
      </p>
      <ul className={`${styles.intro__cta} btn__group`}>
        <li><a className="button" href="#about" title="More About Venelin">About Me</a></li>
        <li><a className="button" href="#portfolio" title="Venelin's Portfolio">Portfolio</a></li>
      </ul>
    </div>
    <div className="header__menu__social-container">
      <Social />
    </div>
  </section>
)

export default Header
