import React, { Component } from 'react'
import InputSubmit from '../elements/input-submit'
import Layout from "../components/layout"
import '../css/common.css'
import '../css/contact-us.css'
import Axios from 'axios'


export default class ContactUs extends Component {
  initState = {
    email: '',
    message: '',
    isSubmitDisabled: true,
  }
  state = this.initState

  handleChange = event => {
    const { name, value } = event.target
    if (name === 'message')
      if (value !== '')
        this.setState({ [name]: value, isSubmitDisabled: false })
      else this.setState({ [name]: value, isSubmitDisabled: true })
    else this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    Axios.post('https://formspree.io/deepakexodia@gmail.com', {
      email: this.state.email,
      message: this.state.message,
    }).then(response => this.setState(this.initState))
  }

  render() {
    return (
      <Layout>
      <div className="contact-us-section">
        <h1>Contact us</h1>
        <form
          onSubmit={this.handleSubmit}
          // method="POST"
          // action="https://formspree.io/deepakexodia@gmail.com"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <InputSubmit value="Send" disabled={this.state.isSubmitDisabled} />
        </form>
      </div>
      </Layout>
    )
  }
}
