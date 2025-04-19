import React, { useState } from 'react'

function Onclickevent() {
        const [count, setCount]=useState(0)
        function handleClick() {
                setCount(count+1)
        }
  return (
          <div className='m-4'>
                  <button className='px-5 py-3 border bg-gray-300 rounded-xl' onClick={handleClick}>Click</button>
                  <p>Count: { count}</p>
    </div>
  )
}

export default Onclickevent