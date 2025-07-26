import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Context4 = () => {
        const{user, text} = useContext(UserContext)
        console.log(user)
  return (
          <div>
                  <p>{ text}</p>
                  <p>{user.id}</p>
                  <h1>{user.name }</h1>
    </div>
  )
}

export default Context4