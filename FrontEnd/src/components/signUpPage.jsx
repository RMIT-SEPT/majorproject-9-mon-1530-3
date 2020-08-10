import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>CREATE A NEW ACCOUNT</h1>
        <br></br>
        <h4>First name</h4>
        <input />
        <h4>Last name</h4>
        <input />
        <h4>Email address</h4>
        <input />
        <h4>Username</h4>
        <input />
        <h4>Password</h4>
        <input type="password" />
        <h4>Country</h4>
        <input />
        <br></br>
        <br></br>
        <button className="btn btn-primary btn-sm">Create Account</button>
      </div>
    );
  }
}

export default Register;
