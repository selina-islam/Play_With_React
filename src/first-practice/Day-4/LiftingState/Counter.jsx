import React from 'react'

function Counter({count, handleIncrement, handleDecrement}) {
  return (
          <div className='space-y-4 text-center bg-amber-100 p-8'>
                  <h1 className='text-xl font-bold'>Counter App</h1>
                  <p>{ count}</p>
                  <button className='bg-blue-500 text-white rounded px-5 py-1 mr-3' onClick={handleIncrement}>Increment (+)</button>
                  <button className='bg-amber-950 text-white rounded px-5 py-1' onClick={handleDecrement}>Decrement (-)</button>
    </div>
  )
}

export default Counter