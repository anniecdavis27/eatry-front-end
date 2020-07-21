import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import UserForm from "./UserForm";
import axios from "axios";

const Register = (props) => {
  console.log("ItemCreate props", props);
  const [errors, setError] = useState(['error']);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
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
    console.log("handleSubmit");
    axios({
      url: "http://localhost:4000/api/user/register",
      method: "POST",
      data: input,
    })
      .then((res) => {
        setUser({ createdItem: res.data.user });
        props.history.push("/user/register");
        console.log(res.data);
        setError(res.data);
      })
      .catch(console.error);
  };
  console.log("error", errors);

  let errorArray = []

  if(errors.length >= 1) {
    errorArray = errors.map((element, index) => {
    return <h4>{element.message}</h4>;
    });
  } else if(errors.length ) {
    errorArray = []
  }

  if (errorArray.length < 1) {
    return( <Redirect
    to={{ pathname: "/sign-in", state: { msg: "Registration Successful!" } }}
  /> )
  }
   
  console.log(errorArray)

  return (
    <>
      <h1>Register</h1>
      {errorArray}
      <UserForm
        user={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />{" "}
      <br />
      <Link to="/">Home</Link>
      <br /> 
      <br />
      <Link to="/sign-in"> Login </Link>
    </>
  );
};

export default Register;
