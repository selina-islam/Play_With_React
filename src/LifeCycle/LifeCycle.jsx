import React, { Component } from "react";
// Importing React and Component from the react library to create a class component

// rcc keyboard command for class component
// rconst keyboard command is used for generating the constructor in class components

// Lifecycle phases:
// Mounting = constructor --> render --> componentDidMount
// Updating = state/props changes --> render --> componentDidUpdate
// Unmounting = componentWillUnmount (not used here)

export default class LifeCycle extends Component {
  constructor(props) {
    super(props); // Calls the constructor of the parent class (Component)
    console.log("constructor"); // Logs when constructor runs (mounting phase)

    this.state = {
      count: 0, // Initialize state with count = 0
    };
  }

  shouldComponentUpdate() {
    // Called before re-rendering on state or props changes
    console.log("shouldComponentUpdate");
    return true; // Returning true allows the component to update
  }

  componentDidMount() {
    // Called after the component is rendered to the DOM (once)
    console.log("componentdidmount");
  }

  componentDidUpdate() {
    // Called after every update (state or props)
    console.log("componentdidMount"); // ❌ Incorrect log message (should be 'componentDidUpdate')
  }

  componentdidUpdate() {
    // ❌ This is a typo. React lifecycle method should be camelCase: componentDidUpdate()
    console.log("componentdidUpdate");
  }

  handleIncrement = () => {
    // Custom method to increase count state by 1
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    // Called whenever the component needs to render/re-render
    {
      console.log("render"); // Logs render every time component renders
    }
    return (
      <div>
        <h1>Counter :{this.state.count}</h1> {/* Display current count */}
        <button onClick={this.handleIncrement}>+</button>{" "}
        {/* Button to increment count */}
      </div>
    );
  }
}
