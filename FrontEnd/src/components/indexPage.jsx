import React, { Component } from "react";
import Logo from "./Layout/Logo"
import Login from "./Layout/LoginForm"

class Index extends Component {
  state = {};
  //CONSTRUCTS A UN/PW/ERROR
  constructor() {
    super();

    this.state = {
        username: "",
        password: "",
        errorMessage: ""
    };

    this.state = {isToggleOn: true};
  }

  //SUBMIT EVENT
  submit(event){
        event.preventDefault();
        const user = {
            "username":this.state.username,
            "password":this.state.password,
            "userType":"Customer"
        }
        console.log(user)
  }


  //THIS RENDER() DISPLAYS ON THE PAGE
  render() {
    return (
      
      <div id="signContent">
      <div id="logo"><Logo /></div>
      <Login />

      </div>

    );
  }
}

export default Index;
