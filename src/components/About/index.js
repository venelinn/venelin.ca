import React from 'react';
import Profile from './profile';
import Fade from 'react-reveal/Fade';
//import CTA from './cta';

import './about.scss';

const About = props => {
  return (
    <>
      <Fade delay={500}>
        <div
          className='about__intro'
          dangerouslySetInnerHTML={{
            __html: props.about.content.childContentfulRichText.html
          }}
        />
        <div className='about__content'>
          <Profile info={props.about.modules[0]} />
        </div>
      </Fade>
      {/* <CTA /> */}
    </>
  );
};

export default About;
