import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        alert("SUBMITTING");
    }

  render() {
    return (
      <div>
          <a className="navbar-link" href="/register">Register</a>
          <h1>Login Page</h1>
          <form onSubmit={this.handleSubmit}>
              <br></br>
              <input class="input" name="username"
                     placeholder="Username"
                     value={this.state.username}
                     onChange={this.onChange}
              />
              <br></br>
              <input class="input" name="password"
                     placeholder="Password"
                     type="password"
                     value={this.state.password}
                     onChange={this.onChange}
              />
              <br></br>
              <br></br>
              <input type="submit" className="btn btn-primary btn-sm"/>
          </form>
      </div>
    );
  }
}

export default Login;
