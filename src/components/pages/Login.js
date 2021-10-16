import React from 'react';
import '../../App.css';

export default function Login() {
  return (
    <>
    <div className="login-container">
      <div className="login-container2">
      <div className="header-intro">
        <h1>Credit Link Finance</h1>
        <p>Sign in to start your session</p>
      </div>
      <form>
        <input type="text" name="email-phone" id="email-phone" placeholder="Email or Phone number"/><br /><br />
        <input type="password" name="password" id="password" placeholder="Password"/><br /><br />
        <div className="fpass-sign-in-container">
          <a href="" className="fpassword">Forgotten password?</a>
          <a href="" className="sign-in">sign in</a>
        </div>
       <p className="dhac">Dont have an account? <a href="">Sign up</a></p>
      </form>
      </div>
    </div>
    </>
  )
}