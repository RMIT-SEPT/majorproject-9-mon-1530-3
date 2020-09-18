import React, { Component } from "react";
import Logo from "./Layout/Logo"
import RegisterForm from "./Layout/RegisterForm"


class Register extends Component {
  state = {};
  render() {
    return (
      <div id="signContent">
      <div id="logo"><Logo /></div>
      
      <RegisterForm />

      </div>
    );
  }
}

export default Register;
