import React from 'react'

const Another = ({nextOne}) => {
   console.log('Another')
  return (
    <div>

    </div>
  )
}

export default React.memo(Another)