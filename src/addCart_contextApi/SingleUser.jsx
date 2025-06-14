import React from 'react'

const SingleUser = ({ u , addToCart}) => {
        const {name, email}= u
  return (
          <div className='m-20'>
                  <p>{name}</p>
                  <p>{email}</p>
                  <button onClick={()=>addToCart(u)}>add</button>
    </div>
  )
}

export default SingleUser