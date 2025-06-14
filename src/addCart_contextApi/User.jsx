import React, { useContext, useEffect, useState } from 'react'
import SingleUser from './SingleUser'
import { CartContext } from './CartContext'

const User = () => {
        const [user, setUser] = useState([])
        const {addToCart}=useContext(CartContext)
        useEffect(() => {
                fetch('users.json')
                .then(res=> res.json())
                .then(data => setUser(data))
        })
  return (
          <div>
                  <h2>User Add To Cart Function System</h2>
                  {user.map((u, i) => <SingleUser key={i} u={ u} addToCart={addToCart}/> )}
    </div>
  )
}

export default User