import React, {useEffect, useState} from 'react'
import User from './user'
import Pagination from './pagination'
import {paginate} from '../utils/paginate'
import PropTypes from 'prop-types'
import GroupList from './groupList'
import api from '../api'
import SearchStatus from './searchStatus'

const Users2 = ({users, ...rest}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()

  const pageSize = 2

  useEffect(() => {
    api.fetchAllProfessions().then(data => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionSelect = item => setSelectedProf(item)
  const handlePageChange = pageIndex => setCurrentPage(pageIndex)

  const filteredUser = selectedProf
    ? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
    : users

  const count = filteredUser.length
  const userCrop = paginate(filteredUser, currentPage, pageSize)

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
          <table className="table">
            <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th/>
            </tr>
            </thead>
            <tbody>
            {userCrop.map(user => <User key={user._id} {...rest} {...user}/>)}
            </tbody>
          </table>
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

Users2.propTypes = {
  users: PropTypes.array
}

export default Users2