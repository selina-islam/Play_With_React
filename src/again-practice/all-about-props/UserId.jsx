import React from 'react'
import ComponentThree from './ComponentThree'

const UserId = ({id, test}) => {
  return (
    <div>
        <p>UserId</p>
        <p>{id}</p>
        <ComponentThree test={test}/>
    </div>
  )
}

export default UserId