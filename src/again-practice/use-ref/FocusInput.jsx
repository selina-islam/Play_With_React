import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef= useRef(null)

    const handleFocus = () => {
        inputRef.current.focus()
        console.log('input focused', inputRef.current)
    }
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='Name' />
        <button onClick={handleFocus}>Submit</button>
    </div>
  )
}

export default FocusInput