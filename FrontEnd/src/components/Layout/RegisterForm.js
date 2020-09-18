
import React, { Component } from 'react'

class RegisterForm extends Component {

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