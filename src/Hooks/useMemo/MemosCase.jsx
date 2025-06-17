import React, { useMemo, useState } from 'react'

const MemosCase = () => {
    const [incre, setIncre]=useState(0)
    const [decre, setDecre]= useState(50)

    const troble=useMemo(()=>{
         console.log('Troble')
     return incre * 3
    }, [incre])

    const Checking=useMemo(()=>{
        return decre % 2 === 0;
    },[decre])
  return (
    <div>
        <p>triple it {troble}</p>
        <button onClick={()=>setIncre(incre=> incre+1)}>Increment- {incre}</button>
        <hr />
        <p>{Checking ? 'Even': 'Odd'}</p>
        <button onClick={()=> setDecre(decre=> decre-1)}>Decrement {decre}</button>
    </div>
  )
}

export default MemosCase