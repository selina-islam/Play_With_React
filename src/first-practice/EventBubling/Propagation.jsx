import React, { useState } from "react";

const Propagation = () => {
  // State to store the button click message
  const [btnText, setBtnText] = useState("");

  // State to store the div click message
  const [btnDiv, setDivText] = useState("");

  // Function to handle button click
  const handleBtnClick = (e) => {
    e.stopPropagation(); // Prevents the click event from bubbling up to the div
    setBtnText("Button clicked"); // Update button click message
  };

  // Function to handle div click
  const handleDivClick = () => {
    setDivText("Div clicked"); // Update div click message
  };

  return (
    <div
      onClick={handleDivClick} // When div is clicked, this function runs
      className="bg-gray-200 p-20"
    >
      <button
        className="border"
        onClick={handleBtnClick} // When button is clicked, this function runs
      >
        Child btn
      </button>
      {/* Display the current state messages */}
      <p>btn: {btnText}</p>
      <p>div: {btnDiv}</p>
    </div>
  );
};

export default Propagation;
