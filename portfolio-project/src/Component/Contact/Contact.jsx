import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  // State for form inputs
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle change in input values (two-way binding)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("message", formValues.message);
    formData.append("access_key", "7d675745-0225-4744-85db-c27e4bc1cb1f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      console.log("Success", res);

      // Clear form fields after successful submission
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I am Currently Available to take new Projects</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>bilal.afsarpk55@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>966509813368</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Buradih Al Qassim Saudi Arabia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name </label>
          <input
            type="text"
            placeholder='Enter Your Name'
            name='name'
            value={formValues.name} // Two-way binding: binds input to state
            onChange={handleInputChange} // Updates state on input change
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder='Enter Your Email'
            name='email'
            value={formValues.email} // Two-way binding
            onChange={handleInputChange} // Updates state on input change
            required
          />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            name="message"
            rows="10"
            placeholder='Enter Your Message'
            value={formValues.message} // Two-way binding
            onChange={handleInputChange} // Updates state on input change
            required
          ></textarea>

          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
