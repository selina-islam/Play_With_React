import React, { useRef } from "react";
// Import React and the useRef hook

const UseRefExample = () => {
  const userNameRef = useRef();
  // Create a reference for the username input field

  const passwordRef = useRef();
  // Create a reference for the password input field

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent the form from refreshing the page on submit

    const userName = userNameRef.current.value;
    // Get the value entered in the username input field

    const password = passwordRef.current.value;
    // Get the value entered in the password input field

    userNameRef.current.style.color = "red";
    // Change the text color of the username input to red

    console.log({ userName, password });
    // Log the username and password to the console
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* When the form is submitted, call the handleSubmit function */}

        <div>
          <label htmlFor="userName">UserName:</label>
          <input type="text" id="userName" ref={userNameRef} />
          {/* Attach the userNameRef to this input to access it using useRef */}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
          {/* Attach the passwordRef to this input to access it using useRef */}
        </div>

        <button type="submit">Register</button>
        {/* Submit button for the form */}
      </form>
    </div>
  );
};

export default UseRefExample;
// Export the component so it can be used in other files
