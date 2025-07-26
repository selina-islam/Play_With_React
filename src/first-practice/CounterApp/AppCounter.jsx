import React, { useState } from "react";
import toast from "react-hot-toast";

const AppCounter = () => {
  // state to keep track of the counter value
  const [count, setCount] = useState(0);

  // constants for max and min limits
  const MaxCount = 5;
  const MinCount = 0;

  // function to handle increase button click
  const handleIncrement = () => {
    if (count < MaxCount) {
      setCount((prev) => prev + 1);
      toast.success("✅ increased!");
    } else {
      toast.error("🚫 max limit reached!");
    }
  };

  // function to handle decrease button click
  const handleDecrement = () => {
    if (count > MinCount) {
      setCount((prev) => prev - 1);
      toast("🔻 decreased");
    } else {
      toast.error("❌ minimum value is 0");
    }
  };

  // function to reset the counter
  const handleReset = () => {
    setCount(0);
    toast("🔁 counter reset");
  };

  // calculate progress bar percentage
  const progressPercentage = (count / MaxCount) * 100;

  return (
    <div className="bg-amber-500 p-8 text-center rounded-xl shadow-2xl border-amber-500 hover:translate-y-1 w-[50%] mx-auto hover:bg-amber-600 duration-300 transition-transform">
      {/* display counter value */}
      <p className="text-xl font-bold pb-3">🧮 count: {count}</p>

      {/* progress bar */}
      <div className="w-[70%] mx-auto my-6 h-5 bg-white border border-gray-400 rounded-full overflow-hidden transition-all duration-300">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* increase button */}
      <button
        onClick={handleIncrement}
        className="border px-5 py-2 rounded bg-gradient-to-r to-blue-500 hover:bg-gradient-to-r from-amber-300"
      >
        increase(+)
      </button>

      {/* decrease button */}
      <button
        onClick={handleDecrement}
        className="border px-5 py-2 mx-4 my-4 rounded bg-gradient-to-r to-blue-600 hover:bg-gradient-to-r from-amber-300"
      >
        decrease(-)
      </button>

      {/* reset button */}
      <button
        onClick={handleReset}
        className="border px-5 py-2 rounded bg-gradient-to-r to-blue-600 hover:bg-gradient-to-r from-amber-300"
      >
        reset
      </button>
    </div>
  );
};

export default AppCounter;
