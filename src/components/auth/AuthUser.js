import { useState } from "react";
import axios from "axios";

export default function AuthUser(){

    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (token) => {
        localStorage.setItem('token', JSON.stringify(token));

        setToken(token);
    }

    const httpurl = axios.create({
        baseURL:"http://127.0.0.1:8000/api/",
        headers: { 'Authorization':localStorage.getItem(token)},
       
    });

//    const [teacher, setTeacher] =useState()

//     httpurl.get('teacher/list', ).then(res => {
//         console.log(res.data)
//         setTeacher(res.data)
//     }).catch(err => {
//         console.log(err)
//     })

    return {
        setToken:saveToken,
        token,
        getToken,
        httpurl,
    }

}