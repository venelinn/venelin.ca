import React from 'react';
import Profile from './profile';
import { Fade } from 'react-awesome-reveal';
import RichText from '../../utils/RichText';
import './about.scss';

const About = ({ about }) => (
    <>
      <Fade triggerOnce delay={500}>
        <div className='about__intro'>
          <RichText data={about.content} />
        </div>
        <div className='about__content'>
          <Profile info={about.modules[0]} />
        </div>
      </Fade>
    </>
  );

export default About;
