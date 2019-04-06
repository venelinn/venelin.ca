import React from "react";
import Section from "./Section";
import Icon from "./icons";
import styles from "./Resume.module.scss";

const Resume = props => {
	const jobs = props.jobs.edges;
	return (
		<Section
			className="resume"
			title="Resume"
			description="More of my credentials"
			>
			<div className={styles.timeline}>
				<div className={styles.resume__header}>
					<div className={styles.timeline__exp}>Work Experience</div>
				</div>
				<div className={styles.timeline__wrap}>
        	{jobs.map(({ node: job }) => (
						<div key={job.id} className={styles.timeline__block}>
							<div className={styles.timeline__ico}><Icon name="bag" /></div>
							<div className={styles.timeline__header}>
								<div className={styles.timeline__pos}>{job.position}</div>
								<p>{job.start} - {job.end}</p>
							</div>
							<div className={styles.timeline__content}>
								<div className={styles.timeline__company}>{job.company}</div>
								<p>{job.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.timeline}>
			<div className={styles.resume__header}>
					<div className={styles.timeline__exp}>Education</div>
				</div>
				<div className={styles.timeline__wrap}>
					<div className={styles.timeline__block}>
						<div className={styles.timeline__ico}><Icon name="graduation" /></div>
						<div className={styles.timeline__header}>
							<div className={styles.timeline__pos}>Bachelor Degree</div>
							<p>Sept 1998 - June 2001</p>
						</div>
						<div className={styles.timeline__content}>
							<div className={styles.timeline__company}>Computer science</div>
							<p>Technical University of Sofia, Bulgaria</p>
						</div>
					</div>
				</div>
			</div>

		</Section>
	)
}

export default Resume

