import React, { Component } from "react";

// Class-based component named Index1
export default class Index1 extends Component {
  constructor(props) {
    super(props);

    // Initializing state with count = 0
    this.state = {
      count: 0,
    };
  }

  // Arrow function to handle button click
  // Updates the state by increasing count by 1
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Render method to display the UI
  render() {
    const { count } = this.state; // Destructuring count from state
    return (
      <div>
        {/* Display the current count */}
        <p>Count: {count}</p>

        {/* Button to increment the count */}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
