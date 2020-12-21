import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

function Login() {

    const history = useHistory();
    const[email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const signIn = e => { 
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    }

    const register = e => { 
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => { 
                console.log(auth);
                if (auth) { 
                    history.push('/')
                }
            })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to = "/">
            <img className="login_logo"
                src="https://cdn.usbrandcolors.com/images/logos/amazon-logo.svg"
                alt="logo" />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail address</h5>
                    
                    <input type="text" value={email} onChange=
                        { e => setEmail(e.target.value)} />
                    
                    <h5>Password</h5>
                    
                    <input type="password" value={password} onChange=
                        {e => setpassword(e.target.value)} />
                    
                    <button className="login_signIn" type="submit" onClick={signIn}>
                        Sign-in
                </button>
                </form>
                <p>
                    By Signing-in, you agree to Amazon FAKE 
                    CLONE's Conditions of Use and Privacy Notice.
                </p>
                
            </div>
            <div className="login_register">
                <p>New to Amazon?</p>
                <button className="login_registerbutton" onClick={register}>
                    Create your Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login
