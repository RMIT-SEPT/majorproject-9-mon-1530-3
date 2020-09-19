
import React, { Component } from 'react'

class RegisterForm extends Component {

    submit(event) {
        event.preventDefault();
        var un = document.getElementById("username").value;
        var pw = document.getElementById("password").value;
        var e = document.getElementById("email").value;
        var ph = document.getElementById("phone").value;

        console.log("un: " + un + "| pw:" + pw);
        console.log("email: " + e + "| phone:" + ph);

        if(un === "") {
            console.log("no un supplied");
            window.alert("you must supply a username");
        } else if (pw === "") {
            console.log("no password supplied");
            window.alert("you must supply an email or phone number");
        } else if(e === "" && ph === "") {
            console.log("no email/phone supplied");
            window.alert("you must supply an email or phone number");
        }
    }


    render() {

        return(

        <div className="signs">
        <form onSubmit={this.submit}>

        <input className="input" id="username" placeholder="username." required /><br></br>
        <input className="input" id="password" placeholder="password." type="password" required /><br></br>
        <input className="input" id="email" placeholder="email." type="email" /><br></br>
        <input className="input" id="phone" placeholder="phone." type="tel" /><br></br>

        <input className="submit" type="submit" value="register." onClick={this.submit}/>
        </form>

        <a href="/index">sign in instead?</a>
        </div>

        )
    }
}

export default RegisterForm