import React, { useRef } from 'react'

// role of useRef is to persist the value without causing re-render
// it is used to store mutable values that do not cause re render when changed
// it can be used to access dom elements directly
// it is similar to useState btu does not cause re-render when the values change
// it is used to store values that do not need to be re-rendered
// it is used to store values that are not used in the render method

const IncreaseCount = () => {
    const countRef = useRef(0)

    const handleIncrease = () => {
        countRef.current = countRef.current + 1
        console.log('countRef: ',countRef.current)
    }
  return (
    <div className='p-12'>
        <p>{countRef.current}</p>
        <button onClick={handleIncrease}  className='border p-2 '>Increase</button>
    </div>
  )
}

export default IncreaseCount