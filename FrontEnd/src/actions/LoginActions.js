import axios from "axios";
import { GET_ERRORS } from "./types";

export function userLogin(user) {
    try{

        axios.defaults.withCredentials = false;
        axios.post("http://localhost:8080/api/user/login", user)
            .then(response => {return response})
            .catch(error => {return error})
    } catch (err){
        return{
            type: GET_ERRORS,
            payload: err.response.data
        };
    }
};
