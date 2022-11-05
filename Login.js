import React,{useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./Login.css";
import {auth} from "./firebase";
import LOGO from "./images/logo.JPG";

function Login() {
    const history=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const login=e =>{
        e.preventDefault();//stops refresh
        //login logic
        auth.signInWithEmailAndPassword(email,password)
         .then((auth)=>{
             //logged in and redirect to homepg
             history.push('/');

         })
         .catch((e)=> alert(e.message));
    }

    const register=e =>{
        e.preventDefault();
        //logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //create user and logged in redirect to hp
            history.push('/');
        }
        )
        .catch((e)=> alert(e.message));


    }
    return (
      <div className="login">
        <Link to="/">
          <img className="header_logo" src={LOGO}></img>
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
            <button onClick={login} type="submit" className="login__button">
              Sign in
            </button>
            <p>
              By signing-in you agree to Shawtee's Condition of Use & sale.
              Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
            <button onClick={register} className="signIn__button">
              Create Your Shawtee Account
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login
