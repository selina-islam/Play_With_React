import React, { Component } from "react";

export default class Event_Binding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleChange: "Click",
    };

    // binding the method to the component instance
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      handleChange: "Button Clicked!",
    });
  }

  render() {
    return (
            <div>
                    {/*  this is a simple event biding e.g */}
                    <p>{ this.state.handleChange}</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
