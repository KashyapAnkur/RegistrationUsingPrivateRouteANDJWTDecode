import React from 'react';
import {Redirect, Route} from 'react-router-dom';


const PrivateRoute = ({children, ...rest}) => {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
    let isValid = false;
    if (token)
    isValid = true;

    return (
        <Route {...rest} render={ () => {
            return isValid ? children: <Redirect to={{pathname: '/login'}} />
        }} />
    )
}

export default PrivateRoute;