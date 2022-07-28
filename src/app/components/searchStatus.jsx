import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({length}) => {
  const renderPhrase = number => {
    return number > 1 && number < 5 ? 'человека тусанут' : 'человек тусанёт'
  }

  return (
    <h2>
      <span className={'badge bg-' + (length > 0 ? 'primary' : 'danger')}>
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой сегодня`
          : 'Никто с тобой не тусанёт'}
      </span>
    </h2>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number
}

export default SearchStatus