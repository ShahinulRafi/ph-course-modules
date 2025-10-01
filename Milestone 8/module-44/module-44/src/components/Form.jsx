import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="text" placeholder="email" name="email" />
        <br />
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default Form;
