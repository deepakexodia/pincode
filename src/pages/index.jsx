import React, { Fragment } from 'react'

import NavBar from '../components/nav-bar'
import Header from '../components/header'
import PinCodeForm from '../components/pincode-form'
import PostOfficeForm from '../components/post-office-form'
import Footer from '../components/footer'
import Table from '../elements/table'
import SEO from '../components/seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Loader } from 'react-overlay-loader'
import Layout from "../components/layout"

import 'react-overlay-loader/styles.css'
import 'react-tabs/style/react-tabs.css'
import '../css/index.css'

export default class extends React.Component {
  state = {
    pincodeDetails: {
      headers: [],
      data: [],
    },
    postOfficeDetails: {
      headers: [],
      data: [],
    },
    isLoading: false,
  }

  searchPincodeDetails = (state, city) => {
    this.setState({ isLoading: true })
    fetch(
      `/.netlify/functions/pincode?state=${state.replace(
        / /g,
        '+'
      )}&city=${city.replace(/ /g, '+')}`
    )
      .then(response => response.json())
      .then(jsonArr => {
        this.setState({
          pincodeDetails: {
            headers: [
              'Locality',
              'Post Office',
              'Pin Code',
              'Sub-District',
              'District',
              'State',
            ],
            data: jsonArr.map(obj => [
              obj.l,
              obj.o,
              obj.p,
              obj.t,
              obj.d,
              obj.s,
            ]),
          },
          isLoading: false,
        })
      })
  }

  searchPostOfficeDetails = pincode => {
    this.setState({ isLoading: true })
    fetch(`/.netlify/functions/postoffice?pincode=${pincode}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          postOfficeDetails: {
            headers: ['Post Office', 'Pincode', 'Taluk', 'District', 'State'],
            data: json.map(obj => [
              obj.office_name,
              obj.pincode,
              obj.taluk,
              obj.district,
              obj.state_name,
            ]),
          },
          isLoading: false,
        })
      })
  }

  render() {
    return (
      <Layout>
          <SEO
            title="Home"
            keywords={[
              'search pin code',
              'search post office',
              'find pin code',
              'find post office',
              'get pin code',
              'get post office',
            ]}
          />
          <main className="main">
            <header className="header-container">
              <Header />
            </header>
            <section className="app-container">
              <Tabs>
                <TabList className="tabs">
                  <Tab>Pin Code</Tab>
                  <Tab>Post Office</Tab>
                </TabList>
                <TabPanel className="tab-panel">
                  <section className="pin-code-form-container">
                    <PinCodeForm onSubmit={this.searchPincodeDetails} />
                  </section>
                  <section className="table-container">
                    {this.state.pincodeDetails.headers.length ? (
                      <Table
                        headers={this.state.pincodeDetails.headers}
                        data={this.state.pincodeDetails.data}
                      />
                    ) : null}
                  </section>
                </TabPanel>
                <TabPanel className="tab-panel">
                  <section className="post-office-form-container">
                    <PostOfficeForm onSubmit={this.searchPostOfficeDetails} />
                  </section>
                  <section className="table-container">
                    {this.state.postOfficeDetails.headers.length ? (
                      <Table
                        headers={this.state.postOfficeDetails.headers}
                        data={this.state.postOfficeDetails.data}
                      />
                    ) : null}
                  </section>
                </TabPanel>
              </Tabs>
            </section>
          </main>
          <footer className="footer-container">

          <Footer />
          </footer>
          <Loader fullPage loading={this.state.isLoading} />
      </Layout>
    )
  }
}
