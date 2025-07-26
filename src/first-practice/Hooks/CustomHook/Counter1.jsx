import React from 'react'
import  useCounter  from './useCounter'

 const Counter1 = () => {
    const {counter, increment, decrement}= useCounter(4)
  return (
    <div>
        <p>{counter}</p>
        <button onClick={increment}>Incremnet</button>
    </div>
  )
}
export default Counter1