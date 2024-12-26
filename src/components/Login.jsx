import React, { useState } from 'react'
import '../components/Login.css'
import LoginRight from '../assets/loginRight.png'
import { Link } from 'react-router-dom'
import googleImg from '../assets/google.png'
import { useNavigate } from "react-router-dom";
import { auth } from './firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import Alert from '../components/Alert'





function Login({NotifyError, NotifySucces}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            NotifySucces()
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            NotifyError();
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log('Google User:', user);
            NotifySucces()
            setTimeout(() => {
                navigate("/");
            }, 3000);
            console.log(user);

        } catch (error) {
            NotifyError()
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
                    <h1>Login</h1>

                    <p>Don't have an account? <Link to='/Signup'>Signup</Link></p>

                    <form className='login-left-middle-form' onSubmit={handleSubmit}>
                        <label>Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email address' />
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' />
                        <Link to='/resetPassword'>
                            <p className='login-left-middle-form-p'>Forget Password?</p>
                        </Link>
                        <button className='login-left-middle-form-login-btn'>Log in</button>
                        <button
                            type='button'
                            style={{ border: "1px solid #B6A38B" }}
                            className='login-left-middle-form-google-btn'
                            onClick={handleGoogleSignIn}
                        >
                            <img className='googleImg' src={googleImg} alt="googleImg" />
                            <p>Sign up with Google</p>
                        </button>
                    </form>

                </div>
            </div>
            <div className="login-right">
                <img src={LoginRight} alt="LoginRight" />
            </div>
        </div>
    )
}

export default Login