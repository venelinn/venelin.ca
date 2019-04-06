import React from "react"
import Section from "../Section";
import Profile from "./profile"
import Skills from "./skills"
import CTA from "./cta"
import Reveal from 'react-reveal/Reveal';

import "./about.scss"

const About = props => {
	const aboutme = props.aboutme;
	const profileData = props.profile;
	return (
		<Section
			className={aboutme.slug}
			title={aboutme.title}
			description={aboutme.subtitle}
		>
		<Reveal effect="fadeInUp">
			<div className="about__intro"  dangerouslySetInnerHTML={{ __html: aboutme.content.childContentfulRichText.html}} />
		</Reveal>
			<div className="about__content">
				<Profile info={profileData}/>
				<Skills/>
			</div>
			<CTA/>
	</Section>
	)
}

export default About
