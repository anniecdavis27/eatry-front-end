import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import SignInForm from "../Components/SignInForm";

function SignIn(props) {
  const [input, setInput] = useState({ username: "", password: "" });
  const [errors, setError] = useState([]);
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: "http://localhost:4000/api/user/login",
      method: "POST",
      data: input,
    })
      .then((res) => {
        setUser({ createdItem: res.data.user });
        props.history.push("/sign-in");
        console.log(user);
        setError(res.data.message);
      })
      .catch(console.error);
  };

  return (
    <div className="sign-in">
      <h1>EATR.Y</h1>
      <SignInForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
      <button onClick={handleSubmit}>Enter</button>
      <h1>
        {errors.message === "Login Successful" ? (
          <Redirect
            to={{
              pathname: "/dash",
              state: { msg: "You have signed in successfully" },
            }}
          />
        ) : (
          errors.message
        )}
      </h1>
    </div>
  );
}

export default SignIn;
