import React from 'react'
import User from './User'

const Users = ({ user, handleRemove }) => {
  return (
          <div className='p-10 flex gap-8'>
                  {user.map((item) => (
                          <User key={item.id} user={item} handleRemove={handleRemove } />
                  ))}
    </div>
  )
}

export default Users