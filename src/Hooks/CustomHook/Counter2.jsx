import React from 'react'
import useCounter from './useCounter'

 const Counter2 = () => {
       const {counter, increment, decrement}= useCounter(4)
  return (
    <div> 
        <p>{counter}</p>
        <button onClick={decrement}>decremnet</button>
    </div>
  )
}
export default Counter2
