import React from "react";
// import { Link } from "react-router-dom";

function SignInForm() {
  return (
    <div className="sign-in-form">
      <form>
        <label>Username: </label>
        <input placeholder="Enter your username" type="text" value='' />
        <br />
        <label>Password: </label>
        <input placeholder="Enter your username" type="password" value="" />
      </form>
    </div>
  );
}

export default SignInForm;
