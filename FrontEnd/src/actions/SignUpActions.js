import axios from "axios";
import { GET_ERRORS } from "./types";

export async function signUp(customer){
    try{
        return await axios.post("http://localhost:8080/api/customer/create", customer)
            .then(async function (response) {
                console.log(response)
            })
            .catch(error => {return error})
    } catch (err){
        return{
            type: GET_ERRORS,
            payload: err.response.data
        };
    }
}