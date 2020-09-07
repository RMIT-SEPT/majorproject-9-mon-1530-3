

import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { deleteBooking } from '../actions/bookingActions';

class EditOrDeleteBooking extends Component {

    constructor(){
        super();

        this.state = {
            "bookingID":""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    async onSubmit(e){
        e.preventDefault();

        const bookingID = {
            "bookingID":this.state.bookingID
        }

        console.log(bookingID)
        let deleted = await deleteBooking(bookingID);
        
        if(deleted)
        {
            console.log("deleted")
           ReactDOM.render(<div>
                <h2 className="header">Thank you,<br/>booking was successfully cancelled</h2>
                <br/><b>{deleted}</b><br/>
                <a className = "button" href = "/index">return home</a>
                </div>,document.getElementById('booking'))
                
        }
        else{
            
            console.log("error");
            
            ReactDOM.render(<div>
                <h2 className="header">Delete booking failed,<br/>please try again;</h2>
                <br/><br/>
                <a className = "button" href = "/DeleteBooking">reset</a>
                </div>,document.getElementById('booking'));
                
        
        }

    }
    render() {
        return (
            <div><div id = 'booking'>
            <h4>Edit or cancel booking:</h4>
            <div className = "form">
            <form onSubmit = {this.onSubmit}>
            <div className = "form-group">
            <h5>Enter booking number provided to you upon reservation:</h5>
                <input type = "number" className = "form-control form-control-lg"
                placeholder = "Unique booking ID"
                name = "bookingID"
                value = {this.state.bookingID}
                onChange = {this.onChange}/>
            </div><br/>
            <div>
            <input type = "submit" value = "Cancel booking" className = "btn btn-primary btn-block mt-4"></input>
            </div>
            </form>
            </div></div>
                
            </div>
        )
    }
}


export default EditOrDeleteBooking