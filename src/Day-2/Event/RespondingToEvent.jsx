import React from 'react'

function RespondingToEvent() {
        function handleClick(){
alert ('Button is clicked!')
        }
  return (
          <div>
                  <button className='bg-amber-950 text-white rounded-md m-5 px-7 py-3' onClick={handleClick}>Click</button>
    </div>
  )
}

export default RespondingToEvent