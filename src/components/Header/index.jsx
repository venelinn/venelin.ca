import React from "react"
//import { CSSTransition } from 'react-transition-group';
import Hero from '../Hero';
import Social from './Social';
import Menu from './Hamburger';
import styles from './index.module.scss';

import "./header.scss"

const Header = props => {
  return (
    <section className={`${styles.intro} ${styles.introGradient}`}>
      <Hero data={props.hero.modules[0]} />
        <div className={styles.intro__content}>
          <span className={styles.intro__msg}>Hi there!</span>
          <h1>{props.hero.title}</h1>
          <p className={styles.intro__position}>{props.hero.description}</p>
          <ul className={`${styles.intro__cta} btn__group`}>
            <li><a className="button jsSmoothScroll" href="#about" title="More About Venelin">About Me</a></li>
            <li><a className="button jsSmoothScroll" href="#portfolio" title="Venelin's Portfolio">Portfolio</a></li>
          </ul>
        </div>
        <Social />
        <Menu />
    </section>
  )
}

export default Header
