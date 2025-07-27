import React, { useState } from "react";

//  step 1: Create a custom hook
//  step 2: Use useState to manage the counter state
//  step 3: Return the counter value and functions to manipulate it
//  step 4: Use the custom hook in a component
//  step 5: Use the returned functions to increment, decrement, and reset the counter

const useCounter = (initialvalue) => {
  const [count, seCount] = useState(initialvalue);

  const increment = () => {
    seCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    seCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    seCount(initialvalue);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
