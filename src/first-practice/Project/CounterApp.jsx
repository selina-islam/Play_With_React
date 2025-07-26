import React, { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  function IncrementHandle() {
    setCount(count + 1);
  }
  function DecrementHandle() {
    if (count > 0) setCount(count - 1);
  }
  function ResetHandle() {
    setCount(0);
  }

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Counter App</h1>
        <p className="text-center mb-4 text-gray-600">Count: {count}</p>
        <div className="flex space-x-3">
          {/*  Increment count */}
          <button
            className="bg-green-500 px-4 py-1 rounded-md hover:bg-green-600 transition-all "
            onClick={IncrementHandle}
          >
            Increment
          </button>

          {/* Decrement Count */}
          <button
            className="bg-indigo-500 px-4 py-1 rounded-md hover:bg-indigo-600 transition-all"
            onClick={DecrementHandle}
          >
            Decrement
          </button>

          {/* Reset Button */}
          <button
            className="bg-gray-500 px-4 py-1 rounded-md hover:bg-gray-600 transition-all"
            onClick={ResetHandle}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
