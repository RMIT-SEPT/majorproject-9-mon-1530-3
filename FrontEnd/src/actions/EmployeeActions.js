import axios from "axios";
import { GET_ERRORS } from "./types";

export async function getAllEmployees(){

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