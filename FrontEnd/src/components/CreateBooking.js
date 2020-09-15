import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {createBooking} from '../actions/bookingActions';

export class CreateBooking extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.props.employeeID)
        //set min booking date to today
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0
        var yyyy = today.getFullYear();
        if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 

            today = yyyy+'-'+mm+'-'+dd;

        const startTime = new Date("Jan 01, 1970 " + this.props.startTime);
        const endTime = new Date("Jan 01, 1970 " + this.props.endTime);

        //Creates booking times at 30m intervals between start and end time:
        const timeSlots = this.getTimes(startTime,endTime);
        //create array of options for form
        //For future update: add filter for existing booking times to not show
        var timeSlotOptions = timeSlots.map(function(time,i){
            if(time.getMinutes() === 0)
            {
             console.log(time.getHours()+":00");
             return <div>
             <input name='time' onChange={this.onChange} type='radio' key={time.getHours()+":00"} value={time.getHours()+":00"}/>
             <label style={{background:'white',color:'black'}}>{time.getHours()+":00"}</label>
                    </div>
            }
            else
            {
             console.log(time.getHours()+":"+time.getMinutes());
             return <div>
             <input name='time' onChange={this.onChange} type='radio' key={time.getHours()+":"+time.getMinutes()} value={time.getHours()+":"+time.getMinutes()}/>
             <label style={{background:'white',color:'black'}}>{time.getHours()+":"+time.getMinutes()}</label>
                    </div>
                }
        },this)
        

        this.state = {
            "customerID":"",
            "employeeID":this.props.employeeID,
            "date":"",
            "time":"",
            "confirmed":"",
            timeSlots:timeSlotOptions,
            today:today
        };


    }

    getTimes(startTime, stopTime) {
        var dateArray = [];
        var currentDate = startTime;
        var previousDate = currentDate;
        while (currentDate <= stopTime) {
            dateArray.push(new Date (currentDate));
            previousDate = currentDate;
            currentDate = new Date(previousDate.getTime() + 30*60000);
        }
        dateArray.pop();
        return dateArray;
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmit(e){

        e.preventDefault();

        const newBooking = {
        "customerID":this.state.customerID,
        "employeeID":this.state.employeeID,
        "date":this.state.date,
        "time":this.state.time,
        "confirmed":false
    }
        console.log(newBooking);

        let bookingID = await createBooking(newBooking)

        if(bookingID){
            console.log(bookingID);
            ReactDOM.render(<div style={{background:'white', color:'black'}}>
                <h2 className="header">Thank you,<br/>your booking number is:</h2>
                <b>{bookingID}</b><br/>
                <br/>
                date: {newBooking.date}
                <br/>
                time: {newBooking.time}
                <br/>
                <a className = "button" href = "/index">return home</a>
                </div>,document.getElementById('booking'))
        }
        else{
            console.log("error");
            ReactDOM.render(<div>
                <h2 className="header">Booking failed,<br/>please try again;</h2>
                <br/><br/>
                <a className = "button" href = "/CreateBooking">reset</a>
                </div>,document.getElementById('booking'))
        }


    }
    render() {

        const formStyle = {color:'black', fontSize:'small',width:'100%'};
        return (
            <div>
            <div id = 'booking'> 

                <h4> <a href = "/CreateBooking_Service">back to pick service</a> </h4>

                <h4>Create Booking:</h4>
                <div className = "form">
                <form onSubmit={this.onSubmit}>
                <div className = "form-group"><h5>User ID: (no ID? create account<a href="/Register"> here</a>)</h5>
                    <input style={formStyle} type = "number" className = "form-control form-control-lg "
                        placeholder = "Unique user ID" name = "customerID" value = {this.state.customerID}  onChange = {this.onChange} />
                </div>
                <div className = "form-group"><h5>Requested date:</h5>
                    <input style={formStyle} type = "date" className = "form-control form-control-lg " min={this.props.today}
                        placeholder = "Requested booking date" name = "date" value = {this.state.date} onChange = {this.onChange}/>
                   <br/>
                   <div style={{width:'100%'}}>
                        <div style={{float:"left"}}>{this.state.timeSlots.slice(0,this.state.timeSlots.length/2)}</div>
                        <div style={{float:"right"}}>{this.state.timeSlots.slice(this.state.timeSlots.length/2,this.state.timeSlots.length)}</div>
                   </div>
                </div><br/>
                <input className = "btn btn-primary btn-block mt-4" type = "submit"></input>
                </form>
                </div>
                </div>
            </div>
        )
    }
}

export default CreateBooking
