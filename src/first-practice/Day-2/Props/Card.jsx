import React from 'react'
import Button from './Button'
import ReusablrBtn from './ReusablrBtn'

  const handleClick = () => {
    alert('Button clicked!')
  }

function Card() {
        
  return (
          <div>
                  <Button name='nameOne'/> <br />
                  <Button name='nameTwo' />
                  <ReusablrBtn onClick={handleClick} color='bg-green-600' text='submit'/>
                  <ReusablrBtn onClick={handleClick} color='bg-indigo-600' text='click'/>
    </div>
  )
}

export default Card



// import React from 'react'
// import Button from './Button'

// function Card() {
//   return (
//           <div>
//                   <Button name='nameOne'/> <br />
//                   <Button name='nameTwo'/>
//     </div>
//   )
// }

// export default Card