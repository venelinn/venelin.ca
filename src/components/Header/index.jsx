import React from "react"
import { CSSTransition } from 'react-transition-group';
import Hero from '../Hero';
import Social from './Social';
import styles from './index.module.scss';

import "./header.scss"

const Header = props => {
  const hero = props.hero;
  return (
    <section className={`${styles.intro} ${styles.introGradient}`}>
      <Hero data={hero} />

        <div className={styles.intro__content}>
          <span className={styles.intro__msg}>Hi there!</span>
          <h1>I'm Venelin</h1>
          <p className={styles.intro__position}>
            <span>Front-end Developer</span>
            <span>UI/UX</span>
          </p>
          <ul className={`${styles.intro__cta} btn__group`}>
            <li><a className="button jsSmoothScroll" href="#about" title="More About Venelin">About Me</a></li>
            <li><a className="button jsSmoothScroll" href="#portfolio" title="Venelin's Portfolio">Portfolio</a></li>
          </ul>
        </div>
        <Social />
    </section>
  )
}

export default Header
