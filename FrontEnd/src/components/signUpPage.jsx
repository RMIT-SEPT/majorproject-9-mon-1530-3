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
          "admin": this.state.admin
      }

      let valid = await signUp(user, this.state.userType)
      if (valid === "username"){
          alert("Error: User already exists with that username")
      } else{
          window.location.href = '/login';
      }
  }


  render() {
    return (
      <div>
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

            <br></br>
            <br></br>
            <input type="submit" className="btn btn-primary btn-sm"/>
          </form>
      </div>
    );
  }
}

export default Register;
