import { useState } from "react";
import axios from "axios";


export default function AuthUser(){

    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (token, user) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
    }

    const httpurl = axios.create({
        baseURL:"http://127.0.0.1:8000/api/",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token ? token : 'No token Found'}`
        }
    });

    return {
        setToken:saveToken,
        setUser:saveToken,
        token,
        user,
        getToken,
        httpurl,
    }
 
}