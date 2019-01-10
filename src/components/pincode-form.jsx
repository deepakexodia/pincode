import React, { Component } from 'react'

import InputSubmit from '../elements/input-submit'
import Select from 'react-select'

import './pincode-form.css'

import STATES from '../data/states'
import cities from "../data/cities"

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
    this.setState(prevState => {
      return {
        ...prevState,
        ...{
          city: { ...prevState.city, isDisabled: false },
          state: { ...prevState.state, name: selectedOption},
          cities: cities().filter(value=>value.s===selectedOption.label).map(value=>value.d),
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
    this.props.onSubmit(this.state.state.name.label, this.state.city.name.label)
  }

  render() {
    const states = STATES.map(state => {
      return { value: state, label: state.replace(/_/g, ' ') }
    })

    const cities = this.state.cities.map(city=>{
      return {value: city, label: city}
    })

    return (
      <form onSubmit={this.handleSubmit}>
        <label>State:</label>
        <Select
          className="select"
          isDisabled={this.state.state.isDisabled}
          value={this.state.state.name}
          onChange={this.handleStateChange}
          options={states}
        />
        <label>City:</label>
        <Select
          className="select"
          isDisabled={this.state.city.isDisabled}
          value={this.state.city.name}
          onChange={this.handleCityChange}
          options={cities}
        />
        <InputSubmit value="Search" disabled={this.state.search.isDisabled} />
      </form>
    )
  }
}
