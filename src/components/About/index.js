import React from 'react';
import Profile from './profile';
//import CTA from './cta';

import './about.scss';

const About = props => {
  return (
    <>
      <div
        className='about__intro'
        dangerouslySetInnerHTML={{
          __html: props.about.content.childContentfulRichText.html
        }}
      />

      <div className='about__content'>
        <Profile info={props.about.modules[0]} />
      </div>
      {/* <CTA /> */}
    </>
  );
};

export default About;
