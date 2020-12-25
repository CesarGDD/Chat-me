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
                <img src="https://lh3.googleusercontent.com/proxy/3OAjd5INBY4ZX4llNHgigBf4CPnyg8N6IUdqZ4JnTlKERL7ywzSYIhr00Fu6KABM1B25oiiE1aqSWMuI4yenAu3uhPQtE3XLQT4Bo-OVHyLeBLIIdU6NH2m5hYCXUA2Ap9hy3n2A7qU-3bMAQxATiRKuxwzNowyuMl9uyUCXiw" alt="" />
                <h1>CHAT Me!</h1>
            </div>
            <Button onClick={signIn} >Sign In</Button>
        </div>
    )
}

export default Login;
