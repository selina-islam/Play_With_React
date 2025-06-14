import React from 'react'

const AddShowing = ({cart, removeFromCart}) => {
  return (
          <div>
                  <h2>Cart: {cart.length }</h2>
                  {cart.length === 0 ? (
                          <p>no items in the cart</p>
                  ) : (cart.map((item) => (
                          <div key={item.id}> <p>{item.name}</p>
                          <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                          </div>
                  )))}
    </div>
  )
}

export default AddShowing