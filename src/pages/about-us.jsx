import React from 'react'
import '../css/common.css'

export default function AboutUs({ data }) {
  const { websiteURL } = data.site.siteMetadata
  return (
    <div className="about-us-section">
      <h1>About us</h1>
      <p>
        The site {websiteURL} is an effort to provide reliable and accurate
        information on all India Postal PIN codes in a very intuitive and easy
        manner.
      </p>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        websiteURL
      }
    }
  }
`
