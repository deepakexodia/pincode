import React, { Component } from 'react'

import InputSubmit from '../elements/input-submit'

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
    if (val.match(/\D/g) === null) {
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
  }

  handleSubmit = event => {
    event.preventDefault()
    this.state.search.isDisabled || this.props.onSubmit(this.state.input.value)
  }

  render = () => {
    return (
      <form className="post-office-form" onSubmit={this.handleSubmit}>
        <div className="post-office-form__input">
          <label className="input__label">Pincode:</label>
          <input
            className="input__field"
            type="text"
            maxLength="6"
            value={this.state.input.value}
            onChange={this.handleChange}
          />
        </div>
        <InputSubmit
          className="search-btn"
          value="Search"
          disabled={this.state.search.isDisabled}
        />
      </form>
    )
  }
}
