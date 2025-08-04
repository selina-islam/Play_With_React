import React from 'react'
import Child from './Child'

const Parent = ({sendToGrandParent}) => {
  return (
    <div>
        <p>Parent</p>
         <Child sendToGrandParent={sendToGrandParent}/>
    </div>
   
  )
}

export default Parent