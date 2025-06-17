import React from 'react'
import { useReducer } from 'react';

const CounterApp = () => {

    const initialValue=20

    const reducer=(state, action)=>{
        if(action === 'plus'){
         return state + 1
        }else if ( action === 'minus'){
            return state -1
        } else{
            return state
        }
    }

    const [count, dispatch] =useReducer(reducer, initialValue)
    
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=> dispatch('plus')}>Increment</button>
        <hr />
        <button onClick={()=> dispatch('minus')}>Decrement</button>
    </div>
  )
}

export default CounterApp