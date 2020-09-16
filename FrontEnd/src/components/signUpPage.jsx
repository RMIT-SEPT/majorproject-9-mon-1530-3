import React, { Component } from "react";
import {signUp} from "../actions/SignUpActions";

class Register extends Component {
  constructor() {
      super();

      this.state = {
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: ""
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
      this.setState({[event.target.name]: event.target.value});
  }

  async onSubmit(event){
      event.preventDefault();
      const customer = {
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "email": this.state.email,
          "username": this.state.username,
          "password": this.state.password
      }

      console.log(customer)
      let valid = await signUp(customer)
      console.log(valid)
  }


  render() {
    return (
      <div>
          <a className="navbar-link" href="/login">Login</a>
        <h1>CREATE A NEW ACCOUNT</h1>
        <br></br>
          <form onSubmit={this.onSubmit}>
            <h5>First name</h5>
            <input class="input" name="firstName"
                   placeholder="First Name"
                   value={this.state.firstName}
                   onChange={this.onChange} />

            <h5>Last name</h5>
            <input class="input" name="lastName"
                   placeholder="Last Name"
                   value={this.state.lastName}
                   onChange={this.onChange}/>

            <h5>Email address</h5>
            <input class="input" name="email"
                   placeholder="Email"
                   value={this.state.email}
                   onChange={this.onChange}/>

            <h5>Username</h5>
            <input class="input" name="username"
                   placeholder="Username"
                   value={this.state.username}
                   onChange={this.onChange}/>

            <h5>Password</h5>
            <input class="input"type="password"
                   name="password"
                   placeholder="Password"
                   value={this.state.password}
                   onChange={this.onChange}/>
            <br></br>
            <br></br>
            <input type="submit" className="btn btn-primary btn-sm"/>
          </form>
      </div>
    );
  }
}

export default Register;
