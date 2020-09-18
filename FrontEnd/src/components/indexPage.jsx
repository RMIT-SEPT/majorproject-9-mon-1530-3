import React, { Component } from "react";
import Logo from "./Layout/Logo"
import {userLogin} from "../actions/LoginActions"

class Index extends Component {
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

    console.log("hi");

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

  //THIS RENDER() DISPLAYS ON THE PAGE
  render() {
    return (
      
      <div>
      <center><Logo />
      <h1><i>hello!</i></h1>
      </center>
      </div>

    );
  }
}

export default Index;
