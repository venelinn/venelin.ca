import React from "react";
import Section from "../Section";
import Icon from '../icons';
import Jobs from "./jobs"

import "./resume.scss";

const Resume = () => (
	<Section
		className="resume"
		title="Resume"
		description="More of my credentials"
		>
		<div className="timeline">
			<div className="resume-header">
				<div className="timeline__exp">Work Experience</div>
			</div>
			<Jobs />
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

export default Resume

