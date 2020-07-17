import React from "react";
// import { Link } from "react-router-dom";

function SignInForm({ input, handleChange }) {
  return (
    <div className="sign-in-form">
      <form>
        <label>Username: </label>
        <input placeholder="Enter your username" type="text" value={input} onChange={handleChange} />
        <br />
        <label>Password: </label>
        <input placeholder="Enter your username" type="password" value={input} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SignInForm;
