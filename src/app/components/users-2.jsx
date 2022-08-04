import React, {useEffect, useState} from 'react'
import Pagination from './pagination'
import {paginate} from '../utils/paginate'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'
import UsersTable from './usersTable'
import _ from 'lodash'

const Users2 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState(null)
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({iter: 'name', order: 'asc'})

  const pageSize = 8

  const [users, setUsers] = useState(null)

  useEffect(() => {
    api.fetchAllUsers().then(data => setUsers(data))
  }, [])

  const handleDelete = userId => {
    setUsers(users.filter(user => user._id !== userId))
  }

  const handleToggleBookMark = id => {
    setUsers(users.map(user => {
        if (user._id === id) {
          return {
            ...user,
            bookmark: !user.bookmark
          }
        }
        return user
      })
    )
  }

  useEffect(() => {
    api.fetchAllProfessions().then(data => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionSelect = item => setSelectedProf(item)
  const handlePageChange = pageIndex => setCurrentPage(pageIndex)
  const handleSort = item => setSortBy(item)

  if (users) {
    const filteredUser = selectedProf
      ? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
      : users

    const count = filteredUser.length
    const sortedUser = _.orderBy(filteredUser, [sortBy.path], [sortBy.order])
    const userCrop = paginate(sortedUser, currentPage, pageSize)

    const clearFilter = () => setSelectedProf(null)

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              selectedItem={selectedProf}
              items={professions}
              onItemSelect={handleProfessionSelect}
            />
            <button className="btn  btn-secondary mt-2" onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count}/>
          {count > 0 && (
            <UsersTable
              users={userCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  }
  return 'loading...'
}

Users2.propTypes = {
  users: PropTypes.array
}

export default Users2