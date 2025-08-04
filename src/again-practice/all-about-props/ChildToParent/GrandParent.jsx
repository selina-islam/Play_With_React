import React, { useState } from 'react'
import Parent from './Parent'

// Step 1: Create a function in the Parent component to receive data
// Step 2: Pass that function down as a prop to the child (directly or through intermediate components)
// Step 3: Call the function from the child component when you want to send data
// Step 4: Parent component gets the data and can update state or do something with it
// Bonus Step 5 (optional): Show the received data in the Parent

const GrandParent = () => {
    const [message, setMessage]= useState(null)
    const handleMessage= (message)=>{
        setMessage(message)
    }
  return (
    <div>
        <p>GrandParent</p>
        <Parent sendToGrandParent={handleMessage}/>
        {message && <p>Message from child: {message}</p>}

    </div>
  )
}

export default GrandParent