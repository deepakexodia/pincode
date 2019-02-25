var proxy = require('http-proxy-middleware')
const siteUrl = `https://mypincode.netlify.com`;

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
    siteUrl: siteUrl,
    title: `Search Pincode`,
    description: `Search pincodes in a very fast, intuitive and easy
    manner.`,
    author: `Deepak Singh`,
    websiteName: 'My Pincode',
    companyName: 'My Pincode',
    websiteURL: 'https://mypincode.netlify.com',
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
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: siteUrl+'/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow:['/about-us','/disclaimer','/privacy-policy'] }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
