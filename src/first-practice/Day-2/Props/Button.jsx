import React from 'react'

function Button({name}) {
  return (
          <button className='px-4 py-2 bg-amber-300 m-6 rounded-md'>Click {name}</button>
  )
}

export default Button



// import React from 'react'

// function Button(props) {
//   return (
//           <button className='px-4 py-2 bg-amber-300 m-6 rounded-md'>Click { props.name}</button>
//   )
// }

// export default Button