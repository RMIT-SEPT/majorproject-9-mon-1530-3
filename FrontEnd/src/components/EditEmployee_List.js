import React, { Component } from 'react'
import { isThisParameter } from 'tsutils';
import {getAllEmployees,removeEmployee, updateEmployee} from '../actions/EmployeeActions';

export default class EditEmployee_List extends Component {

    constructor(){
        super();

        this.state = {

            employees:["No employees listed"],
            showServicesForm:false,
            currentEmployee:{},
            firstName:"",
            lastName:"",
            email:"",
            service:"",
            endTime:"",
            startTime:"",
            admin:false
        }

        this.getEmployees = this.getEmployees.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getEmployees();
        this.ServicesForm = this.ServicesForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.updateService = this.updateService.bind(this);
        this.updateEmployeeAction = this.updateEmployeeAction.bind(this);
        this.rosterForm = this.rosterForm.bind(this);
        this.updateRoster = this.updateRoster.bind(this);
    }

    async getEmployees(){

        let allEmployees = await getAllEmployees();

            this.setState({employees:allEmployees})
    }

    onSubmit(e){
        e.preventDefault();
        var employeeID = document.getElementById('employeeSelect').value
        var currentEmployee = {};
        
        this.state.employees.forEach((employee) =>{

            if(employee.employeeID === parseInt(employeeID)){
                currentEmployee = employee
                this.setState({currentEmployee:currentEmployee,
                    firstName:currentEmployee.firstName,
                    lastName:currentEmployee.lastName,
                    email:currentEmployee.email,
                    service:currentEmployee.service,
                    startTime:currentEmployee.startTime,
                    endTime:currentEmployee.endTime,
                    admin:currentEmployee.admin})
            }
        })

        var action = document.getElementById('action').value


        if(action === "Remove Employee")
        {
            this.setState({showServicesForm:false,showRosterForm:false})
            this.deleteEmployee(currentEmployee)
        }
        else if(action === "Edit Employee detail or Service"){
            console.log(currentEmployee)
            this.setState({showServicesForm:true, showRosterForm:false})
        }
        else if(action === "Edit Roster"){

            this.setState({showServicesForm:false, showRosterForm:true})
        }

    }

    async deleteEmployee(employee){

        if( await removeEmployee(employee)){
            
            alert("employee deleted")
            window.location.reload(false);
        }
        else{
            alert("Error in deleting")
        }
        return true;

    }

    updateService(e){
        e.preventDefault();

        this.updateEmployeeAction();

    }

    async updateEmployeeAction(){

        if(document.getElementById('action').value === "Edit Employee detail or Service"){
        let adminResult = document.getElementById('admin').value
        console.log(adminResult)
        var adminBool = false;
        if(adminResult === 'Yes'){
            adminBool = true;
        }
    }

        const updatedEmployee = {
            
            employeeID:this.state.currentEmployee.employeeID,
            username:this.state.currentEmployee.username,
            password:this.state.currentEmployee.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            service:this.state.service,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
            admin:adminBool

        }
        console.log(updatedEmployee)
        let result = await updateEmployee(updatedEmployee)
        if(result)
        {
            alert("Employee updated")
            window.location.reload(false);
        }
        else{
            alert("Error in employee details")
        }

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }

    ServicesForm(){

        const labelStyle = {fontSize:'small',width:'50%',float:'left'};
        const inputStyle = {fontSize:'small', width:'50%',float:'right',backgroundColor:'white',color:'black'};

        return (
        <div>
        <br></br>
            <form style ={{width:'100%'}} onSubmit={this.updateService}>

            <label style = {labelStyle}>First Name:</label>
            <input  style = {inputStyle} type="text" name="firstName" key = {this.state.firstName} value={this.state.firstName} onChange = {this.onChange}/>
            
            <br></br>

            <label style = {labelStyle} >Last Name:</label>
            <input style = {inputStyle} type="text" name="lastName" defaultValue= {this.state.lastName} onChange = {this.onChange}/>
            
            <br></br>
            

            <label style = {labelStyle} >Email:</label>
            <input style = {inputStyle} type="text" name="email" defaultValue= {this.state.email} onChange = {this.onChange}/>
            
            <br></br>

            <label style = {labelStyle}>Current service:</label>
            <input style={inputStyle} type="text" name="service" defaultValue= {this.state.service} onChange = {this.onChange}/>
            
            <br></br>
            <label style = {labelStyle}>Allow admin privledges?</label>
            <select id = 'admin' style = {inputStyle}>
            <option key="true">Yes</option>
            <option key="false">No</option>
            </select>

            <br></br>

            <input className = "btn btn-primary btn-block mt-4" type = "submit" value="Save"></input>

            </form>
        </div>);
    }

    updateRoster(e){
        e.preventDefault()

        console.log(this.state.startTime)
        console.log(this.state.endTime)

        this.updateEmployeeAction()
    }

    rosterForm(){
        const labelStyle = {fontSize:'small',width:'50%',float:'left'};
        const inputStyle = {fontSize:'small', width:'50%',float:'right',backgroundColor:'white',color:'black'};
        
        return (
            <div>
            <br></br>
            <label style={{fontSize:'medium'}}>Start and finish times for employee's working week:</label>
            <br></br>
        <form onSubmit = {this.updateRoster}>

        <label style = {labelStyle}>Start time:</label>
        <input type="time" name="startTime" style ={inputStyle} max={this.state.endTime} defaultValue = {this.state.startTime} onChange={this.onChange} step="2"></input>

        <br></br>
        <label style = {labelStyle}>End time:</label>
        <input type="time" name="endTime" style ={inputStyle} min={this.state.startTime} defaultValue = {this.state.endTime} onChange={this.onChange} step="2"></input>

        <br></br>
        <input className = "btn btn-primary btn-block mt-4" type = "submit" value="Save"></input>
        
        </form>
        </div>
        );

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
                <option key="Edit Service">Edit Employee detail or Service</option>
                <option key="Remove Employee">Remove Employee</option>
                </select>
                <br/><br/>
                <input className = "btn btn-primary btn-block mt-4" type = "submit" value="Continue"></input>
                </form>
                {this.state.showServicesForm ? this.ServicesForm() : null}
                {this.state.showRosterForm ? this.rosterForm() : null}
                <br></br>

                </div>
            </div>
        )
    }
}
