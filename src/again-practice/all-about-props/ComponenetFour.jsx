import React from 'react'
import ComponenTwo from './ComponenTwo'

const ComponenetFour = ({user}) => {
  return (
    <div className='bg-blue-600'>
    <p>ComponenetFour</p>
    {user.map((u,i)=>{
        return(
            <diV key={i}>
                <p>{u.id}{u.name}</p>
                <ComponenTwo name={u.name}/>
            </diV>
        )
    })}
    </div>
  )
}

export default ComponenetFour