import React, { useState } from 'react'

const NewUser = ({ handleNewUser }) => {
        const [newUser, setNewUser]= useState([])

        const handleChange = (e) => {
                setNewUser(e.target.value)
              
        }
        const handleSubmit = (e) => {
                e.preventDefault();
                const NewUser = { id: new Date().getTime().toString(), name: newUser }
                handleNewUser(NewUser)
                setNewUser('')
        }
  return (
          <div>
                  <form onSubmit={handleSubmit}> 
                          <input type="text" className='border mt-8 ml-10'required value={newUser}onChange={handleChange} />
                          <button className='border cursor-pointer' type='submit'>add user</button>
                  </form>
    </div>
  )
}

export default NewUser