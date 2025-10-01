import React from "react";

// Form Submission Through Target
const FormThroughTarget = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <h3>Form Data Collection Through Target</h3>
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


export default FormThroughTarget;
