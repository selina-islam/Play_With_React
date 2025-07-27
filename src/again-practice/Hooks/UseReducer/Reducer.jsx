import React, { useReducer } from 'react'

const Reducer = () => {

    //  useReducer is a hook that allows you to manage state in a functional component using a reducer function, similar to Redux.
    //  It is particularly useful for managing complex state logic or when the next state depends on the previous state.
    //  the previous state. It takes a reducer function and an initial state as arguments and returns the current state and a dispatch function.
    //  The reducer function receives the current state and an action, and returns the new state based on the action type.
    const initialState =10
    const reducer =(state, action)=>{
        if(action.work === 'plus'){
            return state + 1
        }else if(action.work === 'minus'){
            return state - 1
        }else{
            return state // if no action matches, return the current state
        }
    }
   const [count, dispatch]= useReducer(reducer, initialState )

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> dispatch({work:'plus'})}>Increment</button>
        <button onClick={()=>dispatch({work: 'minus'})}>Decrement</button>
    </div>
  )
}

export default Reducer