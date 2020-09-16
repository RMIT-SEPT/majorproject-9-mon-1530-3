import React, { Component } from "react";
import logo from '../images/logo.png'

class About extends Component {

    render() {
        return(
            <div className="aboutContent">
            <div id="logo" align="center"><img src={logo} alt="logo that says the text booqing"></img></div>
            <br></br>
            <hr></hr>
            <h1><i>welcome.</i></h1>
            <hr></hr>
            <p>welcome to booqing - a pet grooming salon and the best place to wash your pets!</p>
            <p>we do washes, trims, haircuts, claw trims and anything you could ever want for your pet
                for the best prices!
            </p>
            </div>
        )
    }

}

export default About;