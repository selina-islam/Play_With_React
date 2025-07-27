import React from 'react'
import useCounter from './UseCounter'

const Counter = () => {
    const [count, increment, decrement, reset] = useCounter(20)
  return (
    <div className='flex flex-col justify-center items-center mt-8'>
        <h1 >Counter: {count}</h1>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>

    </div>
  )
}

export default Counter