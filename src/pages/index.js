import React, { Fragment } from 'react'

import NavBar from '../components/nav-bar'
import Header from '../components/header'
import PinCodeForm from '../components/pincode-form'
import PostOfficeForm from '../components/post-office-form'
import Table from '../elements/table'
import SEO from '../components/seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import '../css/index.css'

import postOffices from '../data/postoffices'

console.log(postOffices)

console.log(postOffices.map(postOffice => postOffice.State))

// const IndexPage = () => (
//   <Fragment>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Fragment>
// )

export default () => (
  <Fragment>
    <NavBar />
    <main className="main">
      <Header />
      <Tabs>
        <TabList>
          <Tab>Pin Code</Tab>
          <Tab>Post Office</Tab>
        </TabList>
        <TabPanel>
          <PinCodeForm />
        </TabPanel>
        <TabPanel>
          <PostOfficeForm />
        </TabPanel>
      </Tabs>
      <Table />
    </main>
  </Fragment>
)
