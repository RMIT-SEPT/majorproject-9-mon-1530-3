import React, { Component } from 'react'
import {getAllStaff} from '../actions/bookingActions';

export default class CreateBooking_Service extends Component {

    constructor(){
        super();

        this.state = {
            services:[""],
            AllStaffDetails:[""],
            staff: [<option>please first select a service..</option>]
            
        };
        this.getServices = this.getServices.bind(this);
        this.getStaff = this.getStaff.bind(this);

        this.getServices();

    }

    async getServices() {

        let allStaff = await getAllStaff();
        let newServices = ["No available services.."];
        let newStaff = ["No available staff.."];

        for(var i = 0; i < allStaff.length; i++){

            newStaff.push(allStaff[i].firstName + " " + allStaff[i].lastName);

            if(!newServices.includes(allStaff[i].service)){
                newServices.push(allStaff[i].service)
            }
        }
        if(newServices.length > 1){
            newServices.shift();
        }
        this.setState({services:newServices, staff:newStaff, AllStaffDetails:allStaff});

    }

    getStaff() {

        if(document.getElementById('selectService').value !== "please select.."){

        var newStaff = this.state.staff;
        newStaff.shift();
        const newStaffMap = newStaff.map((currentStaff) => <option key = {currentStaff} value = {currentStaff}>{currentStaff}</option>)

        this.setState({staff:newStaffMap});
        }
        else{
            this.setState({staff:[<option>please first select a service..</option>]});
        }

    }

    render() {
        var allServicesElement = this.state.services.map((service) => <option key = {service} value = {service}>{service}</option>)

        return (
            <div>
            <h3>Select service:</h3>
            <form onSubmit={this.onSubmit}>
                <select id='selectService' onChange={this.getStaff} defaultValue='Please select..' style={{color:'black',fontSize:'small'}} > 
                <option>please select..</option>    
                {allServicesElement} 
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
