import React from 'react'

const Button = ({count, handleClick}) => {
  return (
          <div className='m-4'>
                  <button onClick={handleClick} className='bg-green-500 px-8 py-2 rounded-4xl'>click</button>
                  <p>Button clicked: { count} times</p>
    </div>
  )
}

export default Button