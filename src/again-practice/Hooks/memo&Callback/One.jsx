import React, { useCallback, useMemo, useState } from "react";
import Two from "./Two";

const One = () => {
  const [count, setCount] = useState(0);
  const [decrease, setDecrease] = useState(count);
  const handleINcrement = () => {
    setCount(count + 1);
  };

  // Using useMemo to memoize the checking function
  // This will prevent the function from being recalculated on every render
  // It will only recalculate when 'count' changes
  // This is useful for performance optimization in larger applications

  const Checking = () =>
    useMemo(() => {
      // console.log("Checking function called")
      return count % 2 === 0 ? "Even" : "Odd";
    }, [count]);

  // handleDecrement function to decrease the count
  const handleDecrement = () => {
    setDecrease(decrease - 1);
  };
  // nextone function to be passed to the Two component
  const nextone = useCallback(() => {
    console.log("Next one called");
  }, [count]); // only changes when count changes

  // const nextone= () => {
  //    // console.log("Next one called")
  // }
  return (
    <div>
      <Two nextone={nextone} />
      <h1>One Component</h1>
      <button>{Checking()}</button>
      <br />
      <h1>Count: {count}</h1>
      <h1>Decrease: {decrease}</h1>
      <button onClick={handleINcrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default One;
