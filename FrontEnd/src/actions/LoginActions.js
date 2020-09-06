import axios from "axios";
import { GET_ERRORS } from "./types";

export async function userLogin(user) {
    try{
        return await axios.post("http://localhost:8080/api/user/login", user)
            .then(async function (response) {
                return response.data
            })
            .catch(error => {return error})
    } catch (err){
        return{
            type: GET_ERRORS,
            payload: err.response.data
        };
    }
};
