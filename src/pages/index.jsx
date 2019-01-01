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

export default () => (
  <Fragment>
    <SEO
      title="Home"
      keywords={[
        'search pin code',
        'search post office',
        'find pin code',
        'find post office',
      ]}
    />
    <nav className="nav-container">
      <NavBar />
    </nav>
    <main className="main">
      <header className="header-container">
        <Header />
      </header>
      <section className="app-container">
        <Tabs>
          <TabList>
            <Tab>Pin Code</Tab>
            <Tab>Post Office</Tab>
          </TabList>
          <TabPanel>
            <section className="pin-code-form-container">
              <PinCodeForm />
            </section>
          </TabPanel>
          <TabPanel>
            <section className="post-office-form-container">
              <PostOfficeForm />
            </section>
          </TabPanel>
        </Tabs>
      </section>
      <section className="table-container">
        <Table />
      </section>
    </main>
  </Fragment>
)
