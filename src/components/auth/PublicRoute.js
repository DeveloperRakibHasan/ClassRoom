import React from 'react'
import { Navigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function PublicRoute({ children }) {
    
    const { getToken } = AuthUser();
    

    return !getToken() ? (children) : (<Navigate to="/" />)
}