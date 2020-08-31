import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <div>
          <a className="navbar-link" href="/login">Login</a>
        <h1>CREATE A NEW ACCOUNT</h1>
        <br></br>
        <h5>First name</h5>
        <input class="input" />
        <h5>Last name</h5>
        <input class="input"/>
        <h5>Email address</h5>
        <input class="input"/>
        <h5>Username</h5>
        <input class="input"/>
        <h5>Password</h5>
        <input class="input"type="password" />
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
