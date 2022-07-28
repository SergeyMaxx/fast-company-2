import React from 'react'
import PropTypes from 'prop-types'


const Qualities = ({_id, name, color}) => {
  return (
    <span className={'badge m-1 bg-' + color} key={_id}>
      {name}
    </span>
  )
}

Qualities.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Qualities