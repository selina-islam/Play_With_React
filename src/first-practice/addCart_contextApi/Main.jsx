import React from 'react'
import { CartProvider } from './CartContext'
import AddShow from './AddShow'
import User from './User'

const Main = () => {
  return (
   
          <CartProvider>
                  <div>
                          <AddShow/>
                          <User/>
                  </div>
        </CartProvider>
  )
}

export default Main