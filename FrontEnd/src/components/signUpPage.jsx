import React, { Component } from "react";
import logo from '../images/logo.png'


class Register extends Component {
  state = {};
  render() {
    return (
      <div id="content">
      <div id="logo"><img src={logo} alt="logo that says the text booqing"></img></div>
      
      <div className="signs">
      <form>
        <input className="input" name="username"
           placeholder="username." required
        />
          <br></br>
        <input className="input" name="password"
           placeholder="password." type="password" required
        />
        <br></br>
        <input className="input" name="email"
           placeholder="email." type="email"
        />
        <br></br>
        <input className="input" name="phone"
           placeholder="phone." type="tel"
        />
        <br></br>
        <input className="login" type="submit" value="register." onClick={this.submit}/>
        </form>
        <a href="/index">sign in instead?</a>

      </div>

      </div>
    );
  }
}

export default Register;
