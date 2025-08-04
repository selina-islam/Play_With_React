import React, { useState } from 'react'
import ComponentFive from './ComponentFive'
import ComponenetFour from './ComponenetFour'
import UserId from './UserId'



const ComponentOne = () => {
    const [user, setUser]= useState([
        {id:1, name: 'Saiful Islam',},
        {id:2, name: 'Mohammad Nayeem'}
    ])
    const [selectedId, setSelectedId]= useState(null)
    const test = 'wise man'

    // function to receive data from child
    const handleDataFromChild = (id) => {
        setSelectedId(id)
    }

  return (
    <div>
        <h2 className='bg-black text-white'>Component-1</h2>
        <ComponentFive name={user[0].name} sendToParent= {handleDataFromChild}/>
        {selectedId && <p>Received ID: {selectedId}</p>}
        <ComponenetFour user= {user}/>

        <UserId id={user[1].id} test={test}/>
    </div>
  )
}

export default ComponentOne