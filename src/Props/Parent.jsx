import React from "react";
import Child from "./Child"; // Importing the Child component

// This is the function that the child will call to send data to parent
const handleChildMessage = (message) => {
  console.log("Parent received:", message);
};

// Parent component
const Parent = () => {
  const name = "I am the Parent";

  return (
    <div>
      <h1>Parent Component</h1>

      {/* Passing two props to the child:
          1. name - a simple string
          2. parentCallback - a function */}
      <Child name={name} parentCallback={handleChildMessage} />
    </div>
  );
};

export default Parent;
