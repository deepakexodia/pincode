import React from 'react'

import Layout from "../components/layout"
import SEO from '../components/seo'
import '../css/common.css'

export default function AboutUs({ data }) {
  const { websiteURL } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="About us" />
      <div className="about-us-section">
      <h1>About us</h1>
      <p>
        The site {websiteURL} is an effort to provide reliable and accurate
        information on all India pincodes in a very intuitive and easy
        manner.
      </p>
      </div>
    </Layout>
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
