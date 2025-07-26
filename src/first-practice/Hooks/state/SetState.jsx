import React, { Component } from "react";

// Create a class-based component named SetState
export default class SetState extends Component {
  constructor(props) {
    super(props);

    // Initialize the state with a count variable set to 0
    this.state = {
      count: 0,
    };
  }

  // Method to decrease the count by 1
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // Method to increase the count by 1
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // The render method returns the JSX that defines the UI
  render() {
    const { count } = this.state; // Destructure count from state

    return (
      <div className="bg-[#4c4c4c] h-screen flex flex-col items-center justify-center">
        {/* Container with background and padding */}
        <div className="bg-white/50 p-8 rounded text-center">
          {/* Display the current count */}
          <p className="text-2xl pb-8">{count}</p>

          {/* Button to increase count */}
          <button
            className="bg-blue-500 px-6 py-2 text-2xl rounded text-white"
            onClick={this.handleIncrement}
          >
            +
          </button>

          {/* Button to decrease count */}
          <button
            className="bg-blue-500 px-6 py-2 m-5 text-2xl rounded text-white"
            onClick={this.handleDecrement}
            disabled={count === 0 ? true : false} // Disable button if count is 0
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
