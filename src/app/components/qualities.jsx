import React from 'react'
import PropTypes from 'prop-types'


const Qualities = ({name, color}) => {
  return (
    <span className={'badge m-1 bg-' + color}>
      {name}
    </span>
  )
}

Qualities.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Qualities