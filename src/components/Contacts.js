import React from 'react'
import Section from "./Section";
import styled from 'styled-components'
import 'whatwg-fetch'

import "./Contacts.scss"


const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  width: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: flex;
  flex-flow: column;
  height: 25vh;
  align-items: center;
  text-align: center;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Form = () => {
  return (
    <div className="contact-form">
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot"
        >
        <div className="form-field">
          <label htmlFor="contactName" className="sr-only">Name</label>
          <input name="contactName" type="text"  placeholder="Name" minLength="2" />
        </div>
        <div className="form-field">
          <label htmlFor="contactEmail" className="sr-only">Email</label>
          <input name="contactEmail" type="email" placeholder="Email"  />
        </div>
        <div className="form-field">
          <label htmlFor="contactSubject" className="sr-only">Subject</label>
          <input name="contactSubject" type="text" placeholder="Subject" />
        </div>
        <div className="form-field">
          <label htmlFor="contactMessage" className="sr-only">Message</label>
          <textarea name="contactMessage" placeholder="Message" rows="5" cols="5"></textarea>
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