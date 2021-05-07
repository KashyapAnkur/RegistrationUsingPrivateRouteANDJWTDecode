import React,{useEffect,useState} from 'react';
import Logout from './Logout';
import {decoded} from './TokenDetails';

function UserProfile() {

    const [user,setUser] = useState(null);

    useEffect( () => {
        setUser(decoded && decoded.user);
    }, []);

    return (
        <>
            <Logout /><br /><br />
            <h2>User Profile</h2>
            User Email ID: {user && user.email}<br /><br />
            User ID: {user && user.id}
        </>
    )
}

export default UserProfile;