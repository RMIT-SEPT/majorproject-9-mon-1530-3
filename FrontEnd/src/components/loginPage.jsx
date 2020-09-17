import React, { Component } from "react";
import {userLogin} from "../actions/LoginActions";

class Login extends Component {
    constructor() {
        super();
        sessionStorage.setItem('username', "NULL");

        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    async onSubmit(event){
        event.preventDefault();
        const user = {
            "username":this.state.username,
            "password":this.state.password,
            "userType":"customer"
        }

        let valid = await userLogin(user)

        if (valid){
            sessionStorage.setItem('username', this.state.username);
            sessionStorage.setItem('userType', valid["userType"])
            console.log(sessionStorage.getItem('username'))
            console.log(sessionStorage.getItem('userType'))
            alert("User, " + sessionStorage.getItem('username') + " is now logged in")
        } else{
            console.log("User Not Found!")
        }
    }

  render() {
    return (
      <div>
          <h1>Login Page</h1>
          <form onSubmit={this.onSubmit}>
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
