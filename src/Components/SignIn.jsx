import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import SignInForm from "../Components/SignInForm";

function SignIn(props) {
  const [input, setInput] = useState({username: "",
  password: ""});
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
    console.log("handleSubmit");
    axios({
      url: "http://localhost:4000/api/user/login",
      method: "POST",
      data: input,
    })
      .then((res) => {
        setUser({ createdItem: res.data.user });
        props.history.push("/login");
        console.log(user);
        //console.log(res.data.message);
        setError(res.data.message);

        //setError(res.data);
      })
      .catch(console.error);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (input.username === "acd27" && input.password === "password") {
  //     isNavigate(true);
  //   } else {
  //     isNavigate(false);
  //   }
  // };

  // if (navigate === true) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/dash",
  //         state: { msg: "You have successfully signed in!" },
  //       }}
  //     />
  //   );
  // }

  return (
    <div className="sign-in">
      <h1>EATR.Y</h1>
      <SignInForm handleChange={handleChange} handleSubmit={handleSubmit} cancelPath="/"/>
      <button onClick={handleSubmit}>Enter</button>
      <h1>
        {/* {errors.message} */}
        {errors.message === "Login Successful" ? (
          <Redirect to="/dash" />
        ) : (
          errors.message
        )}
      </h1>
      {/* <h4>
        {navigate === false
          ? "the credentials you entered are incorrect, please try again."
          : ""}
      </h4> */}
    </div>
  );
}

export default SignIn;
