import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return(
        <div className="signs">
        <form >
        <input className="input" name="username" placeholder="username." /><br></br>
        <input className="input" name="password" placeholder="password." type="password"/> <br></br>
        <input className="submit" type="submit" value="login." onClick={this.submit}/>
        </form>
        <a href="/register">sign up instead?</a>
        </div>
        )
    }
}

export default LoginForm;