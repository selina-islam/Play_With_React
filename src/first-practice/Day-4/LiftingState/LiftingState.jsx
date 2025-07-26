import { useState } from 'react'
import Display from './Display'
import Counter from './Counter'

function LiftingState() {
        const [count, setCount]=useState(0)

        const handleIncrement = () => {
                 setCount(count + 1);
        }
        const handleDecrement = () => {
                 if (count > 0) {
                   setCount(count - 1);
                 }
        }
  return (
    <div className='max-w-sm mx-auto py-30 flex justify-center items-center'>
                  <Counter count={count} handleDecrement={handleDecrement} handleIncrement={handleIncrement } />
      <Display count={count} />
    </div>
  );
}

export default LiftingState