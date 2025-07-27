import React from 'react'

const Two = ({nextone}) => {
    console.log("Two Component Rendered");
  return (
    <div>Two</div>
  )
}

export default React.memo(Two)