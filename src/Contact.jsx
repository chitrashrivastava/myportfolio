import React, { useState } from 'react';
import {toast} from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
axios.defaults.withCredentials=true
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://folio-backend-one.vercel.app/api/submit-form', {
        ...formData,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.data;
  
      if (data.success) {
        console.log('Form data submitted successfully!');
        setFormData({
            name: '',
            email: '',
            message: '',
          });
        toast.success('Thanks, I will reply asap', {
            position: toast.POSITION.TOP_CENTER,
            style: {
                fontSize: '16px',
              },
              progressBarStyle: {
                background: 'blue',
              },
          });
    
        

      } else {
        toast.error('There is an error.', {
            position: toast.POSITION.TOP_CENTER,
          });
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Server error:', error);
      toast.error('Server error. Please try again later.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="contact" id="contact">

<h1 className="heading" style={{ wordSpacing: '10px' }}>Let's <span>Collab</span></h1>


<div className="icons-container">

  <div className="icons">
  <FontAwesomeIcon icon={faEnvelope} className='i' />
    <h3>my email</h3>
    <p>
      <a href="mailto:chitrashrivastava64@gmail.com">
        Click here to mail
      </a>
    </p>
  </div>

  <div className="icons">
  <FontAwesomeIcon icon={faPhone} className='i'/>
    <h3>my number</h3>
    <p>
      <a href="https://wa.me/7225884673">
        7225884673
      </a>
    </p>
  </div>

  <div className="icons">
  <FontAwesomeIcon icon={faMapMarkerAlt} className='i'/>

    <h3>my address</h3>
    <p>Vidisha(M.P)</p>
  </div>

</div>

<div className="row">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29266.736885739258!2d77.79450309461777!3d23.52019469497302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c04502a3166f5%3A0x7da6896331548213!2sVidisha%2C%20Madhya%20Pradesh%20464001!5e0!3m2!1sen!2sin!4v1710835651906!5m2!1sen!2sin"
    width="1250"
    height="200"
    style={{ border: '0' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps Iframe"
  ></iframe>
</div>

</section>
<section>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
    </>
   
  );
};

export default ContactForm;