import React from 'react'
import Section from "./Section";
import styled from 'styled-components'
//import 'whatwg-fetch'

import "./Contacts.scss"

const Form = styled.form`
  &::before {
    content: '';
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Modal = styled.div`
  background: white;
  color: #000;
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
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contacts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Section
        className="contact"
        title="Contact"
        description="I'd Love To Hear From You."
        >
        <div className="contact-form">
          <Form
            name="contact"
            onSubmit={this.handleSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot"
            overlay={this.state.showModal}
            onClick={this.closeModal}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot" onChange={this.handleInputChange} />
              </label>
            </p>
            <div className="form-field">
              <label htmlFor="contactName" className="sr-only">Name</label>
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                name="name"
                type="text"
                placeholder="Name" minLength="2" />
            </div>
            <div className="form-field">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
                placeholder="Email"  />
            </div>
            <div className="form-field">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" placeholder="Message" rows="5" cols="5"></textarea>
            </div>
            <div className="form-field">
              <input className="submitform" name="submit" type="submit" value="Send" />
              <div id="submit-loader">
                <div className="text-loader">Sending...</div>
                <div className="s-loader">
                  <div className="bounce1"></div>
                  <div className="bounce2"></div>
                  <div className="bounce3"></div>
                </div>
              </div>
            </div>
            <Modal visible={this.state.showModal}>
              <p>
                Thank you for reaching out. I will get back to you as soon as
                possible.
              </p>
              <button onClick={this.closeModal}>Okay</button>
            </Modal>
          </Form>
        </div>
      </Section>
    )
  }
}

export default Contacts