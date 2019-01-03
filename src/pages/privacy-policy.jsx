import React from 'react'

export default function PrivacyPolicy({ data }) {
  const { websiteName, companyName, websiteURL, email } = data.site.siteMetadata
  return (
    <div>
      <h1>Privacy Policy for {companyName}</h1>
      <p>
        At {websiteName}, accessible at {websiteURL}, one of our main priorities
        is the privacy of our visitors. This Privacy Policy document contains
        types of information that is collected and recorded by Website Name and
        how we use it.
      </p>
      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us through email at {email}
      </p>
      <h2>Log Files</h2>
      <p>
        {websiteName} follows a standard procedure of using log files. These
        files log visitors when they visit websites. All hosting companies do
        this and a part of hosting services' analytics. The information
        collected by log files include internet protocol (IP) addresses, browser
        type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not
        linked to any information that is personally identifiable. The purpose
        of the information is for analyzing trends, administering the site,
        tracking users' movement on the website, and gathering demographic
        information.
      </p>
      <h2>Cookies and Web Beacons</h2>
      <p>
        Like any other website, {websiteName} uses 'cookies'. These cookies are
        used to store information including visitors' preferences, and the pages
        on the website that the visitor accessed or visited. The information is
        used to optimize the users' experience by customizing our web page
        content based on visitors' browser type and/or other information
      </p>
      <h2>DoubleClick DART Cookie</h2>
      <p>
        Google is one of a third-party vendor on our site. It also uses cookies,
        known as DART cookies, to serve ads to our site visitors based upon
        their visit to {websiteURL} and other sites on the internet. However,
        visitors may choose to decline the use of DART cookies by visiting the
        Google ad and content network Privacy Policy at the following URL –
        https://policies.google.com/technologies/ads.
      </p>
      <h2>Privacy Policies</h2>
      <p>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of {websiteName}.
      </p>
      <p>
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on {websiteName}, which are sent
        directly to users' browser. They automatically receive your IP address
        when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </p>
      <p>
        Note that {websiteName} has no access to or control over these cookies
        that are used by third-party advertisers.
      </p>
      <h2>Third Part Privacy Policies</h2>
      <p>
        {websiteName}'s Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.
      </p>
      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers' respective
        websites. What Are Cookies?
      </p>
      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </div>
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
