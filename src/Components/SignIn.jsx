import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import SignInForm from "../Components/SignInForm";

function SignIn() {
  const [input, setInput] = useState({});
  const [navigate, isNavigate] = useState();

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.username === "acd27" && input.password === "password") {
      isNavigate(true);
    } else {
      isNavigate(false);
    }
  };

  if (navigate === true) {
    return (
      <Redirect
        to={{
          pathname: "/dash",
          state: { msg: "You have successfully signed in!" },
        }}
      />
    );
  }

  return (
    <div className="sign-in">
      <h1>EATR.Y</h1>
      <SignInForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <button onClick={handleSubmit}>Enter</button>
      <h4>
        {navigate === false
          ? "the credentials you entered are incorrect, please try again."
          : ""}
      </h4>
    </div>
  );
}

export default SignIn;
