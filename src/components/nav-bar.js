import React from 'react'
import { Link } from 'gatsby'

import './nav-bar.css'

export default function NavBar() {
  return (
    <nav className="app-nav">
      <ul>
        {[
          { to: '/privacy-policy/', linkText: 'Privacy Policy' },
          { to: '/contact-us/', linkText: 'Contact Us' },
        ].map(({ to, linkText }) => (
          <li key={to}>
            <Link to={to}>{linkText}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
