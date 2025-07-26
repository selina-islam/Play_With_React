import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = ({addToCart}) => {
        const [data, setData]= useState([])

        useEffect(() => {
               fetch('users.json') 
               .then(res=> res.json())
               .then(data => setData(data))
        },[])
  return (
          <div className=' grid grid-cols-3 gap-8 p-8'>
                  {data.map((user, index) => <Product key={index} user={ user}  addToCart={addToCart}/>)}
    </div>
  )
}

export default Products