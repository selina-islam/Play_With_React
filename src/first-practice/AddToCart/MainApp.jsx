import React, { useState } from 'react'
import Products from './Products'
import AddShowing from './AddShowing'

const MainApp = () => {
        const [cart, setCart]= useState([])
        const addToCart = (add) => {
                if (!cart.find(item => item.id === add.id)) {
                        setCart([...cart, add])
                }
               
        }

        const removeFromCart = (id) => {
                setCart(cart.filter(item=> item.id !== id))
        }
  return (
          <div>
                  <AddShowing cart={cart} removeFromCart={ removeFromCart} />
                  <Products addToCart={addToCart} />
    </div>
  )
}

export default MainApp