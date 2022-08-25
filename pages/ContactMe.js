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
        <h3>Matthew Geyer</h3>
        <h1 className="contact-title">Let's Make Something!</h1>
      </div>

      <div className="contact-container">
        <div className="contact-notes">
          <p>I love working with creative, brilliant people</p>
          <p>on projects of all sizes. Lets get in touch!</p>

          <li className="reach-methods">
            Email me at
            <a
              className="email-link"
              href="mailto:matt.a.geyer@gmail.com"
              target="_blank"
            >
              : matt.a.geyer@gmail.com
            </a>
          </li>
        </div>

        <div className="form-container">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
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
            <textarea
              className="input-message"
              name="message"
              placeholder="Write Your Message Here!"
            />
            <br />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <style jsx>{`
        html {
          background-color: #febebe;
        }

        .contact-container {
          display: flex;
          justify-content: space-evenly;
          width: 950px;
          margin-right: auto;
          margin-left: auto;
          margin-top: 150px;
        }

        .res-header {
          margin-bottom: 20px;
        }
        .contact-notes {
          margin-right: auto;
          margin-left: auto;
          text-align: center;
          width: 350px;
          border-radius: 25px;
          position: relative;
          bottom: 10px;
        }

        .contact-heading {
          text-align: center;
          margin-top: 100px;
        }

        .contact-title {
          font-size: 40px;
          text-decoration: overline;
        }

        .contact-notes {
          text-align: left;
        }

        .reach-methods {
          list-style: none;
        }

        .email-link {
          color: black;
          text-decoration: none;
          font-style: italic;
        }

        .contactForm {
          width: 500px;
        }

        .input {
          width: 200px;
          height: 30px;
          border: none;
          background: transparent;
          resize: none;
          outline: none;
          border-bottom: 1px solid black;
        }
        .input-message {
          width: 406px;
          height: 30px;
          border: none;
          background: transparent;
          resize: none;
          outline: none;
          border-bottom: 1px solid black;
        }

        .contact-title {
          text-align: center;
          margin-right: auto;
          margin-left: auto;
          width: 500px;
          color: black;
        }

        .submit {
          width: 100px;
          color: white;
          padding: 10px;
          border: none;
          background-color: black;
          font-weight: bold;
          font-size: 15px;
          border-radius: 25px;
          margin-top: 20px;
          margin-bottom: 100px;
          cursor: pointer;
          position: relative;
          left: 148px;
        }

        .submit:hover {
          color: black;
          background: white;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;
        }

        @media only screen and (max-width: 414px) {
          .contact-wrapper {
            width: 414px;
            margin-left: auto;
            margin-right: auto;
          }

          .contact-container {
            display: block;
            width: 350px;
            margin-top: 80px;
          }

          .contact-notes {
            width: 330px;
          }

          .contact-heading {
            text-align: center;
            width: 414px;
          }

          .contact-title {
            text-align: center;
            width: 414px;
            font-size: 40px;
          }

          .form-container {
            margin-top: 50px;
            width: 350px;
          }

          .contactForm {
            width: 350px;
            display: block;
          }

          .input {
            width: 170px;
          }
          .input-message {
            width: 345px;
          }

          .submit {
            position: relative;
            left: 127px;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactMe
