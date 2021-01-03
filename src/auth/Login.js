import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from '../firebase';
const Login = () => {
    
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }
    return (
        <div className="login" >
            <div className="login__logo">

                <h1>CHAT Me!</h1>
            </div>
            <Button onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login;
