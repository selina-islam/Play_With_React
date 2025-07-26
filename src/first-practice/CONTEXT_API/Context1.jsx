import React, { useState } from 'react'
import { UserContext } from './UserContext'
import Context2 from './Context2'

const Context1 = () => {
        const [user, setUser] = useState({ id: 1, name: 'Mohammmad Nayeem' })
        const [text, setText]= useState('I am text')
  return (
          <UserContext.Provider value={{user, text}}>
                 <Context2/>
          </UserContext.Provider>
  )
}

export default Context1