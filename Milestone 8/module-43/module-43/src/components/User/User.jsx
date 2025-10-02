import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, email } = user;

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
      </div>
    </div>
  );
};

export default User;
