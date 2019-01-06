import React, { Component } from 'react'

import InputSubmit from '../elements/input-submit'
import Select from 'react-select'

import './pincode-form.css'

import STATES from '../data/states'
import PINCODE_DETAILS from '../data/pincode-details'

export default class PinCodeForm extends Component {
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
    cities: [],
  }

  handleStateChange = selectedOption => {
    const cities = PINCODE_DETAILS()
      .filter(detail => detail.s === selectedOption)
      .map(detail => detail.d)
    this.setState(prevState => {
      return {
        ...prevState,
        ...{
          city: { ...prevState.city, isDisabled: false },
          state: { ...prevState.state, name: selectedOption },
          cities: cities,
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
    this.props.onSubmit(this.state.state, this.state.city)
  }

  render() {
    const options = STATES.map(state => {
      return { value: state, label: state.replace(/_/g, ' ') }
    })

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
        <InputSubmit value="Search" disabled={this.state.search.isDisabled} />
      </form>
    )
  }
}
