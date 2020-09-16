import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className = "navLinks">
                    <a href = "/index">home</a>
                    <a href = "/AboutUs">about us</a>
                    <a href = "/CreateBooking">book</a>
                </div>
            </nav>
        )
    }
}

export default Nav;