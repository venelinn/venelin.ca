import React from 'react'
import Section from "./Section";
//import styled from 'styled-components'
//import 'whatwg-fetch'

import "./Contacts.scss"

const Contacts = () =>  {
  return (
  <Section
    className="contact"
    title="Contact"
    description="I'd Love To Hear From You."
    >
    <div className="contact-form">
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p>
          <label>Email: <input type="text" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </Section>
  )
}

export default Contacts