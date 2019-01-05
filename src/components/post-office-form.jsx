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
    this.props.onSubmit(this.state.input.value)
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
