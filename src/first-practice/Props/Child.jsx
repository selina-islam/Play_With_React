import React from "react";

// Child component receives props from parent
const Child = ({ name, parentCallback }) => {
  // This function runs when the button is clicked
  const handleClick = () => {
    // Calling the parent's function and sending data
    parentCallback("Hello from the Child!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>{name}</p> {/* Showing the name received from parent */}
      <button onClick={handleClick}>Click to send message to Parent</button>
    </div>
  );
};

export default Child;
