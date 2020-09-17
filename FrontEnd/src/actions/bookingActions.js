import axios from "axios";
import { GET_ERRORS } from "./types";



export async function createBooking(booking) {


    try{
        return await axios.post("http://localhost:8080/api/booking", booking)
            .then(async function(response) {
                return response.data
            })
            .catch(error => {return error})
    }
    catch(err){
        return {
            type: GET_ERRORS,
            payload: err.response.data
            
        };
    }
};

export async function deleteBooking(booking) {

    try{
        return await axios.post("http://localhost:8080/api/booking/delete",booking)
            .then(async function(response){
                return response.data
            })
            .catch(error => {return error})
    }
    catch(err){
        return {
            type:GET_ERRORS,
            payload:err.response.data
        }
    }
}

export async function getAllStaff(){
    try{
        return await axios.get("http://localhost:8080/api/employee/all")
            .then(async function(response){return response.data})
            .catch(error => {return error})
    }
    catch(err){
        return {
            type:GET_ERRORS,
            payload:err.response.data
        }
    }
}