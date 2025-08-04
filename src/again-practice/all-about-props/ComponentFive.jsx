import React from 'react'

const ComponentFive = ({name, sendToParent}) => {
    //console.log(user)
    const handleClick =()=>{
        const id =101;
        sendToParent(id)
    }
  return (
    <div className='bg-amber-400'>
        <p>ComponentFive</p>
        <p>{name}</p>
        <button onClick={handleClick}>Send ID To Parent</button>
    </div>
  )
}

export default ComponentFive