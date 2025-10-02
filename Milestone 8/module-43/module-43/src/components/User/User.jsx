import React from "react";

const User = ({ user }) => {
  const { name, email } = user;

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
      </div>
    </div>
  );
};

export default User;
