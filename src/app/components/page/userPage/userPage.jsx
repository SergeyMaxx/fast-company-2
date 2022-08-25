import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import CardAvatar from '../../UI/cardAvatar'
import CardQualities from '../../UI/cardQualities'
import CardCompletedMeetings from '../../UI/cardCompletedMeetings'
import Comments from '../../UI/qualities/comments'

const UserPage = ({userId}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    api.users.getById(userId).then(data => setUser(data))
  }, [])

  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <CardAvatar user={user}/>
            <CardQualities qualities={user.qualities}/>
            <CardCompletedMeetings completedMeetings={user.completedMeetings}/>
          </div>
          <div className=" col-md-8">
            <Comments/>
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserPage