import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-sm">
                <div className = "container">
                    <a className = "navbar-brand" href= "/index"> Home </a>
                    <div className = "navbar-brand">
                            <a className = "nav-link" href = "/CreateBooking_Service"> Create Booking </a>
                            <a className = "nav-link" href = "/deleteBooking"> Edit/Cancel Booking </a>
                    </div>
                    <div className = "navbar-right">
                        <div>
                            <a className = "nav-link" href = "/login">Login</a>
                        </div>
                        <div>
                            <a className = "nav-link" href = "/Register">Register</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;