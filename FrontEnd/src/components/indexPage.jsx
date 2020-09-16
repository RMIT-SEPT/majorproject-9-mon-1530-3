import React, { Component } from "react";
import logo from '../images/logo.png'

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
      
      <div id="content">
      <div id="logo"><img src={logo} alt="logo that says the text booqing"></img></div>
      
      <div className="signs">
        <form>
        <input className="input" name="username"
           placeholder="username."
        />
          <br></br>
        <input className="input" name="password"
           placeholder="password." type="password"
        />
        <br></br>
        <input className="login" type="submit" value="login." onClick={this.submit}/>
        </form>
        <a href="/register">sign up instead?</a>
        
      </div>

      </div>

    );
  }
}

export default Index;
