import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('user');
        return userString;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (token, user) => {
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/dashboard');

    }

    const httpurl = axios.create({
        baseURL:"http://127.0.0.1:8000/api/studentlog",
        // headers:{
        //     "Content-type" : "aplication/json",
        //     "Authorization" : `${token ? token : 'No token Found'}`
        // }
        headers: { 'Authorization':localStorage.getItem(token)}
       
    });

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        getUser,
        httpurl
    }

}