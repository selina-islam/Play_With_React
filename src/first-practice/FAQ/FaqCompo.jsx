import React, { useState } from "react";

// faq component jeta ekta question & answer show kore
const FaqCompo = ({ id, qu, ans }) => {
  const [show, setShow] = useState(false); // initial state false, answer hide thakbe

  return (
    // main container style kora ache
    <div className="bg-gray-800 text-white flex justify-between items-center p-4 w-[90%] mx-auto">
      {/* question and answer part */}
      <div className="pr-6">
        <h4 className="font-semibold pb-2">{qu}</h4>{" "}
        {/* question show korchi */}
        {show && <p>{ans}</p>} {/* show true holei answer show hobe */}
      </div>

      {/* button to toggle answer */}
      <div>
        <button
          onClick={() => setShow(!show)} // button e click korle show state toggle hobe
          className="text-2xl border px-3"
        >
          {show ? "-" : "+"} {/* show hole minus, na hole plus dekhabe */}
        </button>
      </div>
    </div>
  );
};

export default FaqCompo;
