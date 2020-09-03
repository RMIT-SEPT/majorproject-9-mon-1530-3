

import React, { Component } from 'react'
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

    onSubmit(e){
        e.preventDefault();

        const bookingID = {
            "bookingID":this.state.bookingID
        }

        console.log(bookingID)
        deleteBooking(bookingID);

    }
    render() {
        return (
            <div>
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
            <input type = "submit" value = "Cancel" className = "btn btn-primary btn-block mt-4"></input>
            </div>
            </form>
            </div>
                
            </div>
        )
    }
}


export default EditOrDeleteBooking