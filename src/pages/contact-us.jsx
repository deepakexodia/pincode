import React from 'react'

export default function ContactUs() {
  return (
    <div>
      <h1>Contact us</h1>
      <form method="POST" action="https://formspree.io/deepakexodia@gmail.com">
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Test Message" />
        <button type="submit">Send Test</button>
      </form>
    </div>
  )
}
