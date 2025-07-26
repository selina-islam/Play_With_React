import React from 'react'

function HandlingListKey() {
        const items=['apple', 'orange', 'watermelon']
  return (
          <div><h1 className='text-2xl font-semibold'>Handling Key List</h1>
                  {items.map((item, index) => {
                          return <li key={index}>{ index}- { item}</li>
          })}
          </div>
  )
}

export default HandlingListKey