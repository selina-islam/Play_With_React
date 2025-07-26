import React, { useState } from 'react'

 const useCounter = (initialnvalue=0) => {
    const [counter, setCounter]= useState(initialnvalue=0)
    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }
  return {counter, increment, decrement}
}
export default useCounter