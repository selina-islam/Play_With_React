import React from 'react'

const Product = ({ user, addToCart }) => {
        const { name, email } = user
        
        const handleAdd = () => {
                addToCart(user)
        }
  return (
          <div className='border p-6 rounded'>
                  <p>{name}</p>
                  <p>{email}</p>
                  <button onClick={()=>handleAdd(name)} className='border mt-2 px-5'>Add Button</button>
    </div>
  )
}

export default Product