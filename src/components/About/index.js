import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Profile from './profile'
import RichText from '../../utils/RichText'
// import CTA from './cta';

import './about.scss'

const About = (props) => {
  return (
    <>
      <Fade triggerOnce delay={500}>
        <div className="about__intro">
          <RichText data={props.about.content} />
        </div>
        <div className="about__content">
          <Profile info={props.about.modules[0]} />
        </div>
      </Fade>
      {/* <CTA /> */}
    </>
  )
}

export default About
