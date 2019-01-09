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
  }

  searchPincodeDetails = (state, city) => {
    //make API call
    console.log("searching pincode details")
    fetch(`/.netlify/functions/pincode?state=JHARKHAND&city=SOUTH+EAST+DELHI`)
    .then(response => response.json())
    .then(jsonArr => {
      jsonArr.forEach(obj => delete obj._id)
      console.log(jsonArr)
    this.setState({
      pincodeDetails: {
        headers: ['Locality', 'Post Office', 'Pin Code', 'Sub-District', 'District', 'State'],
        data: jsonArr.map( obj => [
          obj.l,
          obj.o,
          obj.p,
          obj.t,
          obj.d,
          obj.s
        ]),
      },
    })
  }
    )
  }

  searchPostOfficeDetails = pincode => {
    //make API call
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
            ]), //[[0, 1, 2, 3, 4], [0, 1, 2, 3, 4]],
          },
        })
      })
  }

  render() {
    return (
      <Fragment>
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
        <nav className="nav-container">
          <NavBar />
        </nav>
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
      </Fragment>
    )
  }
}
