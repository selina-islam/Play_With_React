// Importing React and Component class from 'react' package
import React, { Component } from "react";

// Exporting the class component so it can be used in other files
export default class EventHandlerClass extends Component {
  // Constructor is used to initialize state and bind methods
  constructor(props) {
    super(props); // Calling the parent class's constructor

    // Initializing component state
    this.state = {
      changedValue: "", // A state property to store input field value
    };
  }

  // Arrow function to handle input field changes
  handleOnChange = (event) => {
    // event.target.value contains the current value of the input field
    // setState updates the state with the new input value
    this.setState(
      {
        changedValue: event.target.value,
      },
      () => {
        // This callback runs after state has been updated
        // Logging the updated value to console
        console.log(this.state.changedValue);
      }
    );
  };

  // The render method returns JSX to render UI
  render() {
    return (
      <div>
        {/* Input field that calls handleOnChange on every change */}
        <input type="text" onChange={this.handleOnChange} />

        {/* Paragraph to display the current input value from state */}
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}
