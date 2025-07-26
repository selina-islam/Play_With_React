import React, { Component } from "react";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false, // initial state for logged-in status
    };
  }
  render() {
    const { isLoggedIn } = this.state; // Destructuring state to get isLoggedIN
    let element;
    // if (isLoggedIn) {
    //         element=  <HomePage/>
    // } else {
    //        element=  <SignInPage/>
    // }
    return (
      <div>
        {/* {element}
                                 render the element bansed on isloggedin state */}

        {/* {isLoggedIn ? <HomePage /> : <SignInPage />} */}
        {isLoggedIn && <HomePage />}
      </div>
    );
  }
}
