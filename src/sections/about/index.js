import React from "react"
import Section from "../../components/Section";
import Aboutme from "./aboutme"
import Profile from "./profile"
import Skills from "./skills"
import CTA from "./cta"

import "./about.scss"

const About = () => (
	<Section
		className="about"
		title="About"
		description="Let me introduce myself"
	>
			<Aboutme/>
			<div className="about__content">
				<Profile/>
				<Skills/>
			</div>
			<CTA/>
</Section>
)

export default About