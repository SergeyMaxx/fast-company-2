import React from 'react'

const Bookmark = ({status, onToggleBookMark, id}) => { // ({status, ...rest})
  return (
    <button onClick={() => onToggleBookMark(id)}> {/* <button {...rest}>  */}
      <i className={'bi bi-bookmark' + (status ? '-fill' : '')}/>
    </button>
  )
}

export default Bookmark