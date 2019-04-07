import React from 'react'
import Section from "./Section";
//import styled from 'styled-components'
//import 'whatwg-fetch'

import "./Contacts.scss"

const Form = () => {
  return (
    <div className="contact-form">
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <p className="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <div className="form-field">
          <label htmlFor="contactName" className="sr-only">Name</label>
          <input name="name" type="text"  placeholder="Name" minLength="2" />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="sr-only">Email</label>
          <input name="email" type="email" placeholder="Email"  />
        </div>
        <div className="form-field">
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea name="message" placeholder="Message" rows="5" cols="5"></textarea>
        </div>
        <div className="form-field">
          <button className="submitform" type="submit">Submit</button>
          <div id="submit-loader">
            <div className="text-loader">Sending...</div>
            <div className="s-loader">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

const Contacts = () =>  {
  return (
  <Section
    className="contact"
    title="Contact"
    description="I'd Love To Hear From You."
    >
    <Form />
  </Section>
  )
}

export default Contacts