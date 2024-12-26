import React, { useState } from 'react'
import './ResetPassword.css'
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from 'react-router-dom'
import LoginRight from '../assets/loginRight.png'
import { auth } from "./firebase";

function ResetPassword({NotifySucces, NotifyError}) {

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);


  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      // alert("Password reset email sent!");
      NotifySucces();
    } catch (error) {
      setError(error.message);
      NotifyError();
    }
  };

  return (
    <div className='login'>
      <div className="login-left">
        <div className="login-left-circle-wrap">
          <Link to='/'>
            <div className="login-left-circle">
              <p>D</p>
            </div>
          </Link>

        </div>


        <div className="login-left-middle">
          <h1>Reset Password</h1>

          <p>Don't have an account? <Link to='/Login'>Login</Link></p>

          <form className='login-left-middle-form' onSubmit={handleResetPassword} >
            {error && <p>{error}</p>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button className='reset-button' type="submit">Reset Password</button>
          </form>

        </div>
      </div>
      <div className="login-right">
        <img src={LoginRight} alt="LoginRight" />
      </div>
    </div>
  )
}

export default ResetPassword