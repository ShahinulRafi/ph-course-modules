import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    console.log(user)
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        console.log(name, email);
        const updatedUser = {name, email};

        //send data to the server
        fetch(``,
            {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(updatedUser)
            }
        )
        .then(res => res.json())
        .then(data => 
        {
            console.log(data);
        })
    }

    return (
        <div>
            <h2>Update a user</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" defaultValue={user.name}/>
                <br />
                <input type="text" name="email" defaultValue={user.email}/>
                <br />
                <input type="submit" value="update"/>
            </form>
        </div>
    );
};

export default UpdateUser;