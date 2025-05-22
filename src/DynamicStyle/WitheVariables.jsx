import React from 'react'

const Style = () => {
        const error = true;
  return (
          <div>
                  {/* static style text color will be red */}
                  <h1 style={{ color: 'red' }}>Welcome</h1>  
                 {/* dynamic style will be red ang background color will be black*/}
                  <h1 style={{ color: error ? 'red' : 'green', backgroundColor: error ? 'black' : 'red'}}>Welcome</h1>
                 
    </div>
  )
}

export default Style