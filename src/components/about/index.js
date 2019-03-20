import React from "react"
import Aboutme from "./aboutme"
import Profile from "./profile"
import Skills from "./skills"
import CTA from "./cta"

import "./about.scss"

const About = () => (
<section id="about" className="section section--about">
  <Aboutme/>
	<div className="about__content">
		<Profile/>
		<Skills/>
	</div>
	<CTA/>
</section>
)

export default About