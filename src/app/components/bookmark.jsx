import React from 'react'
import PropTypes from 'prop-types'



const Bookmark = ({status, ...rest}) => { // ({status,  onToggleBookMark, id}) or ({status, onClick})
  return (
    <button {...rest}> {/*<button onClick={() => onToggleBookMark(_id)} or <button onClick={onClick}>  */}
      <i className={'bi bi-bookmark' + (status ? '-fill' : '')}/>
    </button>
  )
}

Bookmark.propTypes = {
  status: PropTypes.bool
}

export default Bookmark