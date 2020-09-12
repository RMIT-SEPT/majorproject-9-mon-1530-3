import React, { Component } from 'react'

export default class CreateBooking_Service extends Component {

    constructor(props){
        super(props);

        this.state = {staff: <option>No staff available..</option>};
        this.getServices = this.getServices.bind(this);
        this.getStaff = this.getStaff.bind(this);

    }

    getServices() {

        var services = ["service1","service2"];


        return services.map((service) => <option key = {service} value = {service}>{service}</option>);

    }

    getStaff() {

        var newStaff = ["No staff available.."];

        if(document.getElementById('selectService').value === 'service1'){
            newStaff = ['John','Not John'];
        }
        else if(document.getElementById('selectService').value === 'service2'){
            newStaff = ['Phil'];
        }

        const newStaffMap = newStaff.map((currentStaff) => <option key = {currentStaff} value = {currentStaff}>{currentStaff}</option>)

        this.setState({staff:newStaffMap});
    }

    render() {

        return (
            <div>
            <h3>Select service:</h3>
            <form onSubmit={this.onSubmit}>
                <select id='selectService' onChange={this.getStaff} defaultValue='Please select..' style={{color:'black',fontSize:'small'}} > 
                <option>please select..</option>    
                {this.getServices()} 
                </select>
                <br/>
                <select style={{color:'black',fontSize:'small'}}>
                    {this.state.staff}
                </select>
                <br/>
                <br/>
               <input className = "btn btn-primary btn-block mt-4" type = "submit"></input>
            </form>

            </div>
        )
    }
}
