import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import '../css/common.css'

export default function Disclaimer({ data }) {
  const { websiteName, companyName, websiteURL, email } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Disclaimer" />
    <div className="disclaimer-section">
      <h1>Disclaimer for {companyName}</h1>
      <p>
        If you require any more information or have any questions about our
        site's disclaimer, please feel free to contact us by email at {email}.
      </p>
      <h2>Disclaimers for {companyName}</h2>
      <p>
        All the information on this website is published in good faith and for
        general information purpose only. {websiteName} does not make any
        warranties about the completeness, reliability and accuracy of this
        information. Any action you take upon the information you find on this
        website ({websiteURL}), is strictly at your own risk. will not be liable
        for any losses and/or damages in connection with the use of our website.
      </p>
      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>
      <h2>Update</h2>
      <p>
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </p>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        websiteName
        companyName
        websiteURL
        email
      }
    }
  }
`
