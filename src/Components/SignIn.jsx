import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignInForm from '../Components/SignInForm'

function SignIn() {

  const [input, setInput] = useState({ name: "", urlLive: "", urlGit: "" });

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  console.log(input)

  return (
    <div className="sign-in">
      <h1>EATR.Y</h1>
      <SignInForm 
      handleChange={handleChange}
      // handleSubmit={handleSubmit}
      />
      <Link to='/dash'><button>Enter</button></Link>
    </div>
  );
}

export default SignIn;