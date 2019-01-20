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
import Layout from '../components/layout'
import Modal from 'react-awesome-modal'

import 'react-overlay-loader/styles.css'
import 'react-tabs/style/react-tabs.css'
import '../css/index.css'

export default class extends React.Component {
  state = {
    pincodeDetails: {
      status: '',
      headers: [],
      data: [],
    },
    postOfficeDetails: {
      status: '',
      headers: [],
      data: [],
    },
    isLoading: false,
    modal: {
      visible: false,
      title: '',
      content: '',
    },
  }

  searchPincodeDetails = (state, city) => {
    this.setState({ isLoading: true })
    fetch(
      `/.netlify/functions/pincode?state=${state.replace(
        / /g,
        '+'
      )}&city=${city.replace(/ /g, '+')}`
    )
      .then(resp => {
        const { status } = resp
        // if (status == 200) {
          return resp.json()
        // }
        throw status
      })
      .then(jsonArr => {
        this.setState({
          pincodeDetails: {
            status: 'FOUND',
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
      .catch(err => {
        this.setState({
          pincodeDetails: {
            status: 'SERVER_ISSUE',
            headers: [],
            data: [],
          },
          isLoading: false,
          modal: {
            visible: true,
            title: 'Error',
            content:
              'Seems there is an issue at our end. Please try again after some time',
          },
        })
      })
  }

  searchPostOfficeDetails = pincode => {
    this.setState({ isLoading: true })
    fetch(`/.netlify/functions/postoffice?pincode=${pincode}`)
      .then(resp => {
        const { status } = resp
        if (status == 200) {
          return resp.json()
        }
        throw status
      })
      .then(json => {
        this.setState({
          postOfficeDetails: {
            status: 'FOUND',
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
      .catch(err => {
        if (err == 404) {
          this.setState({
            postOfficeDetails: {
              status: 'NOT_FOUND',
              headers: [],
              data: [],
            },
            isLoading: false,
            modal: {
              visible: true,
              title: 'Error',
              content:
                'Postoffice details for the searched pincode are not found. Please check if the pincode is correct',
            },
          })
        } else {
          this.setState({
            postOfficeDetails: {
              status: 'SERVER_ISSUE',
              headers: [],
              data: [],
            },
            isLoading: false,
            modal: {
              visible: true,
              title: 'Error',
              content:
                'Seems there is an issue at our end. Please try again after some time',
            },
          })
        }
      })
  }

  closeModal = () => {
    this.setState(prevState => {
      return {
        modal: {
          ...prevState.modal,
          visible: false,
        },
      }
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
        <Modal
          visible={this.state.modal.visible}
          width="250px"
          height="200px"
          effect="fadeInUp"
          onClickAway={this.closeModal}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            <h1>{this.state.modal.title}</h1>
            <p>{this.state.modal.content}</p>
          </div>
        </Modal>
      </Layout>
    )
  }
}
