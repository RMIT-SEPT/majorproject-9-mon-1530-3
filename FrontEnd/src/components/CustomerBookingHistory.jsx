import React, { Component } from "react";
import {getAllBookings} from "../actions/bookingActions";

class CustomerBookingHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            bookings: [],
            filterBookings: []
        }
    }

    componentDidMount() {

        var filtered = [];

        this.state.bookings.forEach((booking) => {
            if(booking.customerID === sessionStorage.getItem("username")) {
                filtered.push(booking)
            }
        })

        this.setState({filterBookings:filtered});

    }

    fetchData() {

    }


    render() {

        let list = this.state.bookings.map((booking) => {
            return <li>"Date of Booking: " {booking.date}</li>
        });

        let beees = <p>bee</p>
        
        return(
            <div>
                <p>LIST OF ALL BOOKINGS</p>
                {list}
                {beees}
            </div>
        )
    }

}

export default CustomerBookingHistory;