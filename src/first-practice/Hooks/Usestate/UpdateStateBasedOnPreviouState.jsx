import React, { useState } from "react";

// Functional component
const UpdateStateBasedOnPreviouState = () => {
  // Initializing count state to 0
  const [count, setCount] = useState(0);

  // ✅ Correct way: Using function form of setState to update based on previous state
  const handleClick = () => {
    // Each call receives the updated value from the previous one
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // This will increase the count by 3
  };

  /*
         This version will NOT work as expected: Because count is the same in all three calls (stale value),
          it will only increase by 1.

        const handleClick = () => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        };
       
        */

  /*
         This version works fine too (one update): It increases by 1 each time.
        const handleClick = () => {
          setCount((prevCount) => prevCount + 1);
        };
      
        */

  return (
    <div>
      {/* Display the current count */}
      <p>Count: {count}</p>

      {/* Button to trigger count updates */}
      <button onClick={handleClick} className="border px-5 py-2 rounded">
        Click Here
      </button>
    </div>
  );
};

export default UpdateStateBasedOnPreviouState;
