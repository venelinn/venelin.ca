import React from "react";
import Section from "../Section";
import Icon from '../icons';

import "./resume.scss";

const Resume = props => {
	const jobs = props.jobs.edges;
	return (
		<Section
			className="resume"
			title="Resume"
			description="More of my credentials"
			>
			<div className="timeline">
				<div className="resume-header">
					<div className="timeline__exp">Work Experience</div>
				</div>
				<div className="timeline-wrap">
        	{jobs.map(({ node: job }) => (
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
			</div>
			<div className="timeline">
				<div className="resume-header">
					<div className="timeline__exp">Education</div>
				</div>
				<div className="timeline-wrap">
					<div className="timeline-block">
						<div className="timeline-ico">
							<Icon name="graduation" />
						</div>
						<div className="timeline-header">
							<div className="timeline__pos">Bachelor Degree</div>
							<p>Sept 1998 - June 2001</p>
						</div>
						<div className="timeline-content">
							<div className="timeline__company">Computer science</div>
							<p>Technical University of Sofia, Bulgaria</p>
						</div>
					</div>
				</div>
			</div>

		</Section>
	)
}

export default Resume

