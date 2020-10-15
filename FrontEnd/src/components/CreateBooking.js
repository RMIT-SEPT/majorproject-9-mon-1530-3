import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createBooking } from "../actions/bookingActions";

export class CreateBooking extends Component {

  constructor(props) {
    super(props);

    let allBookings = this.props.existingBookings;
    let existingBookings = [];
    for(var i = 0; i < allBookings.length; i++){
      if(allBookings[i].employeeID === parseInt(this.props.employeeID)){
        if(allBookings[i].date === this.props.date){

            existingBookings.push(allBookings[i].time);
    
        }
      }

    }
    console.log(existingBookings);
   
    console.log(this.props.employeeID);
    this.state = {
      customerID: "1", //temporary
      employeeID: this.props.employeeID,
      date: this.props.date,
      time: "",
      confirmed: "",
      timeSlots:"",
      existingBookings:existingBookings,
      timeSlotOptions:[""]
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getTimeSlots = this.getTimeSlots.bind(this);

  }

  getTimes(startTime, stopTime) {
    var dateArray = [];
    var currentDate = startTime;
    var previousDate = currentDate;
    while (currentDate <= stopTime) {
      dateArray.push(new Date(currentDate));
      previousDate = currentDate;
      currentDate = new Date(previousDate.getTime() + 30 * 60000);
    }
    dateArray.pop();
    return dateArray;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();

    var time = this.state.time+":00";
    
    if(time.indexOf(":") === 1){
        var newTime = "0" + time;
        time = newTime;
    }


    const newBooking = {
      customerID: this.state.customerID,
      employeeID: this.state.employeeID,
      date: this.state.date,
      time: time,
      confirmed: false,
    };
    console.log(newBooking);

    let bookingID = await createBooking(newBooking);

    if (bookingID) {
      console.log(bookingID);
      ReactDOM.render(
        <div>
        <div style={{ background: "white", color: "black" }}>
          <h2>
            Thank you,
            <br />
            your booking number is:
          </h2>
          <b>{bookingID}</b>
          <br />
          <br />
          date: {newBooking.date}
          <br />
          time: {newBooking.time}
          <br />
          <a className="button" href="/index">
            return home
          </a></div>
        </div>,
        document.getElementById("booking")
      );
    } else {
            alert("Booking error, not created, please try again later.")
            window.location.reload(false);
    }
  }

  getTimeSlots(){

    const startTime = new Date("Jan 01, 1970 " + this.props.startTime);
    const endTime = new Date("Jan 01, 1970 " + this.props.endTime);
    //Creates booking times at 30m intervals between start and end time:
    const timeSlots = this.getTimes(startTime, endTime);
    //create array of options for form
    //For future update: add filter for existing booking times to not show
    const existingBookings = this.state.existingBookings;
    var timeSlotOptions = timeSlots.map(function (time, i) {

      let minutes = time.getMinutes();
      let minutesString = ""
      let hours = time.getHours();
      let hoursString = ""

      if(minutes === 0){
        minutesString = ":00"
      }
      else{
        minutesString = ":"+minutes.toString()
      }

      if(hours < 10){
        hoursString = "0" + hours.toString();
      }
      else{
        hoursString = hours.toString();
      }

      let timeString = hoursString+minutesString;
        if(!(existingBookings.includes(timeString+":00"))) 
        {
          return (
            <div key={timeString}>
              <input
                name="time"
                onChange={this.onChange}
                type="radio"
                key={timeString}
                value={timeString}
              />
              <label>
                {timeString}
              </label>
            </div>
          );
        }
      }, this);

      var removeElement = function(array, val) {
        for (var i=array.length - 1; i >=0; i--) {
            if (array[i] == val) {
                array.splice(i,1);
            }
        }
        return array.length;
    };

    removeElement(timeSlotOptions,undefined);

    if(timeSlotOptions.length > 0 && timeSlotOptions[0]!==undefined){
      return<div style={{width:'100%'}} className="radio-toolbar">
      <div style={{float:"left"}}>{timeSlotOptions.slice(0,timeSlotOptions.length/2)}</div>
      <div style={{float:"right"}}>{timeSlotOptions.slice(timeSlotOptions.length/2,timeSlotOptions.length)}</div>
      </div>
    }else{
      return (<div><h4>No available times left</h4></div>)
    }
  }

  render() {
    const timeSlotsOptions = this.getTimeSlots();
    return (
        <div>
        <div id = 'booking'> 

            <h4> <a href = "/CreateBooking_Service">back to pick service</a> </h4>

            <h4>Create Booking for {this.props.date}:</h4>
            <div className = "form">
            <form onSubmit={this.onSubmit}>
            <div className = "form-group">
            </div>
            <div className = "form-group">
            {timeSlotsOptions}
            </div><br/>
            <input className = "btn btn-primary btn-block mt-4" type = "submit"></input>
            </form>
            </div>
            </div>
        </div>
    )
}
}

export default CreateBooking;
