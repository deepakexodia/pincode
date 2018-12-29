import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Select from 'react-select'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import { Column, Table } from 'react-virtualized'
// import 'react-virtualized/styles.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import 'react-tabs/style/react-tabs.css'

import '../css/index.css'

import postOffices from '../data/postoffices'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

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

const NavBar = () => (
  <nav id="app-nav" className="app-nav centered">
    <ul>
      {[
        { to: '/privacy-policy/', linkText: 'Privacy Policy' },
        { to: '/contact-us/', linkText: 'Contact Us' },
      ].map(({ to, linkText }) => (
        <li key={to}>
          <Link to={to}>{linkText}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

const Header = () => (
  <header className="header">
    <h1 className="header__title">Pincode Search</h1>
    <p className="header__desc">Find your pincode or post office</p>
  </header>
)

function rowRenderer(props) {
  return <defaultTableRowRenderer {...props} />
}

class Form extends Component {
  state = {
    state: {
      name: null,
      isDisabled: false,
    },
    city: {
      name: null,
      isDisabled: true,
    },
    search: {
      isDisabled: true,
      isLoading: false,
    },
  }

  handleStateChange = selectedOption => {
    this.setState(prevState => {
      return {
        ...prevState,
        ...{
          city: { ...prevState.city, isDisabled: false },
          state: { ...prevState.state, name: selectedOption },
        },
      }
    })
  }

  handleCityChange = selectedOption => {
    this.setState(prevState => {
      return {
        ...prevState,
        ...{
          city: { ...prevState.city, name: selectedOption },
          search: { ...prevState.search, isDisabled: false },
        },
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>State:</label>
        <Select
          className="select"
          isDisabled={this.state.state.isDisabled}
          value={this.state.state.name}
          onChange={this.handleStateChange}
          options={options}
        />
        <label>City:</label>
        <Select
          className="select"
          isDisabled={this.state.city.isDisabled}
          value={this.state.city.name}
          onChange={this.handleCityChange}
          options={options}
        />
        <input
          className={`btn-search ${
            this.state.search.isDisabled ? 'is-disabled' : ''
          }`}
          type="submit"
          value="Search"
        />
      </form>
    )
  }
}
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
          <Form />
        </TabPanel>
        <TabPanel>
          <form>
            <label>State:</label>
            <Select className="select" options={options} />
            <label>City:</label>
            <Select className="select" options={options} />
            <label>Locality:</label>
            <Select className="select" options={options} />
            <input className="btn-search" type="button" value="Search" />
          </form>
        </TabPanel>
      </Tabs>
      <Table>
        <Thead>
          <Tr>
            {['Location', 'Pin Code', 'Pin Code', 'Pin Code', 'Pin Code'].map(
              header => (
                <Th key={header}>{header}</Th>
              )
            )}
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="row">
            <Td>31</Td>
            <Td>2017</Td>
            <Td>2017</Td>
            <Td>2017</Td>
            <Td>2017</Td>
          </Tr>
          <Tr className="row">
            <Td>31</Td>
            <Td>2017</Td>
            <Td>2017</Td>
            <Td>2017</Td>
            <Td>2017</Td>
          </Tr>
        </Tbody>
      </Table>
      {/* <Table
      width={400}
      height={300}
      headerHeight={20}
      rowHeight={30}
      rowCount={list.length}
      rowGetter={({ index }) => list[index]}
    >
      <Column label="Name" dataKey="name" width={100} />
      <Column label="Description" dataKey="description" width={200} />
    </Table> */}
      <section />
    </main>
  </Fragment>
)
