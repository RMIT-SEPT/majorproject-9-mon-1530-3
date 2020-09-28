import React, { Component } from 'react'
import ReactDOM from "react-dom";
import {getAllStaff} from '../actions/bookingActions';
import {CreateBooking} from './CreateBooking';
export default class CreateBooking_Service extends Component {

    constructor(){
        super();
this.onChange = this.onChange.bind(this);   
         //set min booking date to today
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;


        this.state = {
            services:[""],
            AllStaffDetails:[""],
            staff: [<option>please first select a service..</option>],
            date:"",
            today:today
        };
        this.getServices = this.getServices.bind(this);
        this.getStaff = this.getStaff.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.getServices();

    }

    onSubmit(e){
        e.preventDefault();
        var employee = document.getElementById('staffSelect').value
        if(employee !== ""){
            var id = employee.substr(0,employee.indexOf(':'));
            var startTime = '06:00:00';
            var endTime = '23:00:00';
            for(var i = 0; i < this.state.AllStaffDetails.length; i++)
            {
                if(this.state.AllStaffDetails[i].employeeID === parseInt(id)){
                    startTime = this.state.AllStaffDetails[i].startTime;
                    endTime = this.state.AllStaffDetails[i].endTime;
                }
            }

            ReactDOM.render(<CreateBooking employeeID = {id} startTime = {startTime} endTime = {endTime} date = {this.state.date}/>,document.getElementById('booking'));

        }
        else{
            alert("no selection made");
           

    }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    async getServices() {

        let allStaff = await getAllStaff();
        let newServices = ["No available services.."];
        let newStaff = ["No available staff.."];
        console.log(allStaff);
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

        var currentService = document.getElementById('selectService').value;

        if(currentService !== "please select.."){

            var newStaff = [];

            for(var i = 0; i < this.state.AllStaffDetails.length; i++){
                var currentStaff = this.state.AllStaffDetails[i];
                if(currentStaff.service === currentService){
                    newStaff.push((currentStaff.employeeID + ": " + currentStaff.firstName + " " + currentStaff.lastName))
                }
            }
            const newStaffMap = newStaff.map((staffMember) => <option key = {staffMember} value = {staffMember}>{staffMember}</option>)

            this.setState({staff:newStaffMap});
        }
        else{
            this.setState({staff:[<option>please first select a service..</option>]});
        }

    }

    render() {
        var allServicesElement = this.state.services.map((service) => <option key = {service} value = {service}>{service}</option>)
        const formStyle = {color:'white', fontSize:'small',width:'100%'};
        return (
            <div id = 'booking'>
            <h3>Select service:</h3>
            <form onSubmit={this.onSubmit}>
                <select id='selectService' onChange={this.getStaff} defaultValue='Please select..' style={formStyle} > 
                <option style={formStyle}>please select..</option>    
                {allServicesElement} 
                </select>
                <br/>
                <select id ='staffSelect' style={formStyle} defaultValue="">
                    {this.state.staff}
                </select>
                <input style={{color:'black', fontSize:'small',width:'100%'}} type = "date" className = "form-control form-control-lg " min={this.state.today}
                    placeholder = "Requested booking date" name = "date" value = {this.state.date} onChange = {this.onChange}/>
                <br/>
                <br/>
               <input className = "btn btn-primary btn-block mt-4" type = "submit"></input>
            </form>

            </div>
        )
    }
}
