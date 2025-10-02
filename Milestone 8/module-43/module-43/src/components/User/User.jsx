import React, { Suspense, useState } from "react";
import { Link } from "react-router";
import UserDetails from "../UserDetails/UserDetails";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const { id, name, email } = user;
  const [showInfo, setShowInfo] = useState(false);
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div>
      <h3>User info</h3>

      <div style={userStyle}>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Link to={`/users/${id}`}>Show Details</Link>
        <button className="border-2 p-2" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "show" : "hide"} info
        </button>
        {showInfo &&
        (
          <Suspense fallback={<span>loading..</span>}>
            <UserDetails2  userPromise={userPromise}></UserDetails2>
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default User;
