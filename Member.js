import React,{useState, useEffect} from 'react';
import Logout from './Logout';
import {decoded} from './TokenDetails';

function Member(){

    const [user,setUser] = useState(null);

    useEffect( () => {
        setUser(decoded && decoded.user);
    }, [user]);

    return (
        <>
            {user && <Logout />}<br /><br />
            <h2>Member</h2>
            User Email ID: {user && user.email}<br /><br />
            User ID: {user && user.id}<br /><br />
        </>
    )
}

export default Member;