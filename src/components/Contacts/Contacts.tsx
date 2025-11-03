import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Fade } from 'react-awesome-reveal';
import './Contacts.scss';

// Helper to encode form data for Netlify
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const Contacts: React.FC = () => {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modal, setModal] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'message') setMessage(value);
  };

  const handleSuccess = (success: boolean) => {
    setStatus(success);
    setModal(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setModal(false), 5000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { 'form-name': 'contact', name, email, message };
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
      .then(() => handleSuccess(true))
      .catch(() => handleSuccess(false));
  };

  return (
    <div className='contact-form'>
      <form
        name='contact'
        onSubmit={handleSubmit}
        data-netlify='true'
        data-netlify-honeypot='bot'
        onClick={() => setModal(false)}
      >
        <input type='hidden' name='form-name' value='contact' aria-label='form-name' />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name='bot' aria-label='bot' onChange={handleChange} />
          </label>
        </p>
        <Fade triggerOnce direction='up'>
          <p className='form-field'>
            <label>
              <span>Name</span>
            </label>
            <input
              value={name}
              onChange={handleChange}
              aria-label='Name'
              required
              name='name'
              type='text'
              placeholder='Name'
              minLength={2}
            />
          </p>
          <p className='form-field'>
            <label>
              <span>Email</span>
            </label>
            <input
              name='email'
              type='email'
              value={email}
              onChange={handleChange}
              aria-label='Email'
              required
              placeholder='Email'
            />
          </p>
          <p className='form-field'>
            <label>
              <span>Message</span>
            </label>
            <textarea
              name='message'
              placeholder='Message'
              aria-label='Message'
              value={message}
              onChange={handleChange}
              required
              rows={5}
              cols={5}
            />
          </p>
          <p className='form-field'>
            <button className='submitform' type='submit'>
              Send
            </button>
          </p>
        </Fade>
        <dialog className='contact-dialog' data-status={status} open={modal}>
          <p>
            {status
              ? 'Thank you for reaching out. I will get back to you as soon as possible.'
              : 'Ops. Something went wrong. Please try again'}
          </p>
        </dialog>
      </form>
    </div>
  );
};

export default Contacts;
export { Contacts };
