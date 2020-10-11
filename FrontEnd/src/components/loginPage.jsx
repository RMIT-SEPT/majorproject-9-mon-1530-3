import React, { Component } from "react";
import {userLogin} from "../actions/LoginActions";
import Logo from "./Layout/Logo"

class Login extends Component {
    constructor() {
        super();

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

        let valid = await userLogin(user);

        if (valid["success"] === true){
            let token = valid["token"].replace('Bearer ', '');
            console.log(token)
            localStorage.setItem("token", token)
            console.log(sessionStorage.getItem("token"));
            alert("User, " + sessionStorage.getItem('username') + " is now logged in")
            window.location.replace("/");
        } else{
            alert("Error: user not found!")
        }
    }

  render() {
    return (
      <div id="signContent">
          <div className="logo"><Logo /></div>
          <br></br>
          <div className="signs">
          <form onSubmit={this.onSubmit}>
              <input className="input" name="username"
                     placeholder="username."
                     value={this.state.username}
                     onChange={this.onChange} required
              />
              <br></br>
              <input className="input" name="password"
                     placeholder="password."
                     type="password"
                     value={this.state.password}
                     onChange={this.onChange} required
              />
              <br></br>
              <input className="submit" type="submit" value="login."/>
          </form>
          <a href="/register">sign up instead?</a>
          </div>
      </div>
    );
  }
}

export default Login;
