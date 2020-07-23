import React from "react";
import { Link } from "react-router-dom";

const UserForm = ({ user, handleSubmit, handleChange, cancelPath }) => {
  console.log("UserForm", user);

  return (
    <form onSubmit={handleSubmit}>
      <label className='regLabel'>UserName: </label><br />
      <input
        placeholder="username"
        value={user.username}
        name="username"
        onChange={handleChange}
      />
      <br />
      <label className='regLabel'>Email: </label><br />
      <input
        placeholder="email"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
      <br />
      <label className='regLabel'>Password: </label><br />
      <input
        placeholder="password"
        value={user.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <label className='regLabel'>Confirm Password: </label><br />
      <input
        placeholder="confirm password"
        value={user.password2}
        name="password2"
        onChange={handleChange}
      /><br />

      <button type="submit" className='regsubmit'>Submit</button>
      <Link to={cancelPath}>
        {" "}
        <button className='regcancel'>Cancel</button>
      </Link>
    </form>
  );
};

export default UserForm;
