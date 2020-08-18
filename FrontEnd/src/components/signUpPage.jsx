import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>CREATE A NEW ACCOUNT</h1>
        <br></br>
        <h5>First name</h5>
        <input />
        <h5>Last name</h5>
        <input />
        <h5>Email address</h5>
        <input />
        <h5>Username</h5>
        <input />
        <h5>Password</h5>
        <input type="password" />
        <h5>Country</h5>
        <input />
        <br></br>
        <br></br>
        <button className="btn btn-primary btn-sm">Create Account</button>
      </div>
    );
  }
}

export default Register;
