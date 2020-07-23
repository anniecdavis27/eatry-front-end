import React from "react";
import './SignInForm.css'

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function SignInForm({ input, handleChange, handleSubmit, cancelPath }) {
  return (
    <div className="sign-in-form">
      <form>
        <label className='username'>Username: </label>
        <input
          placeholder="Enter your username"
          type="text"
          name="username"
          value={input}
          onChange={handleChange}
          required
        />
        <br />
        <label className='pw'>Password: </label>
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={input}
          onChange={handleChange}
          required
        /><br />
        <button onClick={handleSubmit} className='enterButton'>Enter</button>
        <Link to={cancelPath}>
        <button className='cancelButton'>Cancel</button>
      </Link>
      </form>
    </div>
  );
}

export default SignInForm;
