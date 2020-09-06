import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {createBooking} from '../actions/bookingActions';

class CreateBooking extends Component {
    constructor(){
        super();

        this.state = {
            "customerID":"",
            "employeeID":"",
            "date":"",
            "time":"",
            "confirmed":""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);;

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmit(e){

        e.preventDefault();

        const newBooking = {
        "customerID":this.state.customerID,
        "employeeID":this.state.employeeID,
        "date":this.state.date,
        "time":this.state.time,
        "confirmed":false
    }
        console.log(newBooking);

        let booking = await createBooking(newBooking)

        if(booking){
            console.log(booking.bookingID);
            ReactDOM.render(<div>
                <h2 className="header">Thank you,<br/>your booking number is:</h2>
                <br/><b>{booking.bookingID}</b><br/>
                <a className = "button" href = "/index">return home</a>
                </div>,document.getElementById('booking'))
        }
        else{
            console.log("error");
            ReactDOM.render(<div>
                <h2 className="header">Booking failed,<br/>please try again;</h2>
                <br/><br/>
                <a className = "button" href = "/CreateBooking">reset</a>
                </div>,document.getElementById('booking'))
        }


    }
    render() {
        return (
            <div>
            <div id = 'booking'> 
                <h4>Create Booking:</h4>
                <div className = "form">
                <form onSubmit={this.onSubmit}>
                <div className = "form-group"><h5>User ID: (no ID? create account<a href="/Register"> here</a>)</h5>
                    <input type = "number" className = "form-control form-control-lg "
                        placeholder = "Unique user ID" name = "customerID" value = {this.state.customerID}  onChange = {this.onChange} />
                </div>
                <div className = "form-group"><h5>Employee ID:</h5>
                    <input type = "number" className = "form-control form-control-lg "
                        placeholder = "Unique employee ID" name = "employeeID" value = {this.state.employeeID} onChange = {this.onChange}/>
                </div>
                <div className = "form-group"><h5>Requested date & time:</h5>
                    <input type = "date" className = "form-control form-control-lg "
                        placeholder = "Requested booking date" name = "date" value = {this.state.date} onChange = {this.onChange}/>
                        <input type = "time" className = "form-control form-control-lg "
                        placeholder = "Requested booking time" name = "time" value = {this.state.time} onChange = {this.onChange}/>
                </div><br/>
                <input type = "submit" className = "btn btn-primary btn-block mt-4"></input>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default CreateBooking
