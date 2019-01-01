import React from 'react'
import { Link } from 'gatsby'

import './nav-bar.css'

export default function NavBar() {
  return (
    <ul className="app-nav">
      {[
        { to: '/privacy-policy/', linkText: 'Privacy Policy' },
        { to: '/contact-us/', linkText: 'Contact Us' },
      ].map(({ to, linkText }) => (
        <li key={to}>
          <Link to={to}>{linkText}</Link>
        </li>
      ))}
    </ul>
  )
}
