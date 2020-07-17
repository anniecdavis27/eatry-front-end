import React from 'react';
import { Link } from "react-router-dom";
import SignInForm from '../Components/SignInForm'

function SignIn() {
  return (
    <div className="sign-in">
      <h1>EATR.Y</h1>
      <SignInForm />
      <Link to='/dash'><button>Enter</button></Link>
    </div>
  );
}

export default SignIn;