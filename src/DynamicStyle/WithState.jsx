import React, { useState, useEffect } from "react";

const WithState = () => {
  // State variable 'name' to store the input value
  const [name, setName] = useState("");

  // 'validInput' boolean state to track if input is valid or not
  const [validInput, setValidInput] = useState(false);

  // useEffect hook runs whenever 'name' changes
  useEffect(() => {
    // If length of 'name' is less than 2, mark input as invalid (false)
    if (name.length < 2) {
      setValidInput(false);
    } else {
      // If length is 2 or more, mark input as valid (true)
      setValidInput(true);
    }
  }, [name]); // dependency array, effect runs only when 'name' changes

  // Handler for input change to update 'name' state
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="p-9">
      <div>
        <input
          type="text"
          value={name} // value of input is bound to 'name' state
          onChange={handleChange} // update 'name' state on input change
          className={`${validInput && "valid"}`}
          /*
            Here, if 'validInput' is true, the input will get the 'valid' CSS class.
            If false, no class is added.
            Alternatively, you can use a ternary operator for two classes like below:
            className={`${validInput ? 'valid' : 'invalid'}`}
          */
        />

        {/* Uncomment these to try alternative ways of styling */}

        {/* Example where input gets 'valid' class if valid, else 'invalid' */}
        {/* <input
          type="text"
          value={name}
          onChange={handleChange}
          className={`${validInput ? 'valid' : 'invalid'}`}
        /> */}

        {/* Example of inline styling the background color conditionally */}
        {/* <input
           type="text"
           value={name}
           onChange={handleChange}
           style={{ backgroundColor: validInput ? "green" : "red" }}
        /> */}
      </div>
    </div>
  );
};

export default WithState;
