import React from 'react'
import Qualities from './qualities'
import Bookmark from './bookmark'

const User = ({
                _id,
                name,
                qualities,
                profession,
                completedMeetings,
                rate,
                onDelete,
                bookmark,
                onToggleBookMark
              }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map(quality => <Qualities key={quality._id} {...quality} />)}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} /5</td>
      <td>
        <Bookmark
          status={bookmark}
          onToggleBookMark={onToggleBookMark} // onClick={() => onToggleBookMark(id)
          id={_id}                            // (не нужно)
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default User