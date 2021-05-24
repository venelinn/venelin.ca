import React from 'react'
import { Fade } from 'react-awesome-reveal'
import RichText from '../../utils/RichText'
import Profile from './profile'
// import CTA from './cta';

import './about.scss'

const About = ({ about }) => {
  return (
    <>
      <Fade triggerOnce delay={500}>
        <div className="about__intro">
          <RichText data={about.content} />
        </div>
        <div className="about__content">
          <Profile info={about.modules[0]} />
        </div>
      </Fade>
      {/* <CTA /> */}
    </>
  )
}

export default About
