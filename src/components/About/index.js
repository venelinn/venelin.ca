import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import RichText from '../../utils/RichText';
import './about.scss';

const About = ({ content, profile }) => {
  return (
  <>
    <Fade triggerOnce delay={500}>
      <div className='about__intro'>
        <RichText data={content} />
      </div>
      <div className='about__content'>
        <h4>Profile</h4>
        <ul className="about__info-list">
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
  </>
)};

export default About;
export { About };

About.propTypes = {
  content: PropTypes.shape({
    raw: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    jobPosition: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};
