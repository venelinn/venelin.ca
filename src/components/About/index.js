import React from "react"
import Section from "../Section";
import Profile from "./profile"
import Skills from "./skills"
import CTA from "./cta"
//import Reveal from 'react-reveal/Reveal';

import "./about.scss"

const About = props => {
	return (
		<>
			<div className="about__intro"  dangerouslySetInnerHTML={{ __html: props.about.content.childContentfulRichText.html}} />

			<div className="about__content">
				<Profile info={props.about.modules[0]}/>
			</div>
			<CTA/>
	</>
	)
}

export default About
