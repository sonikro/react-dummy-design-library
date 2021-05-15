import React from 'react'
import PropTypes from 'prop-types'

export const Alert = ({ message }) => {
  return <div>{message}</div>
}

Alert.propTypes = {
  message: PropTypes.string
}
