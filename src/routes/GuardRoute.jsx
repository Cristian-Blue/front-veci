import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';


const GuardRoute = ({children}) =>{
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/" />;
}
export default GuardRoute;