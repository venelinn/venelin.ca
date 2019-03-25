import React from "react"
import Icon from '../Icons/Icon'

import "./resume.scss"

const Resume = () => (
	<section id="resume" className="section section--resume">
		<div className="section-intro">
			<h2>Resume</h2>
			<h3>More of my credentials.</h3>
		</div>
		<div className="timeline">
			<div className="resume-header">
				<div className="timeline__exp">Work Experience</div>
			</div>
			<div className="timeline-wrap jsExpWrapper">

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

	</section>
)

export default Resume