import React from 'react'

import './input-submit.css'

export default function InputSubmit({ className, value, disabled = false }) {
  return (
    <input
      className={`${className} btn-search ${
        disabled ? 'is-disabled' : ''
      }`.trim()}
      type="submit"
      value={value}
    />
  )
}
