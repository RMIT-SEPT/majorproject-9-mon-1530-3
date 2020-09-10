import React, { Component } from 'react'

export default class CreateBooking_Service extends Component {

    constructor(){
        super();

        this.getServices = this.getServices.bind(this);


    }

    getServices() {

        return ["service1","service2"];

    }



    render() {


        const services = this.getServices().map((service) =>

            <option value = "{service}">{service}</option>
        );
        return (
            <div id = 'selectService'>
            <h3>Select service:</h3>
            <form>
                <select style={{color:'black'}}>{services}</select>
            </form>

            </div>
        )
    }
}
