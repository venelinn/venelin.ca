import React from "react"
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Section from "../Section";
import Aboutme from "./aboutme"
import Profile from "./profile"
import Skills from "./skills"
import CTA from "./cta"
import Reveal from 'react-reveal/Reveal';

import "./about.scss"

const About = props => {
	const aboutme = props.aboutme;
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
				<Profile/>
				<Skills/>
			</div>
			<CTA/>
	</Section>
	)
}

export default About
