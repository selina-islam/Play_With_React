import React from 'react'


function Display({count}) {
  return (
          <div className='bg-amber-500 p-8'>
               <p className='text-xl font-bold'>Display</p>
                  <p>Count: { count}</p>

    </div>
  )
}

export default Display