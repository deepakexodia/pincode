var proxy = require('http-proxy-middleware')

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  // developMiddleware: app => {
  //   app.use(
  //     '/.netlify/functions/',
  //     proxy({
  //       target: 'http://localhost:9000',
  //       pathRewrite: {
  //         '/.netlify/functions/': '',
  //       },
  //     })
  //   )
  // },
  siteMetadata: {
    title: `Search Pincode`,
    description: `Search pincodes in a very fast, intuitive and easy
    manner.`,
    author: `Deepak Singh`,
    websiteName: 'My Pincode',
    companyName: 'My Pincode',
    websiteURL: 'mypincode.netlify.com',
    email: 'deepakexodia@gmail.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
