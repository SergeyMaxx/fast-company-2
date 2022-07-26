import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth'

const CardAvatar = ({user}) => {
  const {currentUser} = useAuth()
  const history = useHistory()
  const handleClick = () => {
    history.push(history.location.pathname + '/edit')
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        {currentUser._id === user._id &&
          <button
            onClick={handleClick}
            className="position-absolute top-0 end-0 btn btn-light btn-sm">
            <i className="bi bi-gear"/>
          </button>}

        <div className="d-flex flex-column align-items-center text-center position-relative">
          <img
            src={user.image}
            className="rounded-circle shadow-1-strong me-3"
            alt="avatar"
            width="150"
            height="150"
          />
          <div className="mt-3">
            <h4>{user.name}</h4>
            <div className="text-muted">
              <i className="bi bi-caret-down-fill text-primary" role="button"/>
              <i className="bi bi-caret-up text-secondary" role=" button"/>
              <span className="ms-2">{user.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CardAvatar.propTypes = {
  user: PropTypes.object
}

export default CardAvatar