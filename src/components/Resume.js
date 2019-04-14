import React from 'react';
import SVG from '../components/SVG';
import './Resume.scss';

const Resume = props => {
  return (
    <>
      <div className='timeline'>
        <div className='resume__header'>
          <div className='timeline__exp'>Work Experience</div>
        </div>
        <div className='timeline__wrap'>
          {props.jobs.map((job, index) => (
            <div
              key={index}
              className={`timeline__block ${!job.position ? 'hidden' : ''}`}
            >
              <div className='timeline__ico'>
                <SVG icon='bag' />
              </div>
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
        </div>
      </div>
      <div className='timeline'>
        <div className='resume__header'>
          <div className='timeline__exp'>Education</div>
        </div>
        <div className='timeline__wrap'>
          <div className='timeline__block'>
            <div className='timeline__ico'>
              <SVG icon='graduation' />
            </div>
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
    </>
  );
};
export default Resume;
