import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name, email} = user;
    return (
        <div>
            <h1>User Details</h1>
            <h5>{name}</h5>
            <h5>{email}</h5>
        </div>
    );
}

export default UserDetails;
