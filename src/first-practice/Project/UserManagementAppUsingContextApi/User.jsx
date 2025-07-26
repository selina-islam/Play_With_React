import React from 'react'

const User = ({ user, handleRemove }) => {
        const { id, name } = user
        const handleDelete = (id) => {
                handleRemove(id)
        }
  return (
          <div className='bg-red-400 p-10 rounded text-white font-serif w-full text-xl'>
                  <p>{ id}</p>
                  <h1>{name}</h1>
                  <button className='border-2 rounded px-4 cursor-pointer mt-3'onClick={()=>{handleDelete(id)}}>Delete</button>
    </div>
  )
}

export default User