import React, { useState } from "react";

// Functional Component named Index2
function Index2() {
  // useState hook to create a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Function to handle the button click and increment the count
  const handleIncrement = () => {
    setCount(count + 1); // Updating the state
  };

  // JSX to render UI
  return (
    <div className="bg-gray-700 p-10 my-5 text-center">
      {/* Heading */}
      <h1 className="text-white text-2xl font-bold pb-4">
        Functional Component
      </h1>

      {/* Display current count */}
      <p className="text-white text-xl pb-4">Count: {count}</p>

      {/* Button to increment count */}
      <button
        onClick={handleIncrement}
        className="text-white border p-2 rounded"
      >
        Increment (+)
      </button>
    </div>
  );
}

// Exporting the component so it can be used in other parts of the app
export default Index2;
