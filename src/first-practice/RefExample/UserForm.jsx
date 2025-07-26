import React, { Component, createRef } from "react";
// Importing React Component class and createRef API for creating references to DOM elements

export default class UserForm extends Component {
  constructor(props) {
    super(props); // Calls the parent class (Component) constructor

    // Creating a reference to the userName input element
    this.userNameRef = createRef();

    // Initializing state (currently empty, but ready for future use)
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior (page refresh)

    // Accessing the value entered in the userName input using ref
    console.log(this.userNameRef.current.value);

    // Changing the background color of the userName input field to green
    this.userNameRef.current.style.backgroundColor = "green";
  };

  render() {
    return (
      // When the form is submitted, handleSubmit is called
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="userName">UserName: </label>
          {/* Input field for username, linked to the ref */}
          <input type="text" id="userName" ref={this.userNameRef} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          {/* Input field for password — not controlled or referenced */}
          <input type="password" id="password" />
        </div>
        {/* Button to submit the form */}
        <button type="submit">Register</button>
      </form>
    );
  }
}
