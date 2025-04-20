import React from 'react'

function ReusablrBtn({text, onClick, color}) {
  return (
          <button onClick={onClick} className={`px-4 py-2 ${color} m-6 rounded-md`}>{ text}</button>
  )
}

export default ReusablrBtn