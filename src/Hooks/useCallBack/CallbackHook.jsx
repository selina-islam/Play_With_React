import React, { useCallback, useMemo, useState } from 'react'
import Another from './Another'

const CallbackHook = () => {
    const [incre, setIncre]= useState(0)
    const [decre,setDecre]= useState(100)


const nextOne=useCallback(()=>{
    // console.log()
},[])
    


  return (
    <div>
        <Another nextOne={nextOne}/>
       
        <button onClick={()=>{
            setIncre(incre=> incre +1)
        }}>Increment-{incre}</button>
        <hr />
        <button onClick={()=>{
            setDecre(decre=> decre-1)
        }}>Decrement- {decre}</button>
    </div>
  )
}

export default CallbackHook