import React from 'react'
import { contactText } from '../constants'

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact_inner">
        <h2 className="contact_title">
          contact
        </h2>
        <div className="contact_line" aria-hidden="true">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="contact_text">
        <div className="text">
          {
            contactText.map((contact, key) => (
              <div key={key}>
                <a href={contact.link} rel="noreferrer noopener">{contact.title}</a>
              </div>
            ))
          }
           </div>
        </div>
        <div className="contact_line" aria-hidden="true">
          <span className="line bottom"></span>
          <span className="line bottom"></span>
          <span className="line bottom"></span>
          <span className="line bottom"></span>
          <span className="line bottom"></span>
          <span className="line bottom"></span>
          <span className="line bottom"></span>
        </div>
      </div>
    </section>
  )
}

export default Contact