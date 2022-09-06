import React from 'react'
import PropTypes from 'prop-types'
import CardAvatar from '../../UI/cardAvatar'
import CardQualities from '../../UI/cardQualities'
import CardCompletedMeetings from '../../UI/cardCompletedMeetings'
import Comments from '../../UI/comments'
import {useUser} from '../../../hooks/useUsers'
import {CommentsProvider} from '../../../hooks/useComments'

const UserPage = ({userId}) => {
  const {getUserById} = useUser()
  const user = getUserById(userId)

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
            <CommentsProvider>
              <Comments/>
            </CommentsProvider>
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