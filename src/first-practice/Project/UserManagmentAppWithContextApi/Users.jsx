import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import User from './User'

const Users = () => {
  const { user = [] } = useContext(UserContext)

  return (
    <div>
      {user.length === 0 ? (
        <p>No users found.</p>
      ) : (
        user.map((user) => <User key={user.id} user={user} />)
      )}
    </div>
  )
}

export default Users