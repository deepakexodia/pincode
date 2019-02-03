import React from 'react'
import { Link } from 'gatsby'
import './footer.css'

export default function Footer() {
  return (
    <ul className="footer">
      <li>
        <Link to="about-us">About us</Link>
      </li>
      <li>
        <Link to="disclaimer">Disclaimer</Link>
      </li>
      <li>
        <Link to="privacy-policy">Privacy Policy</Link>
      </li>
      <li>
        <Link to="contact-us">Contact us</Link>
      </li>
    </ul>
  )
}
