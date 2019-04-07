import React from 'react'
import PropTypes from 'prop-types'

const Form = props => {
  render(
    <form name="contact" netlify>
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

const Contact = props =>  {
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

export default Contact