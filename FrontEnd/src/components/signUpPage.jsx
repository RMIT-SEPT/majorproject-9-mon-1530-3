import React, { Component } from "react";
import {signUp} from "../actions/SignUpActions";
import Logo from "./Layout/Logo";

class Register extends Component {
  constructor() {
      super();

      this.state = {
          firstName: "",
          lastName: "",
          email: "",
          username: "",
          password: "",
          userType: "",
          admin:""
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
      this.setState({[event.target.name]: event.target.value});
  }

  async onSubmit(event){
      event.preventDefault();

      if (this.state.userType === "admin"){
          console.log("ADMIN!!!")
          this.state.userType = "employee"
          this.state.admin = true
      }

      const user = {
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "email": this.state.email,
          "username": this.state.username,
          "password": this.state.password,
          "admin": this.state.admin,
          "service": "unassigned"
      }

      let valid = await signUp(user, this.state.userType)
      if (valid === "username"){
          alert("Error: User already exists with that username")
      } else{
          alert("USER");
          window.location.href = '/login';
      }
  }


  render() {
    return (
      <div id="signContent">
        <div className="logo"><Logo /></div>
        <div className="signs">
        <form onSubmit={this.onSubmit}>

            <input className="input" name="firstName"
            placeholder="first name."
            value={this.state.firstName}
            onChange={this.onChange} /><br></br>

            <input className="input" name="lastName"
            placeholder="last name."
            value={this.state.lastName}
            onChange={this.onChange}/><br></br>       

            <input className="input" name="username"
            placeholder="username."
            value={this.state.username}
            onChange={this.onChange} required/><br></br>

            <input className="input"type="password"
            name="password"
            placeholder="password."
            value={this.state.password}
            onChange={this.onChange} required/><br></br>

            <input className="input" name="email"
            placeholder="email."
            value={this.state.email}
            onChange={this.onChange}/><br></br>

            <input className="input" name="phone"
            placeholder="phone number."/><br></br>

            <h5>Account Type</h5>
            <input type="radio" id="customer" name="userType"
                   value="customer" checked={this.state.userType === "customer"}
                   onChange={this.onChange} />
            <label htmlFor="customer">Customer</label><br/>
            <input type="radio" id="employee" name="userType"
                   value="employee" checked={this.state.userType === "employee"}
                   onChange={this.onChange}/>
            <label htmlFor="employee">Employee</label><br/>
            <input type="radio" id="admin" name="userType"
                   value="admin" checked={this.state.userType === "admin"}
                   onChange={this.onChange}/>
            <label htmlFor="admin">Admin</label>
            <input type="submit" className="submit" value="register."/>
          </form>
          <a href="/login">sign in instead?</a>
          </div>
      </div>
    );
  }
}

export default Register;
