import React, { Component } from 'react'


class CreateBooking extends Component {
    render() {
        return (
            <div>
                <h4>Create Booking:</h4>
                <div className = "form">
                <form>
                <div className = "form-cell"><h5>User ID:</h5>
                    <input type = "text" className = "form-control form-control-lg "
                        placeholder = "Unique user ID" name = "customerID"/>
                </div>
                <div className = "form-cell"><h5>Employee ID:</h5>
                    <input type = "text" className = "form-control form-control-lg "
                        placeholder = "Unique employee ID" name = "employeeID"/>
                </div>
                <div className = "form-cell"><h5>Requested date & time:</h5>
                    <input type = "datetime-local" className = "form-control form-control-lg "
                        placeholder = "Requested booking date" name = "date"/>
                </div><br/>
                <input type = "submit" className = "btn btn-primary btn-block mt-4"></input>
                </form>
                </div>
            </div>
        )
    }
}

export default CreateBooking
