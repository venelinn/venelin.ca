import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import SVG from '../SVG';
import './Resume.scss';

const Resume = props => {
  return (
    <>
      <div className='timeline'>
        <div className='resume__header'>
          <div className='timeline__exp'>Work Experience</div>
        </div>
        <div className='timeline__wrap'>
          <Fade triggerOnce direction='up'>
            {props.jobs.map((job, index) => (
              <div
                key={index}
                className={`timeline__block ${!job.position ? 'hidden' : ''}`}
              >
                <Zoom delay={200}>
                  <div className='timeline__ico'>
                    <SVG icon='bag' />
                  </div>
                </Zoom>

                <div className='timeline__header'>
                  <div className='timeline__pos'>{job.position}</div>

                  <p>
                    {job.start} - {job.end ? job.end : 'Current'}
                  </p>
                </div>
                <div className='timeline__content'>
                  <div className='timeline__company'>{job.company}</div>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <Fade triggerOnce direction='up'>
        <div className='timeline'>
          <div className='resume__header'>
            <div className='timeline__exp'>Education</div>
          </div>
          <div className='timeline__wrap'>
            <div className='timeline__block'>
              <Zoom delay={200}>
                <div className='timeline__ico'>
                  <SVG icon='graduation' />
                </div>
              </Zoom>
              <div className='timeline__header'>
                <div className='timeline__pos'>Bachelor Degree</div>
                <p>Sept 1998 - June 2001</p>
              </div>
              <div className='timeline__content'>
                <div className='timeline__company'>Computer science</div>
                <p>Technical University of Sofia, Bulgaria</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Resume;
