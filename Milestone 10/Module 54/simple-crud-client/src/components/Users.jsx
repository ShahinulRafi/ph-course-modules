import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({usersPromise}) => {
  const initialUsers = use(usersPromise);
  console.log("initial user", initialUsers);
  const [users, setUsers] = useState(initialUsers);

  const handleDeleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log('after delete', data);
      if(data.deletedCount){
        alert('deleted successfully');
        const remainingUsers = users.filter(user => user._id !== id)
        setUsers(remainingUsers)
      }
    })
  }
    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log(name, email);
        const newUser = {name, email}

        //save this user data to the database (via server)
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after saving user', data)
                newUser._id = data.insertedId;
                const newUsers = [...users, newUser];
                setUsers(newUsers);
                if(data.insertedId){
                   alert("User added successfully");
                    e.target.reset();
                }
            })
    }
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="add user" />
      </form>
      <p>-------------------</p>
      <div>
        {
          users.map(user =>
          <p>{user.name} - {user.email}
          <Link to={`/users/${user._id}`}>Details</Link>
          <Link to={`/update/${user._id}`}>Update</Link>
          <button onClick={() => handleDeleteUser(user._id)}>x</button>
          </p>
          )
        }
      </div>
    </div>
  );
};

export default Users;
