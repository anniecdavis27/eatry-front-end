import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import UserForm from "./UserForm";
import axios from "axios";
import './Register.css'


const Register = (props) => {
  const [errors, setError] = useState(['error']);
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [user, setUser] = useState(null);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: "http://localhost:4000/api/user/register",
      method: "POST",
      data: input,
    })
      .then((res) => {
        setUser({ createdItem: res.data.user });
        props.history.push("/user/register");
        setError(res.data);
      })
      .catch(console.error);
  };

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

  return (
    <div className='box'>
      <h1 className='register'>Register</h1>
      {errorArray}
      <UserForm
        user={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
      {" "}
      <br />
      <Link to="/" className='home'>Home</Link>
      <br /> 
      <br />
      <Link to="/sign-in" className='login'> Login </Link>
     </div>
  );
};

export default Register;
