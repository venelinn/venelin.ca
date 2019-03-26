import React from 'react';
import initialJobs from '../../data/experience';
import Icon from '../../components/icons';

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isJobsDataLoaded: true,
      jobs: initialJobs,
    };
  }

  render() {
    const { isJobsDataLoaded, jobs } = this.state;
    return (
      <>
        {isJobsDataLoaded ? (
          <div className="timeline-wrap">
            {/* {jobs.slice(0).reverse().map(job => ( */}
            {jobs.sort( (a,b)=> b.id-a.id).map(job => (
              <div key={job.id} className="timeline-block">
                <div className="timeline-ico"><Icon name="bag" /></div>
                <div className="timeline-header">
                  <div className="timeline__pos">{job.position}</div>
                  <p>{job.start} - {job.end}</p>
                </div>
                <div className="timeline-content">
                  <div className="timeline__company">{job.company}</div>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        )}
      </>
    );
  }
}
