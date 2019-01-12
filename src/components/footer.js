import React from 'react'

import './footer.css'

export default function Footer() {
  return (
      <ul className="footer">
        {["About us", "Disclaimer", "Privacy Policy", "Contact us"].map(item => (
          <li key={item}><a href="#">{item}</a></li>
        ))}
      </ul>
  )
}
