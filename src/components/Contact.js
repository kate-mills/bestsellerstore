import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Hilary wants to hear from you!</h3>
        <div className="content">
          <p>
            Leave your information and Hilary will get back to you as soon as
            she can. Thank you!
          </p>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            className="contact-form"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-input"
              placeholder="Your Phone"
            />
            <textarea
              name="message"
              id="message"
              rows="7"
              className="form-input"
              placeholder="Hello there..."
              required
            />
            <button type="submit" className="submit-btn">
              send
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    margin: 0 auto;
    max-width: 500px;
    display: grid;
    grid-template-columns: auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    display: block;
    margin-bottom: 10px;
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    margin-top: 10px;
  }
  .form-input::placeholder {
    color: var(--clr-black);
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
