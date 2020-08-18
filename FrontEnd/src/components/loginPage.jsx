import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <br></br>
        <input placeholder="Username" />
        <br></br>
        <input placeholder="Password" type="password" />
        <br></br>
        <br></br>
        <button className="btn btn-primary btn-sm">Login</button>
      </div>
    );
  }
}

export default Login;
