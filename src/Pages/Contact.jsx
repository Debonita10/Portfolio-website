import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import '../Styles/Contact.css';

const Contact = () => {
  return (
   < >
   <div className='contact-container'>
<div className='map-card'>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3860.3366408248935!2d85.33892428456832!3d23.397237437750224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731838119261!5m2!1sen!2sin"
 width="100%"
 height="450" 
 style={{border:0} }
 allowfullscreen="" 
 loading="lazy" 
 referrerpolicy="no-referrer-when-downgrade">
 </iframe>
 </div>
 <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xgvezvdy"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
        <div className='contact-me'>
        <h2>Contact Me</h2>
        <p>Feel free to reach out through the following platforms:</p>
       
<div className='con-links'>
<a
          href="https://github.com/Debonita10"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/debonita-dey-243601208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:your-deydebonita10@gmail.com"
          className="contact-link"
        >
          <MdMarkEmailRead />
        </a>

</div>

      </div>
      </div>

    </div>
    </>
  )
}

export default Contact