import React, { Component } from "react";
import logo from "../../images/logo-mini.png";
import { PopupMenu } from "./PopupMenu";

class Nav extends Component {
  state = { 
      clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

//   window.addEventListener('storage', function(e) {  

//   });

  render() {
    
    return (
      <div>
        <nav className="menu-bar">
          <div id="navibar">
            <div
              className="menu-icon"
              id="menuIcon"
              onClick={this.handleClick}
            >
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
              <ul
                className={this.state.clicked ? "nav-menu active" : "nav-menu"}
              >
                {PopupMenu.map((item) => {
                  return (
                    <a className={item.cName} href={item.url}>
                        {item.title}
                      </a>
                  );
                })}
                <a className="nav-links" href="/login" onClick={this.logout}>logout.</a>
              </ul>
            </div>
            <div id="navlinks">
              <a href="/login">home</a>
              <a href="/about">about us</a>
              <a href="/CreateBooking_Service">book</a>
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
