import React from 'react';
import {useHistory} from 'react-router-dom';

function Logout() {

    let history = useHistory();

    let logout = () => {
        localStorage.removeItem("token")
        history.push("./login");
    }

    return (
        <>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Logout;