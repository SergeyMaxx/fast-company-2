import React, {useEffect, useState} from 'react'
import Users2 from './components/users-2'
import api from './api'

function App() {
  const [users, setUsers] = useState()

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

  return (
    <div>
      {users && <Users2
        onDelete={handleDelete}
        onToggleBookMark={handleToggleBookMark}
        users={users}
      />}
    </div>
  )
}

export default App