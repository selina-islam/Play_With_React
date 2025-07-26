import React, { useState } from 'react'
import Button from './Button'

const PropsData = () => {
        const [count, setCount] = useState(0)
        const handleClick = () => {
                setCount(count+1)
        }
  return (
          <div>
                  <Button count={ count} handleClick={handleClick} />
                  <Button count={ count} handleClick={handleClick} />
    </div>
  )
}

export default PropsData