import React, { useState } from 'react'
import Users from './Users'
import NewUser from './NewUser'


const UserApp = () => {
  const [user, setUer] = useState([{ id: 1, name: 'Moaz' }, { id: 2, name: 'Mamun' }])

  const handleRemove = (id) => {
    const filterUsers = user.filter(user => user.id !== id)
    setUer(filterUsers)
  }

  const handleNewUser = (user) => {
    setUer(prev=> [...prev, user])
  }
  
  return (
    <div>
      <NewUser handleNewUser={handleNewUser} />
      <Users user={user} handleRemove={handleRemove} />
    </div>
  )
}

export default UserApp