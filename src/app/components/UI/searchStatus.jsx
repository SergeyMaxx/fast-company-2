import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({length}) => {
  const renderPhrase = number => {
    return number > 1 && number < 5 ? 'person will hangs out' : 'people will hang out'
  }

  return (
    <h2>
      <span className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
        {length > 0
          ? `${length} ${renderPhrase(length)} with you today`
          : 'Nobody hangs out with you'}
      </span>
    </h2>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number
}

export default SearchStatus