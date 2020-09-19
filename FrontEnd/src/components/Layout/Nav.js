import React, { Component } from "react";
import logo from "../../images/logo-mini.png";
import menu from "../../images/menu.png";
import { PopupMenu } from "./PopupMenu";

class Nav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  //displayMenu() {
  // var m = document.getElementById("menuContent");
  // m.style.display = "block";
  //}

  //undisplayMenu(event) {
  // var m = document.getElementById("menuContent");
  // m.style.display = "none";
  //}

  render() {
    return (
      <div>
        <nav className="menu-bar">
          <div id="navibar">
            <div
              className="menu-icon"
              id="menuIcon"
              onClick={this.handleClick}
              //onMouseOut={this.undisplayMenu}
            >
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
              <ul
                className={this.state.clicked ? "nav-menu active" : "nav-menu"}
              >
                {PopupMenu.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div id="navlinks">
              <a href="/login">home</a>
              <a href="/about">about us</a>
              <a href="/book">book</a>
            </div>
            <a href="/">
              <img src={logo} alt="booqing logo"></img>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
