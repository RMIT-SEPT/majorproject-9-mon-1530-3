import axios from "axios";
import { GET_ERRORS } from "./types";

export function userLogin(user) {
    try{
        axios.post("http://localhost:8080/api/user/login", user);
    } catch (err){
        return{
            type: GET_ERRORS,
            payload: err.response.data
        };
    }
};