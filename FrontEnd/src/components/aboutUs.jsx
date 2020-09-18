import React, { Component } from "react";
import Logo from "./Layout/Logo"

class About extends Component {

    render() {
        return(
            <div className="aboutContent">
            <div id="logo" align="center"><Logo /></div>
            <br></br>
            <hr></hr>
            <h1><i>welcome.</i></h1>
            <hr></hr>
            <p>welcome to booqing - a pet grooming salon and the best place to wash your pets!</p>
            <p>we do washes, trims, haircuts, claw trims and anything you could ever want for your pet
                for the best prices!
            </p>
            <hr></hr>
            <div className="contactDetails">
            <p>Phone: 03 1234 5678</p>
            <p>Email: business@booqing.com</p>
            <p>Address: 123 Random Street,</p>
            <p>3000 Melbourne Victoria</p>
            </div>
            </div>
        )
    }

}

export default About;