import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../common/bookmark'
import QualitiesList from './qualities/qualitiesList'
import Table from '../common/table/table'
import {Link} from 'react-router-dom'
import Profession from './profession'

const UsersTable = ({users, onSort, selectedSort, onToggleBookMark}) => {
  const columns = {
    name: {
      path: 'name',
      name: 'Name',
      component: user => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    qualities: {
      name: 'Qualities',
      component: user => <QualitiesList qualities={user.qualities}/>
    },
    professions: {
      name: 'Profession',
      component: user => <Profession id={user.professions}/>
    },
    completedMeetings: {path: 'completedMeetings', name: 'Completed meetings'},
    rate: {path: 'rate', name: 'Rate'},
    bookmark: {
      path: 'bookmark',
      name: 'Bookmark',
      component: user => (
        <Bookmark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      )
    }
  }

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
}

export default UsersTable