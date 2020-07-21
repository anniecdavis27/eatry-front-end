import React from "react";
import { Link } from "react-router-dom";

function SignInForm({ input, handleChange, handleSubmit, cancelPath }) {
  return (
    <div className="sign-in-form">
      <form>
        <label>Username: </label>
        <input
          placeholder="Enter your username"
          type="text"
          name="username"
          value={input}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password: </label>
        <input
          placeholder="Enter your username"
          type="password"
          name="password"
          value={input}
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit}>Enter</button>
        <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
      </form>
    </div>
  );
}

export default SignInForm;
