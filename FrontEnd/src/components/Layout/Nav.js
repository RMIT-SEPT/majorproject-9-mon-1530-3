import React, { Component } from 'react'
import logo from '../../images/logo-mini.png'
import menu from '../../images/menu.png'
import Popup from './PopupMenu'

class Nav extends Component {

    displayMenu() {
        var m = document.getElementById("menuContent");
        m.style.display = "block";
    }

    undisplayMenu(event) {
        var m = document.getElementById("menuContent");
        m.style.display = "none";
    }

    render() {
        return (
            <div>
            <nav>
                <div id="navibar">
                <div id="menuIcon" onClick={this.displayMenu} onMouseOut={this.undisplayMenu}><img src={menu} alt="menu icon"></img></div>
                <div id="navlinks">
                <a href = "/login">home</a>
                <a href = "/about">about us</a>
                <a href = "/book">book</a>
                </div>
                <a href="/"><img src={logo} alt="booqing logo"></img></a>
                </div>
            </nav>
            <Popup />
            </div>
        )
    }
}

export default Nav;