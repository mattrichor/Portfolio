import React from 'react'

import { Link } from 'react-router-dom'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactMe(props) {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_h2i3ptm',
        'template_wxkmqqd',
        form.current,
        '7Xn5R9G8NyWZbhkLI'
      )
      .then(
        (result) => {
          e.target.reset()
          alert('Message Sent!')
          console.log(result.text)
          console.log('message sent')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contact-wrapper">
      <header className="res-header"></header>
      <div className="contact-heading">
        <h3>
          <a
            className="email-link"
            href="mailto:matt.a.geyer@gmail.com"
            target="_blank"
          >
            matt.a.geyer@gmail.com
          </a>
        </h3>
        <h1 className="contact-title">Let's Make Something!</h1>
      </div>

      <div className="contact-container">
        <div className="contact-notes">
          I love nothing more than working with creative, brilliant people on
          projects of all sizes.
          <br /> Lets get in touch!
          <li className="reach-methods"></li>
        </div>

        <div className="form-container">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <div className="grid-top">
              <input
                className="input"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
            <div className="grid-bottom">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <input
                className="input"
                type="tel"
                name="tel"
                placeholder="Phone Number"
              />
            </div>
            <div className="message-box">
              <textarea
                className="input-message"
                name="message"
                placeholder="Write Your Message Here!"
              />
            </div>
            <div className="submit-btn">
              <input className="submit" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <style jsx>{``}</style>
    </div>
  )
}

export default ContactMe
