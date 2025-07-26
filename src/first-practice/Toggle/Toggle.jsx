import React, { useState } from 'react'

export const Toggle = () => {
        const [toggle, setToggle]= useState(false)
  return (
          <div className='m-5 bg-indigo-600 p-3'>
                  {toggle &&
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae error cupiditate nobis voluptas voluptate saepe accusamus commodi esse, enim dolore eius placeat aspernatur, rerum architecto aliquid? Veniam, ducimus minima.</p>}
                  <div className='text-center m-5'>
                          
                          <button onClick={()=> setToggle(!toggle)} className='border px-5'>{toggle?" hide": "show" }</button>
                  </div>
    </div>
  )
}
