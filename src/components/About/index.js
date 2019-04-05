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
	const ab = props.data.contentfulAbout;
	return (
		<Section
			className={ab.slug}
			title={ab.title}
			description={ab.subtitle}
		>
		<Reveal effect="fadeInUp">
			<div className="about__intro"  dangerouslySetInnerHTML={{ __html: ab.content.childContentfulRichText.html}} />
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
