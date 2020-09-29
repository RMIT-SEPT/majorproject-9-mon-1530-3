import React, { Component } from 'react'
import {getAllEmployees} from '../actions/EmployeeActions';

export default class EditEmployee_List extends Component {

    constructor(){
        super();

        this.state = {

            employees:["No employees listed"]
        }

        this.getEmployees = this.getEmployees.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getEmployees();

    }

    async getEmployees(){

        let allEmployees = await getAllEmployees();

            this.setState({employees:allEmployees})
    }

    onSubmit(e){
        e.preventDefault();
        var employeeID = document.getElementById('employeeSelect').value
        var currentEmployee = [];
        
        this.state.employees.forEach((employee) =>{

            if(employee.employeeID === parseInt(employeeID)){
                
                currentEmployee = employee;

            }
        })

        var action = document.getElementById('action').value
        //Placeholder action:
        alert("you choose to " + action + " for " + currentEmployee.firstName + " " + currentEmployee.lastName)

    }

    render() {

        var employeesList = this.state.employees.map((employee) => 
        
        <option key={employee.employeeID} value={employee.employeeID}>ID:{employee.employeeID}, {employee.firstName} {employee.lastName}</option>)
        
        const formStyle = {color:'white', fontSize:'small',width:'100%'};

        return (
            <div>
                <h3>Select employee to edit:</h3>
                <div>
                <form onSubmit={this.onSubmit}>
                <select id = 'employeeSelect' style = {formStyle} defaultValue="">
                {employeesList}
                </select>
                <select id = 'action' style = {formStyle} defaultValue="">
                <option key="Edit Roster">Edit Roster</option>
                <option key="Edit Service">Edit Service</option>
                <option key="Remove employee">Remove Employee</option>
                </select>
                <br/><br/>
                <input className = "btn btn-primary btn-block mt-4" type = "submit" value="Continue"></input>
                </form>
                </div>
            </div>
        )
    }
}
