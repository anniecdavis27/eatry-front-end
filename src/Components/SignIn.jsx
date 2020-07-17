import React from 'react';
import { Link } from "react-router-dom";
import SignInForm from '../Components/SignInForm'
import './SignIn.css'

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