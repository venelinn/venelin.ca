import React from 'react';
import { Fade } from 'react-awesome-reveal';
import RichText from '../../utils/RichText';
import './About.scss';

interface AboutProps {
  content: {
    raw: string;
  };
  profile: {
    name?: string;
    jobPosition?: string;
    website?: string;
  };
}

export const About = ({ content, profile }: AboutProps) => {
  return (
    <Fade triggerOnce delay={500}>
      <div className='about__intro'>
        <RichText data={content} />
      </div>
      <div className='about__content'>
        <h4>Profile</h4>
        <ul className='about__info-list'>
          <li>
            <strong>Name:</strong>
            <span>{profile.name}</span>
          </li>
          <li>
            <strong>Job:</strong>
            <span>{profile.jobPosition}</span>
          </li>
          <li>
            <strong>Website:</strong>
            <span>{profile.website}</span>
          </li>
        </ul>
      </div>
    </Fade>
  );
};
