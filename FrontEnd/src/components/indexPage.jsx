import React, { Component } from "react";
import {userLogin} from "../actions/LoginActions";

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

    // this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle(event) {
    var signin = document.getElementById("signinBox");
    var signup = document.getElementById("signupBox");

    if(signin.style.display === "block") {
      signup.style.display = "none";
      signin.style.display = "block";
    } else if (signup.style.display === "block") {
      signin.style.display = "none";
      signup.style.display = "block";
    }
    
  }

  async onSubmit(event){
        event.preventDefault();
        const user = {
            "username":this.state.username,
            "password":this.state.password,
            "userType":"Customer"
        }
        console.log(user)
        let valid = await userLogin(user)

        if (valid){
            console.log("User Found :)")
        } else{
            console.log("User Not Found!")
        }
    }


  //THIS RENDER() DISPLAYS ON THE PAGE
  render() {
    return (
      
      <div>
      <div className="signs" id="signinBox">
        <form onSubmit={this.onSubmit}>
        <input className="input" name="username"
           placeholder="username"
           value={this.state.username}
           onChange={this.onChange}
        />
          <br></br>
        <input className="input" name="password"
           placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
        />
        <br></br>
        <input className="login" type="submit" value="login." onSubmit={this.onSubmit}/>
        <button id="signupButton" onClick={this.toggle}>sign up instead?</button>
        </form>
      </div>

      <div className="signs" id="signupBox">
        <p>fat</p>
      </div>
      </div>

    );
  }
}

export default Index;
