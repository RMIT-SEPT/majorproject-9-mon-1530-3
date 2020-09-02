import axios from "axios";
import { GET_ERRORS } from "./types";



export function createBooking(booking) {


    try{
        axios.post("http://localhost:8080/api/booking", booking);
    }
    catch(err){
        return {
            type: GET_ERRORS,
            payload: err.response.data
            
        };
    }
};

export function deleteBooking(booking) {

    try{
        axios.delete("http://localhost:8080/api/booking",booking);
    }
    catch(err){
        return {
            type:GET_ERRORS,
            payload:err.response.data
        }
    }
}


