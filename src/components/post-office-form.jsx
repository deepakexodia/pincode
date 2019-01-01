import React, { Component } from 'react'
import Axios from 'axios'

import './post-office-form.css'

export default class PostOfficeForm extends Component {
  state = {
    input: { value: '' },
    search: {
      isDisabled: true,
      isLoading: false,
    },
  }

  handleChange = event => {
    var val = event.target.value
    // val = val.match(/d+/g)
    // val = (isNaN(val) | (val === 0)) & ''

    if (val.length === 6)
      this.setState(prevState => {
        return {
          input: { value: val },
          search: { ...prevState.search, isDisabled: false },
        }
      })
    else
      this.setState(prevState => {
        return {
          input: { value: val },
          search: { ...prevState.search, isDisabled: true },
        }
      })
  }

  handleSubmit = event => {
    event.preventDefault()
    // Axios({
    //   method: 'get',
    //   url: 'http://postalpincode.in/api/pincode/201012',
    //   headers: { 'Content-Type': 'application/json' },
    // })
    Axios({
      url: 'https://pincode.saratchandra.in/api/pincode/500022',
    })
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  }

  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Pincode:</label>
        <input
          className="pincode"
          type="text"
          maxLength="6"
          value={this.state.input.value}
          onChange={this.handleChange}
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
