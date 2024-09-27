import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div  className='contact'>
        <div className="contact-title"><h1>Get in Touch</h1>
         <img src={theme_pattern} alt="" />
         </div>
         <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>I am Currently Avaliable to take new Project</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><>bilal.afsarpk55@gmail.com</>

                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>966509813368</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Buradih Al Qassim Saudi Arabia</p>
                    </div>

                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your Name </label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name= 'email' />
                <label htmlFor="Write Your Message Here "></label>
                <textarea name=""  rows="10" placeholder='Enter Your Message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
         </div>
    </div>
  )
}

export default Contact