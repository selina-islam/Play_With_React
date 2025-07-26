import React, { useEffect, useState } from 'react'

const UseEffecExample = () => {
        const [count, setCount] = useState(0)
        const [isLoading, setIsLoading]= useState(false)
        
        /* useEffect(() => {
                // calls after every render
                console.log('useEffect')
        }) */


     /*   useEffect(() => {
// calls only once after the first render
                console.log('useEffect')
        },[])*/

        useEffect(() => {
// calls after every render when count changes
                console.log('useEffect')
        },[count, isLoading])
  return (
          <div>
                 { console.log('rendering')}
                  <p>Count: {count}</p>
                  <button onClick={()=>{setCount(count=> count+1)}} className='border px-3'>+</button>
                  <button onClick={()=>{setIsLoading(!isLoading)}} className='border px-3'>Loading</button>
    </div>
  )
}

export default UseEffecExample