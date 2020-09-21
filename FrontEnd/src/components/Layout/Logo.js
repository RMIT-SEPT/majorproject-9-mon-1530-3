import React, { Component } from 'react'
import logo from '../../images/logo.png'

class Logo extends Component {
    render() {
        return (
            <img id="logoImg" src={logo} alt="Logo that says booqing with a red and blue underline" width="500px"></img>
        )
    }
}

export default Logo;