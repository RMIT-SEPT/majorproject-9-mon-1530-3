import React, { Component } from 'react'
import logo from '../../images/logo-mini.png'
import menu from '../../images/menu.png'

class Nav extends Component {
    render() {
        return (
            <nav>
                <div id="navibar">
                <img src={menu}></img>
                <div id="navlinks">
                <a href = "/index">home</a>
                <a href = "/about">about us</a>
                <a href = "/book">book</a>
                </div>
                <img src={logo}></img>
                </div>
            </nav>
        )
    }
}

export default Nav;