import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise);
    console.log(user)
    const {name, email} = user;
    return (
        <div>
            <p>
                user : {name}
            </p>
            <p>
                email : {email}
            </p>
        </div>
    );
}

export default UserDetails2;
