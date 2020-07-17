import React from "react";
// import { Link } from "react-router-dom";

function SignInForm({ input, handleChange }) {
  return (
    <div className="sign-in-form">
      <form>
        <label>Username: </label>
        <input placeholder="Enter your username" type="text" name="username" value={input} onChange={handleChange} required/>
        <br />
        <label>Password: </label>
        <input placeholder="Enter your username" type="password" name="password" value={input} onChange={handleChange} required />
      </form>
    </div>
  );
}

export default SignInForm;
