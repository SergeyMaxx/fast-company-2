import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import api from '../../../api'
import {useHistory} from 'react-router-dom'
import QualitiesList from '../../UI/qualities'

const UserPage = ({userId}) => {
  const history = useHistory()
  const [user, setUser] = useState(null)

  useEffect(() => {
    api.users.getById(userId).then(data => setUser(data))
  }, [])

  const handleClick = () => {
    history.push(history.location.pathname + "/edit")
  }

  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h1>Profession: {user.profession.name}</h1>
        <QualitiesList qualities={user.qualities}/>
        <p>completedMeetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button onClick={handleClick}>Change</button>
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