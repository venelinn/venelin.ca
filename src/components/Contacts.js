import React, { useState } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import './Contacts.scss';

const Form = styled.form`
  &::before {
    content: '';
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`;

const Modal = styled.div`
  background: #f1f1f1;
  color: ${props => (props.status ? 'green' : 'red')};
  padding: 2em;
  border-radius: 2px;
  transition: 0.2s all;
  text-align: center;
  margin-top: 2rem;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contacts = props => {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);

  const handleSubmit = e => {
    const data = { 'form-name': 'contact', name, email, message };
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data)
    })
      .then(handleSuccess(true))
      .catch(error => handleSuccess(false));

    e.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    if (name === 'message') {
      return setMessage(value);
    }
  };

  const handleSuccess = status => {
    setStatus(status);
    setModal(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => {
      setModal(false);
    }, 5000);
  };

  return (
    <div className='contact-form'>
      <Form
        name='contact'
        onSubmit={handleSubmit}
        data-netlify='true'
        data-netlify-honeypot='bot'
        overlay={setModal}
        onClick={() => setModal(false)}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p hidden>
          <label>
            Don’t fill this out: <input name='bot' onChange={handleChange} />
          </label>
        </p>
        <Fade bottom>
          <p className='form-field'>
            <label>
              <span>Name</span>
              <input
                value={name}
                onChange={handleChange}
                required
                name='name'
                type='text'
                placeholder='Name'
                minLength='2'
              />
            </label>
          </p>
          <p className='form-field'>
            <label>
              <span>Email</span>
              <input
                name='email'
                type='email'
                value={email}
                onChange={handleChange}
                required
                placeholder='Email'
              />
            </label>
          </p>
          <p className='form-field'>
            <label>
              <span>Message</span>
              <textarea
                name='message'
                placeholder='Message'
                value={message}
                onChange={handleChange}
                required
                rows='5'
                cols='5'
              ></textarea>
            </label>
          </p>
          <p className='form-field'>
            <button className='submitform' type='submit'>
              Send
            </button>
          </p>
        </Fade>
        <Modal visible={modal} status={status}>
          <p>
            {status
              ? 'Thank you for reaching out. I will get back to you as soon as possible.'
              : 'Ops. Something went wrong. Please try again'}
          </p>
        </Modal>
      </Form>
    </div>
  );
};

export default Contacts;
