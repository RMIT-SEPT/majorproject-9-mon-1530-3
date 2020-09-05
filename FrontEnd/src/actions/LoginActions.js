import axios from "axios";
import { GET_ERRORS } from "./types";

export function userLogin(user) {
    try{
        axios.post("http://localhost:8080/api/user/login", {crossdomain: true}, user)
            .then(response => response.json())
            .catch(error => console.log(error));
    } catch (err){
        return{
            type: GET_ERRORS,
            payload: err.response.data
        };
    }
};