import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const AddShow = () => {
        const {cart, removeFromCart}= useContext(CartContext)
  return (
          <div>
                  <p>Cart: {cart.length}</p>
                  {cart.map((carts) => (
                          <div key={carts.id}>
                                  <p>{carts.name }</p>
                                  <button onClick={()=>removeFromCart(carts.id)}>remove</button>
                          </div>
                  ))}
                
    </div>
  )
}

export default AddShow