import React from 'react'
import PropTypes from 'prop-types'

import NavBar from './nav-bar'
import Footer from './footer'

import './layout.css'

const Layout = ({ children }) => (
  <>
    <nav className="nav-container">
      <NavBar />
    </nav>
    {children}
    <footer className="footer-container">
      <Footer />
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
