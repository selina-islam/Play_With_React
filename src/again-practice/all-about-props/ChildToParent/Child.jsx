import React from 'react'

// 1) Create function in parent
// 2) Pass function as prop to child
// 3) Call function from child
// 4) Update parent state with data
// 5) Display data if needed




const Child = ({sendToGrandParent}) => {
const handleClick=()=>{
    sendToGrandParent('Hello from child')
}
  return (
    <div>
        <p>Child</p>
        <button onClick={handleClick}>Send Data</button>

    </div>
  )
}

export default Child