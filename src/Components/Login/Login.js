
import React, { useContext, useState } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import { Button } from '@material-ui/core';
import { googleSignIn, signOut, initializeFirebase, facebookLogin, createUserWithEmailAndPassword, signInWithEmailAndPassword, passwordChange, authTokenStore } from './LoginManage';

import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    initializeFirebase();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        isSignIn: false,
        success: false
    })

    const [newUser, setNewUser] = useState({});

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                // authTokenStore();
                storeAuthToken();
                handleResponse(res, true);
                // setLoggedInUser(res);
                // setUser(res);
            })
    }

    const handleSignOut = () => {
        signOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleFacebookLogIn = () => {
        facebookLogin()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleBlur = (event) => {
        let formValid = true;
        if (event.target.name === 'email') {
            formValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        else if (event.target.name === 'password') {
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            const passwordValid = event.target.value.length > 6;
            formValid = passwordHasNumber && passwordValid;
        }
        if (formValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    // const { register, handleSubmit, errors } = useForm();

    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        event.preventDefault();
    }

    const handleResponse = (res, isRedirect) => {
        setLoggedInUser(res);
        setUser(res);
        if (isRedirect) {
            history.replace(from);
        }
    }

    const storeAuthToken = () => {
        authTokenStore();
    }

    const handlePasswordChange = () => {
        passwordChange(user.email);
    }
    return (
        <div style={{ textAlign: 'center' }} className="button-style">
            {
                loggedInUser.email ?
                    <Button onClick={handleSignOut} variant="contained" color="secondary">Log Out</Button> :
                    <Button onClick={handleGoogleSignIn} variant="contained" color="primary">Log In With Google</Button>
            }
           &nbsp; &nbsp;
            {
                loggedInUser.email ?
                    <Button onClick={handleSignOut} variant="contained" color="secondary">Log Out</Button> :
                    <Button onClick={handleFacebookLogIn} variant="contained" color="primary">Log In With Facebook</Button>
            }
            <div className='login-form'>
                <form className='submit-form-style' onSubmit={handleSubmit}>

                    {
                        newUser &&
                        <input name="name" placeholder="Enter Your Name" onBlur={handleBlur} />
                    }

                    <input name="email" placeholder="Enter Your Email" onBlur={handleBlur} />

                    <input name="password" placeholder="Enter Your Password" onBlur={handleBlur} />

                    <input className='submit-button' type='submit' value={newUser ? 'Sign Up' : 'Sign In'} />
                </form>

                <div>
                    <p>Do You Have Account? <span className='sign-button' onClick={() => setNewUser(!newUser)}>{newUser ? 'Sign In' : 'Sign Up'}</span> </p>
                </div>

                <div>
                    <p style={{ color: 'red', cursor: 'pointer' }} onClick={handlePasswordChange}>Forget Password Or Reset Password</p>
                </div>

                {
                    user.success ? <p style={{ color: 'green' }}>User {newUser ? 'Create' : 'Log In'} Successfully</p> : <p style={{ color: 'red' }}> {user.error}</p>
                }
            </div>
        </div>
    );
};

export default Login;