import React, { Component } from 'react'
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
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){

        e.preventDefault();

        const newBooking = {
        "customerID":this.state.customerID,
        "employeeID":this.state.employeeID,
        "date":this.state.date,
        "time":this.state.time,
        "confirmed":false
    }
        console.log(newBooking);
        createBooking(newBooking);


    }
    render() {
        return (
            <div>
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
        )
    }
}

export default CreateBooking
